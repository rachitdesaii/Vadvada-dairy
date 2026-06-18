import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="why-section section-padding bg-light">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <span class="subtitle">Why Vadvada</span>
          <h2>Why Choose Us?</h2>
          <div class="divider"></div>
        </div>

        <div class="features-grid">
          <div
            *ngFor="let f of features; let i = index"
            class="feature-card"
            [attr.data-aos]="'fade-up'"
            [attr.data-aos-delay]="i * 100"
          >
            <div class="feature-icon-wrap" [style.background]="f.color + '20'">
              <span class="feature-icon">{{ f.icon }}</span>
              <div class="feature-glow" [style.background]="f.color"></div>
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.description }}</p>
            <div class="feature-bar" [style.background]="f.color"></div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 2rem;
      margin-top: 4rem;
    }

    .feature-card {
      background: #fff;
      border-radius: 20px;
      padding: 2.5rem 2rem;
      text-align: center;
      box-shadow: 0 4px 24px rgba(39,51,56,0.08);
      transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
      position: relative;
      overflow: hidden;
      cursor: default;

      &:hover {
        transform: translateY(-12px);
        box-shadow: 0 20px 60px rgba(39,51,56,0.18);

        .feature-bar { width: 100%; }
        .feature-icon { transform: scale(1.15) rotate(-5deg); }
        .feature-glow { opacity: 0.15; transform: scale(1.3); }
      }
    }

    .feature-icon-wrap {
      width: 80px; height: 80px;
      border-radius: 20px;
      display: flex; align-items: center; justify-content: center;
      margin: 0 auto 1.5rem;
      position: relative;
    }

    .feature-icon {
      font-size: 2.2rem;
      display: block;
      transition: transform 0.4s ease;
      z-index: 1;
      position: relative;
    }

    .feature-glow {
      position: absolute; inset: 0;
      border-radius: 20px;
      opacity: 0;
      transition: all 0.4s ease;
      filter: blur(8px);
    }

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      color: #1a2421;
      margin-bottom: 0.75rem;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 0.9rem;
      color: #6b7c6e;
      line-height: 1.7;
    }

    .feature-bar {
      position: absolute;
      bottom: 0; left: 0;
      height: 4px;
      width: 0;
      border-radius: 0 0 20px 20px;
      transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
    }

    @media (max-width: 600px) {
      .features-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
      .feature-card { padding: 1.5rem 1rem; }
    }
    @media (max-width: 400px) {
      .features-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class WhyChooseUsComponent {
  features: Feature[] = [
    {
      icon: '🌿',
      title: 'Fresh Daily',
      description: 'All our dairy products are freshly prepared every day to ensure maximum nutrition and taste.',
      color: '#618764',
    },
    {
      icon: '✨',
      title: 'Pure Quality',
      description: 'We maintain the highest purity standards. No additives, no preservatives — just 100% natural dairy.',
      color: '#9CB080',
    },
    {
      icon: '🤝',
      title: 'Trusted Service',
      description: 'Built on decades of trust with customers across Kheda, Gujarat. Our reputation speaks for itself.',
      color: '#2B5748',
    },
    {
      icon: '🏭',
      title: 'Hygienic Processing',
      description: 'All products processed in hygienic, clean facilities following strict quality control protocols.',
      color: '#618764',
    },
  ];
}
