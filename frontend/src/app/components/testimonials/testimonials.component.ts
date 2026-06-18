import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  review: string;
  initials: string;
  color: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="testimonials-section section-padding" style="background: var(--bg-dark)">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <span class="subtitle" style="color: var(--primary-light)">Customer Love</span>
          <h2 style="color: #fff">What Our Customers Say</h2>
          <div class="divider"></div>
        </div>

        <div class="testimonials-grid">
          <div
            *ngFor="let t of testimonials; let i = index"
            class="testimonial-card glass"
            [attr.data-aos]="'fade-up'"
            [attr.data-aos-delay]="i * 120"
          >
            <div class="stars">
              <span *ngFor="let s of getStars(t.rating)">⭐</span>
            </div>
            <p class="review">"{{ t.review }}"</p>
            <div class="reviewer">
              <div class="avatar" [style.background]="t.color">{{ t.initials }}</div>
              <div class="reviewer-info">
                <strong>{{ t.name }}</strong>
                <span>{{ t.location }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section { overflow: hidden; }

    .section-title .subtitle { color: #9CB080 !important; }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 4rem;
    }

    .testimonial-card {
      background: rgba(255,255,255,0.05) !important;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255,255,255,0.1) !important;
      border-radius: 20px;
      padding: 2rem;
      transition: all 0.4s ease;
      position: relative;
      overflow: hidden;

      &::before {
        content: '\\201C';
        position: absolute;
        top: -0.5rem; left: 1rem;
        font-size: 6rem;
        color: rgba(97,135,100,0.15);
        font-family: 'Playfair Display', serif;
        line-height: 1;
      }

      &:hover {
        transform: translateY(-8px);
        background: rgba(255,255,255,0.08) !important;
        border-color: rgba(97,135,100,0.3) !important;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
      }
    }

    .stars {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    .review {
      font-family: 'Poppins', sans-serif;
      font-size: 0.9rem;
      color: rgba(255,255,255,0.8);
      line-height: 1.8;
      margin-bottom: 1.5rem;
      position: relative;
      z-index: 1;
    }

    .reviewer {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .avatar {
      width: 48px; height: 48px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: #fff;
      flex-shrink: 0;
    }

    .reviewer-info {
      display: flex; flex-direction: column;
      strong {
        font-family: 'Poppins', sans-serif;
        font-size: 0.95rem;
        color: #fff;
        font-weight: 600;
      }
      span {
        font-family: 'Poppins', sans-serif;
        font-size: 0.8rem;
        color: rgba(255,255,255,0.5);
      }
    }

    @media (max-width: 600px) {
      .testimonials-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      name: 'Rameshbhai Patel',
      location: 'Kheda, Gujarat (387411)',
      rating: 5,
      review: 'Vadvada Dairy Products is our go-to for fresh milk and ghee. The quality is outstanding and delivery is always on time. Pure and fresh every day!',
      initials: 'RP',
      color: '#618764',
    },
    {
      name: 'Savitaben Desai',
      location: 'Kheda, Gujarat (387411)',
      rating: 5,
      review: 'The paneer and curd from Vadvada are absolutely fresh. My entire family loves it. We have been loyal customers for years. Highly recommended!',
      initials: 'SD',
      color: '#2B5748',
    },
    {
      name: 'Mukeshbhai Shah',
      location: 'Kheda, Gujarat (387411)',
      rating: 5,
      review: 'Best desi ghee I have ever tasted! The aroma and taste is exactly like home-made. Haribhai and Rajubhai run an excellent dairy. Very trustworthy.',
      initials: 'MS',
      color: '#9CB080',
    },
    {
      name: 'Preetiben Joshi',
      location: 'Kheda, Gujarat (387411)',
      rating: 5,
      review: 'The lassi and buttermilk are perfect for summers. So fresh and chilled. Their shrikhand is exceptional — absolutely loved by kids and elders alike.',
      initials: 'PJ',
      color: '#618764',
    },
    {
      name: 'Dharmeshbhai Vaghela',
      location: 'Kheda, Gujarat (387411)',
      rating: 5,
      review: 'I order buffalo milk every morning and it is always fresh and thick. Great quality, great service. Vadvada Dairy Products is the best in Kheda!',
      initials: 'DV',
      color: '#2B5748',
    },
    {
      name: 'Hiraben Chauhan',
      location: 'Kheda, Gujarat (387411)',
      rating: 5,
      review: 'Pure, fresh and hygienic dairy products at our doorstep. The butter and khoya are top quality. We trust Vadvada completely for our dairy needs.',
      initials: 'HC',
      color: '#9CB080',
    },
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
