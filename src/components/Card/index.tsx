import Link from "next/link";
import Image from "next/image";

import { IPokemon } from "@/types/pokemon";

interface IProps {
  pokemon: IPokemon;
}

export const Card = ({ pokemon }: IProps) => {
  return (
    <Link
      href={{
        pathname: `/details/${pokemon.uri}`,
        query: {
          data: JSON.stringify(pokemon),
        },
      }}
      className={`w-56 h-72   block relative rounded-lg hover:border-2 hover:border-solid hover:border-yellow-400`}
      style={{ backgroundColor: pokemon.color }}
    >
      <Image
        src={`/images/stat/stat-${pokemon.avatar}.png`}
        alt={pokemon.name}
        width={224}
        height={224}
      />
      <div className="bg-gray-800 w-full absolute bottom-0 py-6 text-white flex justify-center items-center font-semibold rounded-b-lg">
        <span>{pokemon.name}</span>
      </div>
    </Link>
  );
};
