import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/models';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-products-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <section class="products-section section-padding" id="products">
      <div class="container">
        <div class="section-title" data-aos="fade-up">
          <span class="subtitle">Our Range</span>
          <h2>Premium Dairy Products</h2>
          <p class="section-desc">
            From the farms of Kheda, Gujarat — fresh, pure and delivered with love.
          </p>
          <div class="divider"></div>
        </div>

        <!-- Category Filter -->
        <div class="filter-tabs" data-aos="fade-up" data-aos-delay="100">
          <button
            *ngFor="let cat of categories"
            class="filter-btn"
            [class.active]="activeCategory === cat"
            (click)="filterProducts(cat)"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Products Grid -->
        <div class="products-grid">
          <div
            *ngFor="let product of filteredProducts; let i = index"
            [attr.data-aos]="'fade-up'"
            [attr.data-aos-delay]="(i % 4) * 100"
            class="product-grid-item"
          >
            <app-product-card [product]="product"></app-product-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .products-section { background: #F7F9F5; }

    .section-desc {
      text-align: center;
      max-width: 500px;
      margin: 0.75rem auto 0;
      font-size: 0.95rem;
    }

    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      justify-content: center;
      margin: 2.5rem 0;
    }

    .filter-btn {
      padding: 0.5rem 1.25rem;
      border-radius: 50px;
      border: 2px solid rgba(97,135,100,0.3);
      background: transparent;
      color: #618764;
      font-family: 'Poppins', sans-serif;
      font-size: 0.85rem;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover, &.active {
        background: linear-gradient(135deg, #618764, #2B5748);
        color: #fff;
        border-color: transparent;
        box-shadow: 0 4px 16px rgba(97,135,100,0.35);
        transform: translateY(-2px);
      }
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      gap: 1.75rem;
    }

    .product-grid-item {
      display: flex;
    }

    app-product-card { width: 100%; }

    @media (max-width: 640px) {
      .products-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
    }
    @media (max-width: 420px) {
      .products-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class ProductsSectionComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  categories: string[] = ['All'];
  activeCategory = 'All';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.filteredProducts = this.products;
    const cats = [...new Set(this.products.map(p => p.category))];
    this.categories = ['All', ...cats];
  }

  filterProducts(category: string) {
    this.activeCategory = category;
    this.filteredProducts = category === 'All'
      ? this.products
      : this.products.filter(p => p.category === category);
  }
}
