import LollipopCard from "@/components/CardPirulito";
import SearchBar from "@/components/BarradeBusca";
import { lollipops } from "@/data/Pirulitos";

export default function HomePage() {
  return (
    <div>
      <div className="mb-8">
          <SearchBar />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {lollipops.map((lollipop) => (
          <LollipopCard key={lollipop.id} lollipop={lollipop} />
        ))}
      </div>
    </div>
  );
}