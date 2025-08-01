"use client"; // Necessário para usar hooks como useState e useContext

import { Lollipop } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { useFavorites } from "@/lib/Favoritos"; // Importe o hook

interface LollipopCardProps {
  lollipop: Lollipop;
}

export default function LollipopCard({ lollipop }: LollipopCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites(); // Use o contexto
  const favorite = isFavorite(lollipop.id);

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <div className="relative">
        <Image
          src={lollipop.imageUrl}
          alt={lollipop.name}
          width={400}
          height={400}
          className="object-cover w-full h-64"
        />
        <button
          onClick={() => toggleFavorite(lollipop.id)} 
          className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-red-100 transition-colors"
        >
          <Heart
            className={`h-6 w-6 ${favorite ? 'text-red-500 fill-current' : 'text-gray-600'}`} // Estilo condicional
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-800">{lollipop.name}</h3>
        <p className="text-md text-pink-500 font-semibold">{lollipop.flavor}</p>
        <p className="text-gray-600 mt-2">{lollipop.description}</p>
        <div className="flex justify-between items-center mt-4">
          <p className="text-lg font-bold text-gray-900">
            R$ {lollipop.price.toFixed(2).replace('.', ',')}
          </p>
          <Link href={`/pirulito/${lollipop.id}`} className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors">
              Ver mais
          </Link>
        </div>
      </div>
    </div>
  );
}