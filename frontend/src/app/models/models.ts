export interface Product {
  id: number;
  name: string;
  description: string;
  imageQuery: string;
  imageUrl: string;
  category: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
}

export interface Owner {
  name: string;
  phone: string;
  role: string;
}
