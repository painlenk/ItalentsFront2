"use client";
import { Card } from "@/components/Card";
import { IPokemon } from "@/types/pokemon";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonsList, setPokemonsList] = useState<IPokemon[]>([]);

  useEffect(() => {
    const getpokemons = async () => {
      const res = await fetch(
        `https://6283929f92a6a5e462260498.mockapi.io/pokemon`
      );
      const data: IPokemon[] = await res.json();

      setPokemonsList(data);
    };

    getpokemons();
  }, []);

  if (!pokemonsList.length) {
    return;
  }

  return (
    <main className="max-w-[70%]  bg-stone-900  flex justify-center items-center flex-wrap gap-4 ml-auto mr-auto">
      <div className="flex flex-col justify-start items-start w-full">
        <h1 className="mb-2 text-4xl ">Pokémon Unite - Pokédex</h1>
        <h2 className="text-lg text-start">
          Confira a lista completa de Pokémons do jogo Pokemón Unite e suas
          habilidades, evoluções e muito mais!
        </h2>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 ml-auto mr-auto">
        {pokemonsList.map((item) => {
          return <Card pokemon={item} key={item.id} />;
        })}
      </div>
    </main>
  );
}
