export interface Lollipop {
  id: number;
  name: string;
  flavor: string;
  price: number;
  description: string;
  longDescription: string;
  ingredients: string[];
  imageUrl: string;
  isAvailable: boolean;
}

export interface CartItem extends Lollipop {
  quantity: number;
}