import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  template: `
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1400&q=80" alt="Contact Vadvada Dairy" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb">Home / Contact Us</div>
        <h1>Get In Touch</h1>
        <p>We're here to help — reach out to us anytime</p>
      </div>
    </section>

    <section class="contact-section section-padding">
      <div class="container contact-grid">

        <!-- Left: Info Cards -->
        <div class="contact-info" data-aos="fade-right">
          <h2>Contact Information</h2>
          <p class="contact-intro">Have questions about our dairy products? We'd love to hear from you. Reach out through any of the channels below.</p>

          <div class="info-cards">
            <div class="info-card">
              <div class="info-card-icon">📍</div>
              <div>
                <strong>Our Location</strong>
                <p>Vadvada Dairy Products<br/>Kheda, Gujarat – 387411<br/>India</p>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card-icon">👤</div>
              <div>
                <strong>Haribhai (Laljibhai) Rabari</strong>
                <p>Co-Owner</p>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap;">
                  <a href="tel:+919998460456" class="info-link" style="color: #618764; font-weight: 500;">📞 Call</a>
                  <a href="https://wa.me/919998460456" target="_blank" class="info-link" style="color: #25D366; font-weight: 500;">💬 WhatsApp</a>
                </div>
              </div>
            </div>

            <div class="info-card">
              <div class="info-card-icon">👤</div>
              <div>
                <strong>Rajubhai Rabari</strong>
                <p>Co-Owner</p>
                <div style="display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap;">
                  <a href="tel:+919909182945" class="info-link" style="color: #618764; font-weight: 500;">📞 Call</a>
                  <a href="https://wa.me/919909182945" target="_blank" class="info-link" style="color: #25D366; font-weight: 500;">💬 WhatsApp</a>
                </div>
              </div>
            </div>

            <div class="info-card whatsapp-card">
              <div class="info-card-icon">💬</div>
              <div>
                <strong>WhatsApp Chat</strong>
                <p>Chat with us directly</p>
                <a href="https://wa.me/919998460456" target="_blank" class="info-link wa-link" style="margin-bottom: 0.5rem; display: inline-block;">
                  Haribhai: +91 99984 60456 →
                </a>
                <br/>
                <a href="https://wa.me/919909182945" target="_blank" class="info-link wa-link" style="display: inline-block;">
                  Rajubhai: +91 99091 82945 →
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Contact Form -->
        <div class="contact-form-wrap" data-aos="fade-left">
          <div class="form-card">
            <h3>Send Us a Message</h3>
            <p>Fill out the form and we'll get back to you as soon as possible.</p>

            <!-- Success Toast -->
            <div class="toast success-toast" [class.show]="showSuccess">
              <span>✅</span>
              <p>{{ successMessage }}</p>
            </div>

            <!-- Error Toast -->
            <div class="toast error-toast" [class.show]="showError">
              <span>❌</span>
              <p>{{ errorMessage }}</p>
            </div>

            <form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)" novalidate>
              <!-- Name -->
              <div class="form-group">
                <label for="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  minlength="2"
                  #name="ngModel"
                  placeholder="Your full name"
                  [class.invalid]="name.invalid && name.touched"
                />
                <span class="field-error" *ngIf="name.invalid && name.touched">
                  Please enter your full name (min 2 characters)
                </span>
              </div>

              <!-- Phone -->
              <div class="form-group">
                <label for="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  [(ngModel)]="formData.phone"
                  required
                  pattern="[6-9][0-9]{9}"
                  #phone="ngModel"
                  placeholder="10-digit mobile number"
                  [class.invalid]="phone.invalid && phone.touched"
                />
                <span class="field-error" *ngIf="phone.invalid && phone.touched">
                  Please enter a valid 10-digit Indian mobile number
                </span>
              </div>

              <!-- Email -->
              <div class="form-group">
                <label for="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  email
                  #email="ngModel"
                  placeholder="your@email.com"
                  [class.invalid]="email.invalid && email.touched"
                />
                <span class="field-error" *ngIf="email.invalid && email.touched">
                  Please enter a valid email address
                </span>
              </div>

              <!-- Message -->
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  [(ngModel)]="formData.message"
                  required
                  minlength="10"
                  #message="ngModel"
                  placeholder="Tell us about your inquiry..."
                  rows="5"
                  [class.invalid]="message.invalid && message.touched"
                ></textarea>
                <span class="field-error" *ngIf="message.invalid && message.touched">
                  Please enter your message (min 10 characters)
                </span>
              </div>

              <button
                type="submit"
                class="btn btn-primary submit-btn"
                [disabled]="isSubmitting"
              >
                <span *ngIf="!isSubmitting">📤 Send Message</span>
                <span *ngIf="isSubmitting" class="spinner">⏳ Sending...</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Map -->
    <section class="map-section" data-aos="fade-up">
      <div class="map-header">
        <h2>Find Us in Kheda, Gujarat</h2>
        <p>Kheda, Gujarat – 387411, India</p>
      </div>
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59136.81!2d72.6831!3d22.7521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834a3c2cd87b%3A0xc6c98b6e2b5e5c4a!2sKheda%2C%20Gujarat%20387411!5e0!3m2!1sen!2sin!4v1699000000000"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Kheda Gujarat Map"
        ></iframe>
      </div>
    </section>
  `,
  styles: [`
    .page-hero { position: relative; height: 50vh; min-height: 320px; display: flex; align-items: flex-end; overflow: hidden; }
    .page-hero-bg { position: absolute; inset: 0; img { width: 100%; height: 100%; object-fit: cover; } }
    .page-hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(39,51,56,0.88), rgba(43,87,72,0.7)); }
    .page-hero-content {
      position: relative; z-index: 1; padding-bottom: 4rem; padding-top: 100px; color: #fff;
      h1 { font-family: 'Playfair Display', serif; font-size: clamp(2rem,5vw,3.5rem); color: #fff; margin-bottom: 0.75rem; }
      p { font-family: 'Poppins', sans-serif; color: rgba(255,255,255,0.75); font-size: 1.05rem; }
    }
    .breadcrumb { font-family: 'Poppins', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.55); margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase; }

    .contact-section { background: #F7F9F5; }
    .contact-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 4rem; align-items: start; }

    .contact-info {
      h2 { font-family: 'Playfair Display', serif; font-size: 2rem; color: #1a2421; margin-bottom: 1rem; }
    }
    .contact-intro { font-family: 'Poppins', sans-serif; font-size: 0.95rem; color: #6b7c6e; line-height: 1.8; margin-bottom: 2rem; }

    .info-cards { display: flex; flex-direction: column; gap: 1.25rem; }
    .info-card {
      display: flex; gap: 1rem; align-items: flex-start;
      background: #fff; border-radius: 16px; padding: 1.5rem;
      box-shadow: 0 4px 20px rgba(39,51,56,0.07);
      border: 1px solid rgba(97,135,100,0.08);
      transition: all 0.3s ease;
      &:hover { transform: translateX(6px); box-shadow: 0 8px 32px rgba(39,51,56,0.12); }

      .info-card-icon { font-size: 1.5rem; flex-shrink: 0; margin-top: 2px; }
      strong { font-family: 'Poppins', sans-serif; font-size: 0.95rem; color: #1a2421; font-weight: 600; display: block; margin-bottom: 0.25rem; }
      p { font-family: 'Poppins', sans-serif; font-size: 0.85rem; color: #6b7c6e; margin: 0 0 0.4rem; line-height: 1.5; }
    }
    .info-link { font-family: 'Poppins', sans-serif; font-size: 0.9rem; font-weight: 600; color: #618764; text-decoration: none; transition: color 0.3s ease; &:hover { color: #2B5748; } }
    .wa-link { color: #25D366 !important; }
    .whatsapp-card { border-color: rgba(37,211,102,0.2); &:hover { border-color: rgba(37,211,102,0.4); } }

    /* Form Card */
    .form-card {
      background: #fff;
      border-radius: 24px;
      padding: 2.5rem;
      box-shadow: 0 8px 40px rgba(39,51,56,0.1);
      border: 1px solid rgba(97,135,100,0.08);

      h3 { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: #1a2421; margin-bottom: 0.5rem; }
      > p { font-family: 'Poppins', sans-serif; font-size: 0.875rem; color: #6b7c6e; margin-bottom: 1.75rem; }
    }

    /* Toast */
    .toast {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 1rem 1.25rem; border-radius: 12px; margin-bottom: 1.5rem;
      opacity: 0; transform: translateY(-10px); max-height: 0; overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
      p { margin: 0; font-family: 'Poppins', sans-serif; font-size: 0.9rem; font-weight: 500; }
      &.show { opacity: 1; transform: translateY(0); max-height: 80px; }
    }
    .success-toast { background: rgba(37,211,102,0.1); border: 1px solid rgba(37,211,102,0.3); p { color: #0f7a3c; } }
    .error-toast   { background: rgba(239,68,68,0.1);  border: 1px solid rgba(239,68,68,0.3);  p { color: #b91c1c; } }

    /* Form Groups */
    .form-group { margin-bottom: 1.25rem; }
    label { display: block; font-family: 'Poppins', sans-serif; font-size: 0.85rem; font-weight: 600; color: #1a2421; margin-bottom: 0.5rem; }

    input, textarea {
      width: 100%;
      padding: 0.875rem 1.125rem;
      border: 2px solid rgba(97,135,100,0.2);
      border-radius: 12px;
      font-family: 'Poppins', sans-serif;
      font-size: 0.9rem;
      color: #1a2421;
      background: #F7F9F5;
      transition: all 0.3s ease;
      outline: none;
      resize: none;

      &:focus {
        border-color: #618764;
        background: #fff;
        box-shadow: 0 0 0 4px rgba(97,135,100,0.1);
      }
      &.invalid { border-color: #ef4444; background: rgba(239,68,68,0.03); }
      &::placeholder { color: #b4c4b7; }
    }

    .field-error { font-family: 'Poppins', sans-serif; font-size: 0.78rem; color: #ef4444; margin-top: 0.35rem; display: block; }

    .submit-btn { width: 100%; justify-content: center; padding: 1rem; font-size: 1rem; margin-top: 0.5rem; }
    .spinner { display: flex; align-items: center; gap: 0.5rem; }

    /* Map */
    .map-section { background: #fff; }
    .map-header { text-align: center; padding: 3rem 1.5rem 2rem;
      h2 { font-family: 'Playfair Display', serif; font-size: 2rem; color: #1a2421; margin-bottom: 0.5rem; }
      p { font-family: 'Poppins', sans-serif; color: #6b7c6e; }
    }
    .map-container { iframe { display: block; filter: grayscale(20%) contrast(1.05); } }

    @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr; } }
    @media (max-width: 480px) { .form-card { padding: 1.75rem 1.25rem; } }
  `]
})
export class ContactComponent {
  formData = { name: '', phone: '', email: '', message: '' };
  isSubmitting = false;
  showSuccess = false;
  showError = false;
  successMessage = '';
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.keys(form.controls).forEach(key => form.controls[key].markAsTouched());
      return;
    }
    this.isSubmitting = true;
    this.showSuccess = false;
    this.showError = false;

    this.contactService.submitContact(this.formData).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.showSuccess = true;
        this.successMessage = res.message || 'Thank you! Your message has been received. We will contact you soon.';
        form.resetForm();
        setTimeout(() => this.showSuccess = false, 6000);
      },
      error: (err) => {
        this.isSubmitting = false;
        this.showError = true;
        this.errorMessage = err?.error?.message || 'Unable to send message. Please call us directly at +91 99984 60456.';
        setTimeout(() => this.showError = false, 6000);
      }
    });
  }
}
