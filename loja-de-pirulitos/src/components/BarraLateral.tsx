"use client"; 

import Link from "next/link";
import { Home, Heart, User, ShoppingCart } from "lucide-react"; 
import { useCart } from "@/lib/Carrinho"; 

export default function Sidebar() {
  const { cartItems } = useCart(); // Acessar os itens do carrinho

  // Calcula o total de itens (somando as quantidades)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-10 text-center text-pink-400">PirulitoPop</h2>
      <nav className="flex flex-col space-y-4">
        {/* ... (links Home, Favoritos, Perfil) ... */}

        {/* 5. Adicionar link para o carrinho */}
        <Link href="/carrinho" className="relative flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <ShoppingCart className="h-6 w-6" />
          <span>Carrinho</span>
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 flex items-center justify-center bg-pink-500 text-white text-xs rounded-full h-5 w-5">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
      {/* ... (resto da sidebar) ... */}
    </aside>
  );
}