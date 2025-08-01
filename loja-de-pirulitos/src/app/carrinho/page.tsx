"use client";

import { useCart } from "@/lib/Carrinho";
import Image from "next/image";
import Link from "next/link";
import { Trash2 } from "lucide-react";

export default function CarrinhoPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">Seu Carrinho</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Seu carrinho está vazio.</p>
          <Link href="/" className="text-pink-500 hover:underline mt-4 inline-block">
            Ver produtos
          </Link>
        </div>
      ) : (
        <div>
          {/* Lista de Itens */}
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                  <Image src={item.imageUrl} alt={item.name} width={80} height={80} className="rounded-md" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">R$ {item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 p-1 border rounded-md text-center"
                  />
                  <button onClick={() => removeFromCart(item.id)} className="text-gray-500 hover:text-red-600">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sumário e Ações */}
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Total:</h2>
              <p className="text-2xl font-bold">R$ {totalPrice.toFixed(2).replace('.', ',')}</p>
            </div>
            <div className="flex justify-between mt-8">
              <button onClick={clearCart} className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400">
                Limpar Carrinho
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}