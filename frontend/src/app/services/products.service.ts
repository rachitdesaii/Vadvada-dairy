import { Injectable } from '@angular/core';
import { Product } from '../models/models';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  private products: Product[] = [
    { id: 1, name: 'Fresh Cow Milk', description: 'Farm-fresh cow milk delivered daily, rich in nutrients and natural goodness. Pure, unprocessed and full of flavour.', imageQuery: 'fresh cow milk glass', imageUrl: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=600&q=80', category: 'Milk', icon: '🥛' },
    { id: 2, name: 'Buffalo Milk', description: 'Thick, creamy buffalo milk with high fat content. Perfect for making rich dairy products like ghee and paneer.', imageQuery: 'buffalo milk dairy', imageUrl: '/products/buffalo-milk.png', category: 'Milk', icon: '🐃' },
    { id: 3, name: 'Pure Desi Ghee', description: 'Traditionally churned pure desi ghee made from fresh cow milk. Golden, aromatic and full of authentic flavour.', imageQuery: 'pure desi ghee golden', imageUrl: '/products/desi-ghee.png', category: 'Ghee', icon: '✨' },
    { id: 4, name: 'Buttermilk', description: 'Refreshing traditional buttermilk made from fresh curd. Light, digestive and perfect for hot summer days.', imageQuery: 'buttermilk drink india', imageUrl: '/products/chaas.png', category: 'Beverages', icon: '🫙' },
    { id: 5, name: 'Fresh Curd', description: 'Creamy, thick curd set fresh daily from pure milk. Rich in probiotics and perfect for every meal.', imageQuery: 'fresh curd yogurt', imageUrl: '/products/dahi.png', category: 'Curd', icon: '🍶' },
    { id: 6, name: 'Fresh Paneer', description: 'Soft, fresh paneer made from pure whole milk. Perfect for curries, grills, and traditional Indian recipes.', imageQuery: 'fresh paneer cheese', imageUrl: '/products/paneer.png', category: 'Paneer', icon: '🧀' },
    { id: 7, name: 'Pure Butter', description: 'Fresh white butter churned from pure cream. Rich, smooth and delicious — a perfect spread for every day.', imageQuery: 'fresh butter cream', imageUrl: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&q=80', category: 'Butter', icon: '🧈' },
    { id: 8, name: 'Lassi', description: 'Thick and refreshing traditional Gujarati lassi made from fresh curd. Available sweet and salted.', imageQuery: 'lassi yogurt drink', imageUrl: '/products/lassi.png', category: 'Beverages', icon: '🥤' },
    { id: 9, name: 'Shrikhand', description: 'Traditional Gujarati shrikhand — sweet strained curd dessert flavoured with cardamom and saffron.', imageQuery: 'shrikhand sweet dessert', imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80', category: 'Sweets', icon: '🍮' },
    { id: 10, name: 'Cheese', description: 'Freshly made dairy cheese, smooth and mildly flavoured. Perfect for sandwiches, pizzas, and cooking.', imageQuery: 'fresh cheese dairy', imageUrl: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=600&q=80', category: 'Cheese', icon: '🧀' },
    { id: 11, name: 'Khoya / Mawa', description: 'Premium quality khoya made by slow-simmering pure milk. Essential for authentic Indian sweets and desserts.', imageQuery: 'khoya mawa indian sweet', imageUrl: 'https://images.unsplash.com/photo-1571211905390-1429bcc18bd7?w=600&q=80', category: 'Sweets', icon: '🍬' },
  ];

  getProducts(): Product[] { return this.products; }
  getProductById(id: number): Product | undefined { return this.products.find(p => p.id === id); }
}
