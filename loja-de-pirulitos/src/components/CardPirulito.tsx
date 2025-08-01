import { Lollipop } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react"; 

interface LollipopCardProps {
  lollipop: Lollipop;
}

export default function LollipopCard({ lollipop }: LollipopCardProps) {
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
        <button className="absolute top-2 right-2 bg-white rounded-full p-2 hover:bg-red-100 transition-colors">
          <Heart className="h-6 w-6 text-gray-600 hover:text-red-500" />
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