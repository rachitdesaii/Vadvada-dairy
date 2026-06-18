import { Component, OnInit, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled">
      <div class="container nav-inner">

        <!-- Logo + Brand -->
        <a routerLink="/" class="nav-brand">
          <img src="/logo.png" alt="Vadvada Dairy Logo" class="logo-img" />
          <div class="brand-text">
            <span class="brand-name">Vadvada Dairy Products</span>
            <span class="brand-sub">Kheda</span>
          </div>
        </a>

        <!-- Desktop Nav Links -->
        <ul class="nav-links" [class.open]="menuOpen">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" (click)="closeMenu()">Home</a></li>
          <li><a routerLink="/products" routerLinkActive="active" (click)="closeMenu()">Products</a></li>
          <li><a routerLink="/about" routerLinkActive="active" (click)="closeMenu()">About Us</a></li>
          <li><a routerLink="/contact" routerLinkActive="active" (click)="closeMenu()">Contact Us</a></li>
          <li>
            <a href="https://wa.me/919998460456" target="_blank" class="nav-whatsapp-btn">
              💬 WhatsApp
            </a>
          </li>
        </ul>

        <!-- Hamburger -->
        <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <!-- Mobile Overlay -->
      <div class="nav-overlay" [class.visible]="menuOpen" (click)="closeMenu()"></div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed; top: 0; left: 0; right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
      background: transparent;
    }
    .navbar.scrolled {
      background: rgba(39,51,56,0.96);
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding: 0.75rem 0;
      box-shadow: 0 4px 30px rgba(0,0,0,0.3);
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; }
    .logo-img {
      height: 72px;
      width: auto;
      object-fit: contain;
    }
    .brand-text { display: flex; flex-direction: column; }
    .brand-name { font-family: 'Playfair Display', serif; font-size: 1.05rem; font-weight: 700; color: #fff; line-height: 1.2; }
    .brand-sub { font-family: 'Poppins', sans-serif; font-size: 0.68rem; color: rgba(255,255,255,0.6); letter-spacing: 2px; text-transform: uppercase; }

    .nav-links { display: flex; align-items: center; gap: 0.25rem; list-style: none; }
    .nav-links a {
      font-family: 'Poppins', sans-serif; font-size: 0.9rem; font-weight: 500;
      color: rgba(255,255,255,0.85); padding: 0.5rem 0.9rem; border-radius: 50px;
      transition: all 0.3s ease; text-decoration: none; position: relative;
    }
    .nav-links a::after {
      content: ''; position: absolute; bottom: 4px; left: 50%;
      transform: translateX(-50%); width: 0; height: 2px;
      background: #9CB080; border-radius: 2px; transition: width 0.3s ease;
    }
    .nav-links a:hover::after, .nav-links a.active::after { width: 60%; }
    .nav-links a:hover, .nav-links a.active { color: #fff; }

    .nav-whatsapp-btn {
      background: linear-gradient(135deg, #25D366, #128C7E) !important;
      color: #fff !important; padding: 0.5rem 1.2rem !important;
      border-radius: 50px !important; font-size: 0.85rem !important; font-weight: 600 !important;
      box-shadow: 0 4px 16px rgba(37,211,102,0.35) !important;
      &::after { display: none !important; }
    }

    .hamburger {
      display: none; flex-direction: column; gap: 5px;
      cursor: pointer; background: none; border: none; padding: 0.5rem; z-index: 1100;
      span { display: block; width: 26px; height: 2px; background: #fff; border-radius: 2px; transition: all 0.3s ease; }
      &.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
      &.active span:nth-child(2) { opacity: 0; transform: scaleX(0); }
      &.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    }

    .nav-overlay {
      display: none; position: fixed; inset: 0;
      background: rgba(0,0,0,0.55); z-index: 900;
      opacity: 0; transition: opacity 0.3s ease;
      &.visible { opacity: 1; }
    }

    @media (max-width: 900px) {
      .hamburger { display: flex; }
      .nav-overlay { display: block; pointer-events: none; }
      .nav-overlay.visible { pointer-events: all; }
      .nav-links {
        position: fixed; top: 0; right: -100%;
        width: 280px; height: 100vh;
        background: rgba(39,51,56,0.98);
        backdrop-filter: blur(24px);
        flex-direction: column; align-items: flex-start;
        padding: 5rem 2rem 2rem; gap: 0.5rem;
        transition: right 0.4s cubic-bezier(0.4,0,0.2,1); z-index: 1050;
        &.open { right: 0; }
        a { font-size: 1.1rem; padding: 0.75rem 1rem; width: 100%; }
        li:last-child { width: 100%; margin-top: 1rem; }
        .nav-whatsapp-btn { display: block; text-align: center; width: 100%; padding: 0.75rem !important; }
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }

  toggleMenu() { this.menuOpen = !this.menuOpen; }
  closeMenu()  { this.menuOpen = false; }
}
