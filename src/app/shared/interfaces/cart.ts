import { ProductInfo } from "./product";

export interface CartItem {
  count: number;
  _id: string;
  product: ProductInfo;
  price: number;
}