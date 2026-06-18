const mongoose = require('mongoose');
const Contact = require('../models/Contact');

// In-memory database fallback if MongoDB is not connected
const localContacts = [];

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // Basic validation
    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Phone validation (Indian mobile)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid Indian mobile number (10 digits)',
      });
    }

    // Email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address',
      });
    }

    const isConnected = mongoose.connection.readyState === 1;
    let savedData;

    if (isConnected) {
      const contact = new Contact({
        name: name.trim(),
        phone: phone.trim().replace(/\s+/g, ''),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        ipAddress: req.ip || req.connection.remoteAddress,
      });

      await contact.save();
      savedData = {
        id: contact._id,
        name: contact.name,
        createdAt: contact.createdAt,
      };
    } else {
      const mockContact = {
        _id: 'local_' + Date.now() + Math.random().toString(36).substring(2, 7),
        name: name.trim(),
        phone: phone.trim().replace(/\s+/g, ''),
        email: email.trim().toLowerCase(),
        message: message.trim(),
        ipAddress: req.ip || req.connection.remoteAddress,
        createdAt: new Date().toISOString(),
        status: 'new',
      };
      localContacts.push(mockContact);
      savedData = {
        id: mockContact._id,
        name: mockContact.name,
        createdAt: mockContact.createdAt,
      };
    }

    res.status(201).json({
      success: true,
      message: 'Thank you! Your message has been received. We will contact you soon.',
      data: savedData,
    });
  } catch (error) {
    console.error('Contact form error:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map((err) => err.message);
      return res.status(400).json({
        success: false,
        message: messages[0],
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
    });
  }
};

// @desc    Get all contact submissions
// @route   GET /api/contact
// @access  Public (no admin panel - just for testing)
const getContacts = async (req, res) => {
  try {
    const isConnected = mongoose.connection.readyState === 1;
    let contacts;

    if (isConnected) {
      contacts = await Contact.find().sort({ createdAt: -1 }).limit(50);
    } else {
      contacts = [...localContacts].reverse().slice(0, 50);
    }

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

module.exports = { submitContact, getContacts };
