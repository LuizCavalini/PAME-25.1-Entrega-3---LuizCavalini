// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/BarraLateral";
import { FavoritesProvider } from "@/lib/Favoritos"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loja PirulitoPop",
  description: "Os pirulitos mais deliciosos da internet!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <FavoritesProvider> {/* Adicione o provedor aqui */}
          <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <main className="flex-1 p-8 overflow-y-auto">
              {children}
            </main>
          </div>
        </FavoritesProvider> {/* Feche o provedor */}
      </body>
    </html>
  );
}