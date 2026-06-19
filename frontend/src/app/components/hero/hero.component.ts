import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero" id="hero">
      <!-- Background layers -->
      <div class="hero-bg">
        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1600&q=85"
          alt="Dairy farm green fields Gujarat"
          class="hero-bg-img"
          loading="eager"
        />
        <div class="hero-overlay"></div>
        <div class="hero-gradient"></div>
      </div>

      <!-- Floating particles -->
      <div class="particles">
        <span *ngFor="let p of particles" class="particle" [style.left]="p.x" [style.top]="p.y" [style.animation-delay]="p.delay"></span>
      </div>

      <!-- Content -->
      <div class="container hero-content">
        <div class="hero-badge hero-animate hero-anim-1">
          <span class="badge-dot"></span>
          <span>Kheda, Gujarat — Since Generations</span>
        </div>

        <h1 class="hero-heading hero-animate hero-anim-2">
          Pure Dairy<br/>
          <em>Excellence</em>
        </h1>

        <p class="hero-sub hero-animate hero-anim-3">
          Freshness You Can Trust
        </p>

        <p class="hero-desc hero-animate hero-anim-4">
          Delivering Fresh Milk, Pure Ghee, Buttermilk and Premium Dairy Products
          from Kheda with Trust, Purity and Quality.
        </p>

        <div class="hero-actions hero-animate hero-anim-5">
          <a routerLink="/products" class="btn btn-primary">
            <span>🥛</span> Explore Products
          </a>
          <a routerLink="/contact" class="btn btn-outline">
            <span>📞</span> Contact Us
          </a>
        </div>

        <!-- Stats bar -->
        <div class="hero-stats hero-animate hero-anim-6">
          <div class="stat">
            <span class="stat-num">13+</span>
            <span class="stat-label">Products</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">100%</span>
            <span class="stat-label">Pure Quality</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat">
            <span class="stat-num">Daily</span>
            <span class="stat-label">Fresh Delivery</span>
          </div>
        </div>
      </div>

    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .hero-bg-img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center;
      animation: kenBurns 20s ease-in-out infinite alternate;
    }

    @keyframes kenBurns {
      from { transform: scale(1) translateX(0); }
      to   { transform: scale(1.08) translateX(-1%); }
    }

    .hero-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg,
        rgba(39,51,56,0.88) 0%,
        rgba(43,87,72,0.75) 50%,
        rgba(39,51,56,0.55) 100%);
    }

    .hero-gradient {
      position: absolute; bottom: 0; left: 0; right: 0;
      height: 40%;
      background: linear-gradient(to top, rgba(39,51,56,0.95), transparent);
    }

    /* Particles */
    .particles { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
    .particle {
      position: absolute;
      width: 4px; height: 4px;
      background: rgba(156,176,128,0.5);
      border-radius: 50%;
      animation: floatParticle 8s ease-in-out infinite;
    }
    @keyframes floatParticle {
      0%, 100% { transform: translateY(0) scale(1); opacity: 0.5; }
      50%       { transform: translateY(-40px) scale(1.5); opacity: 1; }
    }

    /* Content */
    .hero-content {
      position: relative; z-index: 2;
      padding-top: 100px;
      padding-bottom: 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      max-width: 760px;
    }

    .hero-badge {
      display: flex; align-items: center; gap: 0.5rem;
      background: rgba(97,135,100,0.2);
      border: 1px solid rgba(156,176,128,0.4);
      border-radius: 50px;
      padding: 0.4rem 1.2rem;
      font-family: 'Poppins', sans-serif;
      font-size: 0.8rem;
      color: #9CB080;
      letter-spacing: 1px;
      margin-bottom: 1.5rem;
    }

    .badge-dot {
      width: 8px; height: 8px;
      background: #9CB080;
      border-radius: 50%;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 rgba(156,176,128,0.6); }
      50%       { box-shadow: 0 0 0 8px rgba(156,176,128,0); }
    }

    .hero-heading {
      font-family: 'Playfair Display', serif;
      font-size: clamp(3rem, 7vw, 5.5rem);
      font-weight: 800;
      color: #fff;
      line-height: 1.1;
      margin-bottom: 0.5rem;

      em {
        font-style: italic;
        background: linear-gradient(135deg, #9CB080, #618764);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
    }

    .hero-sub {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.2rem, 2.5vw, 1.6rem);
      font-weight: 400;
      font-style: italic;
      color: rgba(255,255,255,0.75);
      margin-bottom: 1.5rem;
    }

    .hero-desc {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      color: rgba(255,255,255,0.75);
      max-width: 540px;
      line-height: 1.8;
      margin-bottom: 2.5rem;
    }

    .hero-actions {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      margin-bottom: 3rem;
    }

    /* Stats */
    .hero-stats {
      display: flex;
      align-items: center;
      gap: 2rem;
      background: rgba(255,255,255,0.07);
      border: 1px solid rgba(255,255,255,0.12);
      backdrop-filter: blur(16px);
      border-radius: 16px;
      padding: 1.25rem 2rem;
    }

    .stat { text-align: center; }
    .stat-num {
      display: block;
      font-family: 'Playfair Display', serif;
      font-size: 1.6rem;
      font-weight: 700;
      color: #9CB080;
    }
    .stat-label {
      font-family: 'Poppins', sans-serif;
      font-size: 0.7rem;
      color: rgba(255,255,255,0.6);
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .stat-divider {
      width: 1px; height: 40px;
      background: rgba(255,255,255,0.15);
    }

    /* Entrance animations */
    .hero-animate { opacity: 0; }

    .hero-anim-1 { animation: fadeSlideUp 0.7s ease forwards 0.2s; }
    .hero-anim-2 { animation: fadeSlideUp 0.8s ease forwards 0.4s; }
    .hero-anim-3 { animation: fadeSlideUp 0.7s ease forwards 0.6s; }
    .hero-anim-4 { animation: fadeSlideUp 0.7s ease forwards 0.75s; }
    .hero-anim-5 { animation: fadeSlideUp 0.7s ease forwards 0.9s; }
    .hero-anim-6 { animation: fadeSlideUp 0.7s ease forwards 1.05s; }

    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .hero-content { align-items: center; text-align: center; }
      .hero-heading { text-align: center; }
      .hero-stats { gap: 1rem; padding: 1rem 1.25rem; }
      .hero-actions { justify-content: center; }
      .hero-desc { text-align: center; }
    }
    @media (max-width: 480px) {
      .hero-stats { flex-direction: column; gap: 0.75rem; }
      .stat-divider { width: 80px; height: 1px; }
    }
  `]
})
export class HeroComponent implements OnInit {
  particles: { x: string; y: string; delay: string }[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.particles = Array.from({ length: 18 }, () => ({
        x: Math.random() * 100 + '%',
        y: Math.random() * 100 + '%',
        delay: Math.random() * 6 + 's',
      }));
    }
  }
}
