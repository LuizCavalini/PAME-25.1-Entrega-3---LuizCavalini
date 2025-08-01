import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Provedores";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}