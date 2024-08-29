export interface Product extends ProductInfo {
  sold: number;
  images: string[];
  ratingsQuantity: number;
  slug: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  priceAfterDiscount?: number;
  availableColors?: any[];
}

interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

interface Subcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;
}

export interface ProductInfo {
  subcategory: Subcategory[];
  _id: string;
  title: string;
  quantity: number;
  imageCover: string;
  category: Category;
  brand: Category;
  ratingsAverage: number;
  id: string;
}