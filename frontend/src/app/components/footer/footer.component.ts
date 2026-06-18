import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <!-- Wave divider -->
      <div class="footer-wave">
        <svg viewBox="0 0 1200 80" preserveAspectRatio="none">
          <path d="M0,40 C300,80 900,0 1200,40 L1200,80 L0,80 Z" fill="#273338"/>
        </svg>
      </div>

      <div class="container footer-grid">

        <!-- Brand Column -->
        <div class="footer-brand" data-aos="fade-up">
          <div class="footer-logo">
            <div class="logo-circle"><span>🥛</span></div>
            <div>
              <h3>Vadvada Dairy Products</h3>
              <span class="location-tag">📍 Kheda, Gujarat – 387411</span>
            </div>
          </div>
          <p class="footer-desc">
            A family-owned dairy business committed to delivering fresh, pure and
            high-quality dairy products with traditional values and modern quality standards.
          </p>
          <div class="social-links">
            <a href="#" class="social-btn facebook" title="Facebook">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" class="social-btn instagram" title="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col" data-aos="fade-up" data-aos-delay="100">
          <h4 class="footer-heading">Quick Links</h4>
          <ul class="footer-links">
            <li><a routerLink="/">🏠 Home</a></li>
            <li><a routerLink="/products">🥛 Products</a></li>
            <li><a routerLink="/about">ℹ️ About Us</a></li>
            <li><a routerLink="/contact">📞 Contact Us</a></li>
          </ul>
        </div>

        <!-- Products -->
        <div class="footer-col" data-aos="fade-up" data-aos-delay="200">
          <h4 class="footer-heading">Our Products</h4>
          <ul class="footer-links">
            <li><a routerLink="/products">🥛 Fresh Milk</a></li>
            <li><a routerLink="/products">✨ Pure Ghee</a></li>
            <li><a routerLink="/products">🫙 Buttermilk</a></li>
            <li><a routerLink="/products">🧀 Paneer</a></li>
            <li><a routerLink="/products">🍶 Curd</a></li>
            <li><a routerLink="/products">🥤 Lassi</a></li>
            <li><a routerLink="/products">🧀 Cheese</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer-col" data-aos="fade-up" data-aos-delay="300">
          <h4 class="footer-heading">Contact & Owners</h4>
          <div class="footer-contact">
            <div class="contact-item">
              <span class="contact-icon">📍</span>
              <div>
                <p>Kheda, Gujarat – 387411</p>
                <p>India</p>
              </div>
            </div>
            <div class="contact-item">
              <span class="contact-icon">👤</span>
              <div>
                <p><strong>Haribhai (Laljibhai) Rabari</strong></p>
                <a href="tel:+919998460456">+91 99984 60456</a>
              </div>
            </div>
            <div class="contact-item">
              <span class="contact-icon">👤</span>
              <div>
                <p><strong>Rajubhai Rabari</strong></p>
                <a href="tel:+919909182945">+91 99091 82945</a>
              </div>
            </div>
            <div class="contact-item">
              <span class="contact-icon" style="color: #25D366; width: 18px; height: 18px; display: block; flex-shrink: 0; margin-top: 2px;">
                <svg viewBox="0 0 24 24" fill="currentColor" style="display: block; width: 100%; height: 100%;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </span>
              <div style="display:flex; flex-direction:column; gap:0.4rem;">
                <a href="https://wa.me/919998460456" target="_blank" class="whatsapp-link">
                  Haribhai: +91 99984 60456
                </a>
                <a href="https://wa.me/919909182945" target="_blank" class="whatsapp-link">
                  Rajubhai: +91 99091 82945
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="footer-bottom">
        <div class="container footer-bottom-inner">
          <p>© {{ year }} Vadvada Dairy Products. Kheda, Gujarat 387411 | Owned & Managed by Haribhai & Rajubhai Rabari</p>
          <p class="footer-tagline">Pure Dairy Excellence 🥛</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--bg-dark, #273338);
      color: rgba(255,255,255,0.75);
      position: relative;
    }

    .footer-wave {
      margin-top: -1px;
      svg { display: block; width: 100%; height: 80px; }
    }

    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 3rem;
      padding: 4rem 1.5rem 3rem;
    }

    .footer-logo {
      display: flex; align-items: center; gap: 0.75rem;
      margin-bottom: 1.25rem;
    }

    .logo-circle {
      width: 52px; height: 52px;
      background: linear-gradient(135deg, #9CB080, #618764);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      color: #fff;
      font-weight: 700;
      line-height: 1.2;
    }

    .location-tag {
      font-family: 'Poppins', sans-serif;
      font-size: 0.75rem;
      color: #9CB080;
    }

    .footer-desc {
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      color: rgba(255,255,255,0.55);
      line-height: 1.8;
      margin-bottom: 1.5rem;
    }

    .social-links { display: flex; gap: 0.75rem; }

    .social-btn {
      width: 40px; height: 40px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.3s ease;
      color: #fff;

      &.whatsapp { background: rgba(37,211,102,0.2); &:hover { background: #25D366; transform: translateY(-3px); } }
      &.facebook  { background: rgba(66,103,178,0.2); &:hover { background: #4267B2; transform: translateY(-3px); } }
      &.instagram { background: rgba(228,64,95,0.2);  &:hover { background: #E4405F; transform: translateY(-3px); } }
    }

    .footer-heading {
      font-family: 'Playfair Display', serif;
      font-size: 1.1rem;
      color: #fff;
      font-weight: 600;
      margin-bottom: 1.5rem;
      padding-bottom: 0.75rem;
      border-bottom: 2px solid rgba(97,135,100,0.3);
    }

    .footer-links {
      list-style: none;
      display: flex; flex-direction: column; gap: 0.6rem;

      a {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        color: rgba(255,255,255,0.6);
        text-decoration: none;
        transition: all 0.3s ease;
        display: flex; align-items: center; gap: 0.5rem;

        &:hover { color: #9CB080; transform: translateX(4px); }
      }
    }

    .footer-contact { display: flex; flex-direction: column; gap: 1rem; }

    .contact-item {
      display: flex; gap: 0.75rem; align-items: flex-start;
      .contact-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; }
      p, a {
        font-family: 'Poppins', sans-serif;
        font-size: 0.82rem;
        color: rgba(255,255,255,0.6);
        margin: 0; line-height: 1.5;
        text-decoration: none;
      }
      strong { color: rgba(255,255,255,0.85); }
      a:hover { color: #9CB080; }
    }

    .whatsapp-link { color: #25D366 !important; font-weight: 500; }

    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.08);
      padding: 1.5rem 0;
    }

    .footer-bottom-inner {
      display: flex; justify-content: space-between; align-items: center;
      flex-wrap: wrap; gap: 0.5rem;
      p {
        font-family: 'Poppins', sans-serif;
        font-size: 0.78rem;
        color: rgba(255,255,255,0.4);
        margin: 0;
      }
    }

    .footer-tagline { color: #9CB080 !important; font-weight: 500 !important; }

    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 640px) {
      .footer-grid { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 1rem 2rem; }
      .footer-bottom-inner { flex-direction: column; text-align: center; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
