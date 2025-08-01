import { lollipops } from "@/data/Pirulitos";
import { Lollipop } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

interface PirulitoDetalhePageProps {
  params: {
    id: string;
  };
}

// Função para buscar o pirulito (simulando uma chamada de API)
async function getLollipop(id: number): Promise<Lollipop | undefined> {
    return lollipops.find(p => p.id === id);
}


export default async function PirulitoDetalhePage({ params }: PirulitoDetalhePageProps) {
  const lollipopId = parseInt(params.id, 10);
  const lollipop = await getLollipop(lollipopId);

  if (!lollipop) {
    notFound(); // Redireciona para página 404 se não encontrar
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

          <div className="mt-4">
            <p className={`font-semibold ${lollipop.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
              {lollipop.isAvailable ? 'Disponível em estoque' : 'Indisponível no momento'}
            </p>
          </div>

          <div className="mt-auto pt-6">
            <button 
              disabled={!lollipop.isAvailable}
              className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Comprar Pirulito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}