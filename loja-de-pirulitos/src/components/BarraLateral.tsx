"use client";

import Link from "next/link";
import Image from "next/image"; 
import { Home, Heart, User, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/Carrinho"; 
import { useSession, signOut } from "next-auth/react";

export default function Sidebar() {
  const { cartItems } = useCart();
  const { data: session, status } = useSession();

  // Calcula o total de itens no carrinho (somando as quantidades de cada item)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
      <div className="mb-10 flex justify-center">
        <Link href="/">
            <Image
                src="/images/logot.png" // O caminho para sua logo na pasta public
                alt="Logo"
                width={300} // Ajuste a largura conforme necessário
                height={50} // Ajuste a altura conforme necessário
                priority 
            />
        </Link>
      </div>
      
      <nav className="flex flex-col space-y-4">
        {/* LINKS */}
        <Link href="/" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <Home className="h-6 w-6" />
          <span>Página Inicial</span>
        </Link>
        <Link href="/favoritos" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <Heart className="h-6 w-6" />
          <span>Favoritos</span>
        </Link>
        <Link href="/perfil" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <User className="h-6 w-6" />
          <span>Perfil</span>
        </Link>
        <Link href="/carrinho" className="relative flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors">
          <ShoppingCart className="h-6 w-6" />
          <span>Carrinho</span>
          {totalItems > 0 && (
            <span className="absolute top-1 right-1 flex items-center justify-center bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>

      {/* BOTÃO DE LOGIN */}
      <div className="mt-auto">
        <Link href="/login" className="block text-center w-full bg-pink-500 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Login / Cadastro
        </Link>
      </div>
    </aside>
  );
}