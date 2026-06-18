import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/models';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="product-card">
      <div class="card-img-wrap">
        <img
          [src]="product.imageUrl"
          [alt]="product.name"
          class="card-img"
          loading="lazy"
          (error)="onImgError($event)"
        />
        <div class="card-overlay">
          <span class="card-category">{{ product.category }}</span>
        </div>
        <div class="card-icon">{{ product.icon }}</div>
      </div>
      <div class="card-body">
        <h3 class="card-title">{{ product.name }}</h3>
        <p class="card-desc">{{ product.description }}</p>
        <div class="card-footer">
          <a routerLink="/products" class="btn-learn">
            Learn More <span class="arrow">→</span>
          </a>
          <span class="purity-badge">100% Pure</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-card {
      background: #fff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(39,51,56,0.08);
      transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
      height: 100%;
      display: flex;
      flex-direction: column;
      position: relative;

      &:hover {
        transform: translateY(-10px) scale(1.01);
        box-shadow: 0 24px 60px rgba(39,51,56,0.18);
        .card-img { transform: scale(1.08); }
        .btn-learn .arrow { transform: translateX(4px); }
        .card-icon { transform: scale(1.2) rotate(10deg); }
      }
    }

    .card-img-wrap {
      position: relative;
      overflow: hidden;
      height: 220px;
    }

    .card-img {
      width: 100%; height: 100%;
      object-fit: cover;
      transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
    }

    .card-overlay {
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      background: linear-gradient(180deg, transparent 40%, rgba(39,51,56,0.7) 100%);
    }

    .card-category {
      position: absolute;
      top: 1rem; left: 1rem;
      background: rgba(97,135,100,0.9);
      color: #fff;
      font-family: 'Poppins', sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      padding: 0.25rem 0.75rem;
      border-radius: 50px;
      backdrop-filter: blur(8px);
    }

    .card-icon {
      position: absolute;
      bottom: 1rem; right: 1rem;
      font-size: 1.8rem;
      transition: transform 0.3s ease;
      filter: drop-shadow(0 2px 8px rgba(0,0,0,0.3));
    }

    .card-body {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .card-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: #1a2421;
      margin-bottom: 0.5rem;
    }

    .card-desc {
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      color: #6b7c6e;
      line-height: 1.7;
      flex: 1;
      margin-bottom: 1.25rem;
    }

    .card-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .btn-learn {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      font-weight: 600;
      color: #618764;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover { color: #2B5748; }

      .arrow {
        display: inline-block;
        transition: transform 0.3s ease;
      }
    }

    .purity-badge {
      font-family: 'Poppins', sans-serif;
      font-size: 0.65rem;
      font-weight: 600;
      color: #9CB080;
      border: 1px solid #9CB080;
      padding: 0.2rem 0.6rem;
      border-radius: 50px;
      letter-spacing: 0.5px;
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80';
  }
}
