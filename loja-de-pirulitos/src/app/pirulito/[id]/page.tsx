"use client";

import { useState, useEffect } from "react";
import { lollipops } from "@/data/Pirulitos"; 
import { useCart } from "@/lib/Carrinho";
import { Lollipop } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PirulitoDetalhePageProps {
  params: {
    id: string;
  };
}

const getLollipop = (id: number): Lollipop | undefined => {
  return lollipops.find(p => p.id === id);
}

export default function PirulitoDetalhePage({ params }: PirulitoDetalhePageProps) {
  const [lollipop, setLollipop] = useState<Lollipop | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const lollipopId = parseInt(params.id, 10);
    const foundLollipop = getLollipop(lollipopId);
    if (foundLollipop) {
      setLollipop(foundLollipop);
    } else {
      notFound();
    }
  }, [params.id]);

  const handleAddToCart = () => {
    if (lollipop) {
      addToCart(lollipop, quantity);
      alert(`${quantity} ${lollipop.name} adicionado(s) ao carrinho!`);
    }
  };

  if (!lollipop) {
    return <div className="text-center text-gray-500">Carregando...</div>;
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna da Imagem */}
        <div>
          <Image
            src={lollipop.imageUrl}
            alt={lollipop.name}
            width={500}
            height={500}
            className="rounded-lg object-cover w-full"
          />
        </div>

        {/* Coluna de Informações */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold text-gray-900">{lollipop.name}</h1>
          <p className="text-2xl text-pink-500 font-bold my-2">{lollipop.flavor}</p>
          <p className="text-3xl font-light text-gray-800 mt-4">
            R$ {lollipop.price.toFixed(2).replace('.', ',')}
          </p>

          {/* DESCRIÇÃO E INGREDIENTES */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-700">Descrição Completa</h3>
            <p className="text-gray-600 mt-1">{lollipop.longDescription}</p>
          </div>

          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700">Ingredientes</h3>
            <ul className="list-disc list-inside text-gray-600 mt-1">
              {lollipop.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
          </div>

          <div className="mt-auto pt-6">
            {/* DISPONIBILIDADE */}
            <div className="mb-4">
                <p className={`font-semibold ${lollipop.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                {lollipop.isAvailable ? 'Disponível em estoque' : 'Indisponível no momento'}
                </p>
            </div>
            
            <div className="flex items-center gap-4">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10)))}
                className="w-20 p-2 border rounded-md text-center text-gray-900 font-bold" // <-- ADICIONADO AQUI
                disabled={!lollipop.isAvailable}
                />
              <button
                onClick={handleAddToCart}
                disabled={!lollipop.isAvailable}
                className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}