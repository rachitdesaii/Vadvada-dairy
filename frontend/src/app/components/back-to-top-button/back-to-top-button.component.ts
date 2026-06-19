import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-back-to-top-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      class="back-to-top"
      [class.visible]="isVisible"
      (click)="scrollToTop()"
      aria-label="Back to top"
      title="Back to top"
    >
      <svg class="back-to-top-icon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5.5 5.7 11.8l1.4 1.4L11 9.3V20h2V9.3l3.9 3.9 1.4-1.4L12 5.5Z"/>
      </svg>
    </button>
  `,
  styles: [`
    .back-to-top {
      position: fixed;
      right: 2rem;
      bottom: 6.75rem;
      z-index: 9998;
      width: 52px;
      height: 52px;
      border: 1px solid rgba(156,176,128,0.45);
      border-radius: 50%;
      background: linear-gradient(135deg, #2B5748, #618764);
      color: #fff;
      box-shadow: 0 12px 32px rgba(43,87,72,0.28);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transform: translateY(14px) scale(0.92);
      transition:
        opacity 0.25s ease,
        transform 0.25s ease,
        box-shadow 0.25s ease,
        border-color 0.25s ease;
      will-change: opacity, transform;
    }

    .back-to-top.visible {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
    }

    .back-to-top:hover {
      border-color: rgba(255,255,255,0.55);
      box-shadow: 0 16px 42px rgba(43,87,72,0.38);
      transform: translateY(-3px) scale(1.04);
    }

    .back-to-top:focus-visible {
      outline: 3px solid rgba(156,176,128,0.55);
      outline-offset: 4px;
    }

    .back-to-top-icon {
      width: 24px;
      height: 24px;
      fill: currentColor;
    }

    @media (max-width: 480px) {
      .back-to-top {
        right: 1.25rem;
        bottom: 5.85rem;
        width: 48px;
        height: 48px;
      }
    }
  `]
})
export class BackToTopButtonComponent {
  isVisible = false;
  private ticking = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (!isPlatformBrowser(this.platformId) || this.ticking) return;

    this.ticking = true;
    window.requestAnimationFrame(() => {
      this.isVisible = window.scrollY > 360;
      this.ticking = false;
    });
  }

  scrollToTop(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
}
