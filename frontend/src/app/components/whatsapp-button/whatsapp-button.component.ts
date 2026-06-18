import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface WhatsAppContact {
  name: string;
  phone: string;
  label: string;
}

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="whatsapp-widget" [class.open]="isOpen">
      <!-- Contact popup -->
      <div class="wa-popup" *ngIf="isOpen">
        <div class="wa-popup-header">
          <div class="wa-popup-title">
            <svg class="wa-header-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Chat with Us</span>
          </div>
          <button class="wa-close-btn" (click)="closePopup()" aria-label="Close WhatsApp menu">✕</button>
        </div>
        <p class="wa-popup-subtitle">Choose an owner to connect on WhatsApp</p>
        <div class="wa-contacts">
          <a
            *ngFor="let contact of contacts"
            [href]="'https://wa.me/91' + contact.phone"
            target="_blank"
            rel="noopener noreferrer"
            class="wa-contact-option"
            (click)="closePopup()"
          >
            <div class="wa-contact-avatar">{{ contact.label.charAt(0) }}</div>
            <div class="wa-contact-info">
              <strong>{{ contact.name }}</strong>
              <span>WhatsApp: {{ contact.phone }}</span>
            </div>
            <svg class="wa-arrow" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Floating action button -->
      <button
        class="whatsapp-fab"
        [class.active]="isOpen"
        (click)="togglePopup()"
        title="Chat with us on WhatsApp"
        aria-label="Open WhatsApp contact options"
        [attr.aria-expanded]="isOpen"
      >
        <div class="wa-pulse" *ngIf="!isOpen"></div>
        <div class="wa-pulse wa-pulse-2" *ngIf="!isOpen"></div>
        <svg class="wa-icon" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span class="wa-label">{{ isOpen ? 'Close' : 'Chat Now' }}</span>
      </button>
    </div>
  `,
  styles: [`
    .whatsapp-widget {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 1rem;
    }

    .wa-popup {
      background: #fff;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(37,211,102,0.15);
      width: 320px;
      max-width: calc(100vw - 2rem);
      overflow: hidden;
      animation: popupSlideUp 0.35s cubic-bezier(0.4,0,0.2,1) both;
      transform-origin: bottom right;
    }

    @keyframes popupSlideUp {
      from { opacity: 0; transform: translateY(16px) scale(0.92); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }

    .wa-popup-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.1rem 1.25rem;
      background: linear-gradient(135deg, #25D366, #128C7E);
      color: #fff;
    }

    .wa-popup-title {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-family: 'Poppins', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
    }

    .wa-header-icon { width: 22px; height: 22px; }

    .wa-close-btn {
      background: rgba(255,255,255,0.2);
      border: none;
      color: #fff;
      width: 28px;
      height: 28px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 0.75rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease;
      &:hover { background: rgba(255,255,255,0.35); }
    }

    .wa-popup-subtitle {
      font-family: 'Poppins', sans-serif;
      font-size: 0.78rem;
      color: #6b7c6e;
      padding: 0.85rem 1.25rem 0.5rem;
      margin: 0;
    }

    .wa-contacts {
      padding: 0.5rem 0.75rem 0.85rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .wa-contact-option {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.85rem 1rem;
      border-radius: 14px;
      text-decoration: none;
      background: #F7F9F5;
      border: 1px solid rgba(97,135,100,0.12);
      transition: all 0.3s cubic-bezier(0.4,0,0.2,1);

      &:hover {
        background: rgba(37,211,102,0.08);
        border-color: rgba(37,211,102,0.35);
        transform: translateX(-4px);
        box-shadow: 0 4px 16px rgba(37,211,102,0.15);
        .wa-contact-avatar { background: linear-gradient(135deg, #25D366, #128C7E); }
        .wa-arrow { color: #25D366; transform: translateX(2px); }
      }
    }

    .wa-contact-avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, #618764, #2B5748);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Poppins', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      flex-shrink: 0;
      transition: background 0.3s ease;
    }

    .wa-contact-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.15rem;

      strong {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        font-weight: 600;
        color: #1a2421;
      }
      span {
        font-family: 'Poppins', sans-serif;
        font-size: 0.78rem;
        color: #25D366;
        font-weight: 500;
      }
    }

    .wa-arrow {
      width: 20px;
      height: 20px;
      color: #9CB080;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    .whatsapp-fab {
      position: relative;
      display: flex;
      align-items: center;
      gap: 0.6rem;
      background: linear-gradient(135deg, #25D366, #128C7E);
      color: white;
      border: none;
      border-radius: 50px;
      padding: 0.85rem 1.25rem 0.85rem 1rem;
      cursor: pointer;
      box-shadow: 0 8px 32px rgba(37,211,102,0.45);
      transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
      animation: fabEntrance 0.8s cubic-bezier(0.4,0,0.2,1) 2s both;

      &:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 16px 48px rgba(37,211,102,0.55);
      }

      &.active {
        background: linear-gradient(135deg, #128C7E, #075E54);
        transform: rotate(0deg);
      }
    }

    @keyframes fabEntrance {
      from { opacity: 0; transform: scale(0) translateY(20px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }

    .wa-pulse {
      position: absolute;
      inset: 0;
      border-radius: 50px;
      background: rgba(37,211,102,0.4);
      animation: waPulse 2s ease-out infinite;
      pointer-events: none;
    }
    .wa-pulse-2 { animation-delay: 0.7s; }

    @keyframes waPulse {
      0%   { transform: scale(1); opacity: 0.7; }
      100% { transform: scale(1.5); opacity: 0; }
    }

    .wa-icon {
      width: 26px; height: 26px;
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }

    .wa-label {
      font-family: 'Poppins', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      white-space: nowrap;
      position: relative;
      z-index: 1;
    }

    @media (max-width: 480px) {
      .whatsapp-widget { bottom: 1.25rem; right: 1.25rem; }
      .whatsapp-fab { padding: 0.85rem; border-radius: 50%; }
      .wa-label { display: none; }
      .wa-popup { width: calc(100vw - 2.5rem); }
    }
  `]
})
export class WhatsappButtonComponent {
  isOpen = false;

  contacts: WhatsAppContact[] = [
    { name: 'Rajubhai', phone: '9909182945', label: 'R' },
    { name: 'Laljibhai Rabari', phone: '9998460456', label: 'L' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  togglePopup(): void {
    this.isOpen = !this.isOpen;
  }

  closePopup(): void {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!isPlatformBrowser(this.platformId) || !this.isOpen) return;
    const target = event.target as HTMLElement;
    if (!target.closest('.whatsapp-widget')) {
      this.closePopup();
    }
  }
}
