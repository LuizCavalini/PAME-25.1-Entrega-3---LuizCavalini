"use client";

import { createContext, useState, useContext, ReactNode } from 'react';
import { Lollipop, CartItem } from '@/types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Lollipop, quantity: number) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Adiciona um item (ou atualiza a quantidade se já existir)
  const addToCart = (item: Lollipop, quantity: number) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);
      if (existingItem) {
        // Se o item já existe, atualiza a quantidade
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      // Se não existe, adiciona o novo item
      return [...prevItems, { ...item, quantity }];
    });
  };

  // Remove um item completamente do carrinho
  const removeFromCart = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Atualiza a quantidade de um item específico
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      // Se a quantidade for 0 ou menos, remove o item
      removeFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  // Limpa todos os itens do carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook customizado para facilitar o uso
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}