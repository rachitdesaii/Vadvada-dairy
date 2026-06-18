import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { ProductsSectionComponent } from '../../components/products-section/products-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    WhyChooseUsComponent,
    ProductsSectionComponent,
    TestimonialsComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-why-choose-us></app-why-choose-us>
    <app-products-section></app-products-section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <div class="container cta-inner">
        <div class="cta-text" data-aos="fade-right">
          <h2>Fresh Dairy Products Every Day</h2>
          <p>Contact us to inquire about our dairy products in Kheda, Gujarat</p>
        </div>
        <div class="cta-actions" data-aos="fade-left">
          <div class="contact-card">
            <span class="owner-name">Haribhai Rabari</span>
            <div class="card-buttons">
              <a href="https://wa.me/919998460456" target="_blank" class="btn btn-wa">💬 WhatsApp</a>
              <a href="tel:+919998460456" class="btn btn-call">📞 Call</a>
            </div>
          </div>
          <div class="contact-card">
            <span class="owner-name">Rajubhai Rabari</span>
            <div class="card-buttons">
              <a href="https://wa.me/919909182945" target="_blank" class="btn btn-wa">💬 WhatsApp</a>
              <a href="tel:+919909182945" class="btn btn-call">📞 Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <app-testimonials></app-testimonials>
  `,
  styles: [`
    .cta-banner {
      background: linear-gradient(135deg, #2B5748 0%, #273338 100%);
      padding: 5rem 0;
      position: relative;
      overflow: hidden;

      &::before {
        content: '🥛';
        position: absolute;
        right: -2rem; top: 50%;
        transform: translateY(-50%);
        font-size: 15rem;
        opacity: 0.05;
      }
    }

    .cta-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
      flex-wrap: wrap;
    }

    .cta-text {
      h2 {
        font-family: 'Playfair Display', serif;
        color: #fff;
        font-size: clamp(1.5rem, 3vw, 2.25rem);
        margin-bottom: 0.5rem;
      }
      p {
        font-family: 'Poppins', sans-serif;
        color: rgba(255,255,255,0.65);
        font-size: 1rem;
      }
    }

    .cta-actions { display: flex; gap: 1.5rem; flex-wrap: wrap; }

    .contact-card {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
      padding: 1rem 1.25rem;
      border-radius: 16px;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      backdrop-filter: blur(8px);
    }
    .owner-name {
      color: #9CB080;
      font-family: 'Poppins', sans-serif;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .card-buttons {
      display: flex;
      gap: 0.75rem;
    }
    .btn-wa {
      background: linear-gradient(135deg,#25D366,#128C7E);
      color:#fff;
      box-shadow: 0 4px 12px rgba(37,211,102,0.3);
      padding: 0.45rem 1rem !important;
      font-size: 0.8rem !important;
      border-radius: 30px !important;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(37,211,102,0.45);
      }
    }
    .btn-call {
      border: 1px solid rgba(255,255,255,0.3);
      color:#fff;
      padding: 0.45rem 1rem !important;
      font-size: 0.8rem !important;
      border-radius: 30px !important;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;
      background: transparent;
      &:hover {
        background: rgba(255,255,255,0.08);
        border-color: #fff;
        transform: translateY(-2px);
      }
    }

    @media (max-width: 990px) {
      .cta-inner { flex-direction: column; text-align: center; }
      .cta-actions { justify-content: center; }
    }
  `]
})
export class HomeComponent {}
