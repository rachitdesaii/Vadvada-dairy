const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { submitContact, getContacts } = require('../controllers/contactController');

// Rate limiter: max 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: 'Too many contact requests, please try again after 15 minutes.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

router.post('/', contactLimiter, submitContact);
router.get('/', getContacts);

module.exports = router;
