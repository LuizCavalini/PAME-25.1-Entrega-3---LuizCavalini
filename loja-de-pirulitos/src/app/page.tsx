"use client"; 

import { useState } from "react";
import LollipopCard from "@/components/CardPirulito";
import SearchBar from "@/components/BarradeBusca";
import { lollipops } from "@/data/Pirulitos";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra os pirulitos com base na busca
  const filteredLollipops = lollipops.filter(lollipop =>
    lollipop.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
          <SearchBar onSearchChange={setSearchTerm} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredLollipops.map((lollipop) => (
          <LollipopCard key={lollipop.id} lollipop={lollipop} />
        ))}
      </div>
    </div>
  );
}