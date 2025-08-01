"use client";

import { useFavorites } from "@/lib/Favoritos";
import { lollipops } from "@/data/Pirulitos";
import LollipopCard from "@/components/CardPirulito";

export default function FavoritosPage() {
  const { favoriteIds } = useFavorites();

  // Filtra a lista completa de pirulitos para pegar apenas os favoritos
  const favoriteLollipops = lollipops.filter(lollipop => favoriteIds.includes(lollipop.id));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Seus Pirulitos Favoritos</h1>
      
      {favoriteLollipops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteLollipops.map(lollipop => (
            <LollipopCard key={lollipop.id} lollipop={lollipop} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">
          Você ainda não favoritou nenhum pirulito. Clique no coração nos produtos que você mais gosta!
        </p>
      )}
    </div>
  );
}