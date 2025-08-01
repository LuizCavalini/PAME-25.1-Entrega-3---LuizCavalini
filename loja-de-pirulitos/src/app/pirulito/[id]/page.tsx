"use client"; 

import { useState, useEffect } from "react"; 
import { lollipops } from "@/data/Pirulitos";
import { Lollipop } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useCart } from "@/lib/Carrinho"; 

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
  const [quantity, setQuantity] = useState(1); // Estado para a quantidade
  const { addToCart } = useCart(); // Acessar a função do carrinho

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
    return <div>Carregando...</div>; 
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
          {/* ... (outras informações do pirulito) ... */}
          <p className="text-3xl font-light text-gray-800 mt-4">
            R$ {lollipop.price.toFixed(2).replace('.', ',')}
          </p>
          
          {/* ... (descrição, ingredientes) ... */}

          <div className="mt-auto pt-6">
            {/* 6. Substituir o botão "Comprar" pelo seletor de quantidade e "Adicionar ao Carrinho" */}
            <div className="flex items-center gap-4">
              <input 
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="w-20 p-2 border rounded-md text-center"
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