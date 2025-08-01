"use client";

import { createContext, useState, useContext, ReactNode } from 'react';

// Define o tipo do nosso contexto
interface FavoritesContextType {
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

// Cria o contexto com um valor padrão (que não será usado diretamente)
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Cria o Provedor do Contexto
export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavoriteIds(prevIds =>
      prevIds.includes(id)
        ? prevIds.filter(favId => favId !== id) // Remove se já existe
        : [...prevIds, id] // Adiciona se não existe
    );
  };

  const isFavorite = (id: number) => {
    return favoriteIds.includes(id);
  };

  return (
    <FavoritesContext.Provider value={{ favoriteIds, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

// Cria um hook customizado para usar o contexto mais facilmente
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}