"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  onSearchChange: (term: string) => void;
}

export default function SearchBar({ onSearchChange }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Buscar pelo nome do pirulito..."
        className="w-full px-4 py-2 pl-10 border rounded-full 
                   bg-gray-700      /* Fundo preto/cinza escuro */
                   text-white       /* Texto digitado em branco */
                   placeholder-gray-400 /* Cor do placeholder */
                   border-gray-900    /* Cor da borda */
                   focus:outline-none 
                   focus:ring-2 
                   focus:ring-pink-500" /* Anel rosa ao focar */
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
    </div>
  );
}