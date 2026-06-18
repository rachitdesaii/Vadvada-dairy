import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero-bg">
        <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1400&q=80" alt="About Vadvada Dairy" />
        <div class="page-hero-overlay"></div>
      </div>
      <div class="container page-hero-content">
        <div class="breadcrumb" data-aos="fade-down">Home / About Us</div>
        <h1 data-aos="fade-up" data-aos-delay="100">About Vadvada Dairy Products</h1>
        <p data-aos="fade-up" data-aos-delay="200">Family-owned. Trusted. Pure. Fresh.</p>
      </div>
    </section>

    <!-- About Story -->
    <section class="about-story section-padding">
      <div class="container about-grid">
        <div class="about-image-col" data-aos="fade-right">
          <div class="about-image-wrap">
            <div class="about-logo-card">
              <img src="/logo.png" alt="Vadvada Dairy Products Logo" class="about-logo" />
            </div>
            <div class="about-img-badge">
              <span class="badge-num">100%</span>
              <span class="badge-text">Pure Dairy</span>
            </div>
          </div>
        </div>
        <div class="about-text-col" data-aos="fade-left">
          <span class="subtitle">Our Story</span>
          <h2>Committed to Purity & Quality</h2>
          <p>
            Vadvada Dairy Products is a family-owned dairy business committed to delivering
            fresh, pure and high-quality dairy products to customers while maintaining
            traditional values and modern quality standards.
          </p>
          <p>
            Located in Kheda, Gujarat – 387411, we have been proudly serving our community
            with the finest dairy products. Our business is built on the pillars of trust,
            purity, freshness and customer satisfaction.
          </p>
          <p>
            Every product we deliver carries the dedication and passion of our family —
            from our farm to your home. We believe in maintaining the highest standards
            while honouring the age-old dairy traditions of Gujarat.
          </p>
          <div class="about-highlights">
            <div class="highlight">
              <span class="highlight-icon">✅</span>
              <span>Freshly prepared daily</span>
            </div>
            <div class="highlight">
              <span class="highlight-icon">✅</span>
              <span>No preservatives or additives</span>
            </div>
            <div class="highlight">
              <span class="highlight-icon">✅</span>
              <span>Hygienic processing standards</span>
            </div>
            <div class="highlight">
              <span class="highlight-icon">✅</span>
              <span>Traditional Gujarati dairy methods</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mv-section section-padding bg-dark">
      <div class="container">
        <div class="mv-grid">
          <div class="mv-card" data-aos="fade-right">
            <div class="mv-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              Providing Pure Dairy Products with Trust, Quality and Freshness —
              ensuring every customer receives nothing but the best from nature.
            </p>
          </div>
          <div class="mv-divider"></div>
          <div class="mv-card" data-aos="fade-left">
            <div class="mv-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>
              To become one of Gujarat's most trusted dairy product brands while
              maintaining excellence in quality and customer satisfaction across every product.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Owners Section -->
    <section class="owners-section section-padding">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <span class="subtitle">Leadership</span>
          <h2>Meet Our Owners</h2>
          <div class="divider"></div>
        </div>

        <div class="owners-grid">
          <div
            class="owner-card"
            *ngFor="let owner of owners; let i = index"
            [attr.data-aos]="'fade-up'"
            [attr.data-aos-delay]="100 + i * 100"
          >
            <div class="owner-photo-wrap">
              <div class="owner-photo-frame">
                <img
                  [src]="owner.photo"
                  [alt]="owner.name + ' – Vadvada Dairy Products'"
                  class="owner-photo"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="owner-photo-ring"></div>
            </div>
            <div class="owner-info">
              <h3>{{ owner.name }}</h3>
              <span class="owner-role">{{ owner.role }}</span>
              <p class="owner-desc">{{ owner.description }}</p>
              <div class="owner-contacts">
                <a [href]="'tel:+91' + owner.phone" class="owner-contact-btn">
                  📞 +91 {{ owner.phoneFormatted }}
                </a>
                <a
                  [href]="'https://wa.me/91' + owner.phone"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="owner-contact-btn wa"
                >
                  📱 WhatsApp: {{ owner.phone }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section section-padding" style="background: #F7F9F5">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <span class="subtitle">What We Stand For</span>
          <h2>Our Core Values</h2>
          <div class="divider"></div>
        </div>
        <div class="values-grid">
          <div class="value-item" *ngFor="let v of values; let i = index"
               [attr.data-aos]="'zoom-in'" [attr.data-aos-delay]="i * 80">
            <div class="value-emoji">{{ v.emoji }}</div>
            <h4>{{ v.title }}</h4>
            <p>{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      position: relative; height: 50vh; min-height: 320px;
      display: flex; align-items: flex-end; overflow: hidden;
    }
    .page-hero-bg { position: absolute; inset: 0; img { width: 100%; height: 100%; object-fit: cover; } }
    .page-hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(39,51,56,0.88), rgba(43,87,72,0.7)); }
    .page-hero-content {
      position: relative; z-index: 1; padding-bottom: 4rem; padding-top: 100px; color: #fff;
      h1 { font-family: 'Playfair Display', serif; font-size: clamp(2rem,5vw,3.5rem); color: #fff; margin-bottom: 0.75rem; }
      p { font-family: 'Poppins', sans-serif; color: rgba(255,255,255,0.75); font-size: 1.05rem; }
    }
    .breadcrumb { font-family: 'Poppins', sans-serif; font-size: 0.8rem; color: rgba(255,255,255,0.55); margin-bottom: 1rem; letter-spacing: 1px; text-transform: uppercase; }

    /* About Story */
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
    .about-image-wrap { position: relative; border-radius: 24px; overflow: visible; }
    .about-logo-card {
      border-radius: 24px;
      background: linear-gradient(145deg, #ffffff 0%, #F7F9F5 100%);
      box-shadow: 0 24px 60px rgba(39,51,56,0.2);
      border: 1px solid rgba(97,135,100,0.12);
      min-height: 380px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 3rem 2.5rem;
      transition: transform 0.5s ease, box-shadow 0.5s ease;
      &:hover {
        transform: scale(1.02);
        box-shadow: 0 32px 72px rgba(39,51,56,0.25);
        .about-logo { transform: scale(1.05); }
      }
    }
    .about-logo {
      width: 100%;
      max-width: 280px;
      height: auto;
      object-fit: contain;
      transition: transform 0.5s ease;
      filter: drop-shadow(0 8px 24px rgba(39,51,56,0.12));
    }
    .about-img-badge {
      position: absolute; bottom: -1.5rem; right: -1.5rem;
      background: linear-gradient(135deg, #618764, #2B5748);
      border-radius: 16px; padding: 1.5rem; text-align: center;
      box-shadow: 0 8px 32px rgba(97,135,100,0.4); color: #fff;
      .badge-num { display: block; font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 800; }
      .badge-text { font-family: 'Poppins', sans-serif; font-size: 0.75rem; letter-spacing: 1px; opacity: 0.85; }
    }
    .about-text-col { .subtitle { color: #618764; font-family: 'Poppins', sans-serif; font-size: 0.85rem; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; display: block; margin-bottom: 0.75rem; } }
    .about-text-col h2 { margin-bottom: 1.5rem; }
    .about-text-col p { margin-bottom: 1rem; font-size: 0.95rem; }
    .about-highlights { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem; }
    .highlight { display: flex; align-items: center; gap: 0.75rem; font-family: 'Poppins', sans-serif; font-size: 0.9rem; color: #1a2421; font-weight: 500; }
    .highlight-icon { font-size: 1rem; }

    /* Mission & Vision */
    .mv-section { background: #273338; }
    .mv-grid { display: flex; align-items: center; gap: 4rem; }
    .mv-card {
      flex: 1; text-align: center; padding: 3rem 2rem;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 24px;
      transition: all 0.4s ease;
      &:hover { background: rgba(255,255,255,0.08); transform: translateY(-8px); }
      h3 { font-family: 'Playfair Display', serif; color: #fff; font-size: 1.5rem; margin: 1rem 0 0.75rem; }
      p { font-family: 'Poppins', sans-serif; color: rgba(255,255,255,0.65); font-size: 0.95rem; line-height: 1.8; }
    }
    .mv-icon { font-size: 3rem; }
    .mv-divider { width: 1px; height: 200px; background: rgba(255,255,255,0.1); flex-shrink: 0; }

    /* Owners */
    .owners-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin-top: 4rem;
      align-items: stretch;
    }

    .owner-card {
      background: linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(247,249,245,0.95) 100%);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border-radius: 24px;
      padding: 2.5rem 2rem 2.75rem;
      box-shadow:
        0 8px 40px rgba(39,51,56,0.08),
        0 1px 0 rgba(255,255,255,0.8) inset;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      transition: all 0.45s cubic-bezier(0.4,0,0.2,1);
      border: 1px solid rgba(97,135,100,0.12);
      height: 100%;

      &:hover {
        transform: translateY(-10px);
        box-shadow:
          0 28px 64px rgba(39,51,56,0.16),
          0 0 0 1px rgba(97,135,100,0.18);
        .owner-photo { transform: scale(1.04); }
        .owner-photo-ring { opacity: 1; transform: scale(1.06); }
      }
    }

    .owner-photo-wrap {
      position: relative;
      margin-bottom: 1.75rem;
      flex-shrink: 0;
    }

    .owner-photo-frame {
      width: 148px;
      height: 148px;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      z-index: 1;
      border: 4px solid #fff;
      box-shadow:
        0 12px 36px rgba(39,51,56,0.18),
        0 0 0 3px rgba(97,135,100,0.25);
      background: linear-gradient(135deg, #F7F9F5, #e8efe3);
    }

    .owner-photo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      display: block;
      transition: transform 0.45s cubic-bezier(0.4,0,0.2,1);
      image-rendering: auto;
    }

    .owner-photo-ring {
      position: absolute;
      inset: -8px;
      border: 2px solid rgba(97,135,100,0.35);
      border-radius: 50%;
      opacity: 0.65;
      transition: all 0.45s ease;
      animation: ownerRing 3s ease-in-out infinite;
      pointer-events: none;
    }

    @keyframes ownerRing {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.04); opacity: 0.85; }
    }

    .owner-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      width: 100%;

      h3 {
        font-family: 'Playfair Display', serif;
        font-size: 1.35rem;
        color: #1a2421;
        margin-bottom: 0.35rem;
        line-height: 1.3;
      }
    }

    .owner-role {
      font-family: 'Poppins', sans-serif;
      font-size: 0.78rem;
      color: #618764;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      line-height: 1.5;
      max-width: 260px;
    }

    .owner-desc {
      font-family: 'Poppins', sans-serif;
      font-size: 0.875rem;
      color: #6b7c6e;
      line-height: 1.8;
      margin: 1rem 0 1.5rem;
      flex: 1;
      max-width: 320px;
    }

    .owner-contacts {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: center;
      margin-top: auto;
      width: 100%;
    }

    .owner-contact-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.55rem 1.15rem;
      background: rgba(247,249,245,0.9);
      border: 1px solid rgba(97,135,100,0.2);
      border-radius: 50px;
      font-family: 'Poppins', sans-serif;
      font-size: 0.8rem;
      font-weight: 500;
      color: #618764;
      text-decoration: none;
      transition: all 0.3s ease;
      white-space: nowrap;

      &:hover {
        background: #618764;
        color: #fff;
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(97,135,100,0.25);
      }

      &.wa {
        background: rgba(37,211,102,0.1);
        border-color: rgba(37,211,102,0.3);
        color: #25D366;

        &:hover {
          background: #25D366;
          color: #fff;
          box-shadow: 0 6px 20px rgba(37,211,102,0.3);
        }
      }
    }

    /* Values */
    .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.5rem; margin-top: 3rem; }
    .value-item {
      background: #fff; border-radius: 20px; padding: 2rem 1.5rem; text-align: center;
      box-shadow: 0 4px 20px rgba(39,51,56,0.06);
      border: 1px solid rgba(97,135,100,0.08);
      transition: all 0.3s ease;
      &:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(39,51,56,0.14); }
    }
    .value-emoji { font-size: 2.5rem; margin-bottom: 0.75rem; }
    .value-item h4 { font-family: 'Playfair Display', serif; font-size: 1.05rem; color: #1a2421; margin-bottom: 0.5rem; }
    .value-item p { font-family: 'Poppins', sans-serif; font-size: 0.82rem; color: #6b7c6e; line-height: 1.6; }

    @media (max-width: 900px) { .about-grid { grid-template-columns: 1fr; gap: 3rem; } .about-logo-card { min-height: 300px; padding: 2.5rem 2rem; } .about-logo { max-width: 220px; } .mv-grid { flex-direction: column; gap: 2rem; } .mv-divider { width: 80px; height: 1px; } .owner-photo-frame { width: 132px; height: 132px; } }
    @media (max-width: 640px) {
      .owners-grid { grid-template-columns: 1fr; max-width: 420px; margin-left: auto; margin-right: auto; }
      .about-logo-card { min-height: 260px; padding: 2rem 1.5rem; }
      .about-logo { max-width: 180px; }
      .owner-card { padding: 2rem 1.5rem 2.25rem; }
      .owner-photo-frame { width: 120px; height: 120px; }
      .owner-contact-btn { font-size: 0.75rem; padding: 0.5rem 0.95rem; white-space: normal; text-align: center; justify-content: center; }
    }
  `]
})
export class AboutComponent {
  owners = [
    {
      name: 'Laljibhai Rabari',
      role: 'Co-Founder & Dairy Operations Head',
      phone: '9998460456',
      phoneFormatted: '99984 60456',
      photo: '/owners/laljibhai-rabari.png',
      description:
        'Dedicated to maintaining the highest standards of dairy quality and building lasting trust with customers across Kheda and Gujarat.',
    },
    {
      name: 'Rajubhai Rabari',
      role: 'Co-Founder & Customer Relations Head',
      phone: '9909182945',
      phoneFormatted: '99091 82945',
      photo: '/owners/rajubhai-rabari.png',
      description:
        'Passionate about traditional dairy excellence and ensuring every customer receives fresh, pure products with a smile and reliable service.',
    },
  ];

  values = [
    { emoji: '🌿', title: 'Purity', desc: 'Only 100% natural dairy with zero artificial additives' },
    { emoji: '🌅', title: 'Freshness', desc: 'Delivered fresh every single morning to your doorstep' },
    { emoji: '🤝', title: 'Trust', desc: 'Built on years of reliability and honest business' },
    { emoji: '⭐', title: 'Quality', desc: 'Highest standards in every product we produce' },
    { emoji: '❤️', title: 'Care', desc: 'Family values passed through every generation' },
    { emoji: '🏆', title: 'Excellence', desc: 'Committed to being the best dairy in Gujarat' },
  ];
}
