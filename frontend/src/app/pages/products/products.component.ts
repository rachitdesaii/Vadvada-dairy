import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSectionComponent } from '../../components/products-section/products-section.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductsSectionComponent],
  template: `
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1550583724-b2692b85b150?w=1400&q=80" alt="Dairy Products" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb" data-aos="fade-down">Home / Products</div>
        <h1 data-aos="fade-up" data-aos-delay="100">Our Premium Products</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Pure, Fresh and Hygienic Dairy Products from Kheda, Gujarat
        </p>
      </div>
    </section>

    <app-products-section></app-products-section>

    <!-- Info Strip -->
    <section class="info-strip">
      <div class="container info-grid">
        <div class="info-item" data-aos="fade-up">
          <span class="info-icon">🌿</span>
          <div>
            <strong>100% Natural</strong>
            <p>No preservatives, no additives</p>
          </div>
        </div>
        <div class="info-item" data-aos="fade-up" data-aos-delay="100">
          <span class="info-icon">🚚</span>
          <div>
            <strong>Fresh Daily</strong>
            <p>Prepared and delivered every morning</p>
          </div>
        </div>
        <div class="info-item" data-aos="fade-up" data-aos-delay="200">
          <span class="info-icon">📞</span>
          <div style="display: flex; flex-direction: column;">
            <strong>Inquire Now</strong>
            <a href="tel:+919998460456" style="margin-bottom: 2px;">Haribhai: +91 99984 60456</a>
            <a href="tel:+919909182945">Rajubhai: +91 99091 82945</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative;
      height: 50vh;
      min-height: 320px;
      display: flex;
      align-items: flex-end;
      overflow: hidden;
    }

    .page-hero-bg {
      position: absolute; inset: 0;
      img { width: 100%; height: 100%; object-fit: cover; }
    }

    .page-hero-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(39,51,56,0.85) 0%, rgba(43,87,72,0.7) 100%);
    }

    .page-hero-content {
      position: relative; z-index: 1;
      padding-bottom: 4rem; padding-top: 100px;
      color: #fff;
      h1 {
        font-family: 'Playfair Display', serif;
        font-size: clamp(2rem, 5vw, 3.5rem);
        color: #fff;
        margin-bottom: 0.75rem;
      }
      p {
        font-family: 'Poppins', sans-serif;
        color: rgba(255,255,255,0.75);
        font-size: 1.05rem;
      }
    }

    .breadcrumb {
      font-family: 'Poppins', sans-serif;
      font-size: 0.8rem;
      color: rgba(255,255,255,0.55);
      margin-bottom: 1rem;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    .info-strip {
      background: #fff;
      padding: 3rem 0;
      border-top: 1px solid rgba(97,135,100,0.1);
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .info-item {
      display: flex; align-items: center; gap: 1rem;
      .info-icon { font-size: 2rem; }
      strong { font-family: 'Playfair Display', serif; font-size: 1.1rem; color: #1a2421; display: block; margin-bottom: 0.25rem; }
      p, a { font-family: 'Poppins', sans-serif; font-size: 0.85rem; color: #6b7c6e; margin: 0; text-decoration: none; }
      a:hover { color: #618764; }
    }

    @media (max-width: 768px) {
      .info-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProductsComponent {}
