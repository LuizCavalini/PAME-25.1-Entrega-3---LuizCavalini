// src/types/index.ts
export interface pirulito{
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