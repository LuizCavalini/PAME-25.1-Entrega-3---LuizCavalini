import Link from "next/link";
import { Home, Heart, User } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 flex flex-col">
      
      <nav className="flex flex-col space-y-4">
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
      </nav>
      <div className="mt-auto">
        <Link href="/login" className="block text-center w-full bg-pink-500 py-2 rounded-lg hover:bg-pink-600 transition-colors">
            Login / Cadastro
        </Link>
      </div>
    </aside>
  );
}