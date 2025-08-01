"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/BarraLateral";
import NextAuthProvider from "@/lib/ProvedordeSessao";
import { FavoritesProvider } from "@/lib/Favoritos";
import { CartProvider } from "@/lib/Carrinho"; 

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextAuthProvider>
      <FavoritesProvider>
        <CartProvider>
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </CartProvider>
      </FavoritesProvider>
    </NextAuthProvider>
  );
}