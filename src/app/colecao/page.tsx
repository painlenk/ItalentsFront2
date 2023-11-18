"use client";

import { Card } from "@/components/Card";
import { AuthContext, IContext } from "@/context/authContext";
import { redirect } from "next/navigation";
import { useContext, useLayoutEffect } from "react";

export default function Home() {
  const pokemon = {
    id: 29,
    name: "Ninetales De Alola",
    avatar: "ninetales-de-alola",
    description:
      "Ninetales de Alola usa movimentos que congelam seus oponentes, impedindo-os de se mover ou atacar.",
    level: 2,
    stats_battle: ["Attacker", "Ranged"],
    color: "#a7d5e6",
    uri: "ninetales-de-alola",
    skills: {
      attack: 80,
      resistance: 30,
      mobility: 3,
      punctuation: 50,
      support: 60,
    },
    evolutions: [
      {
        id: 52,
        name: "VULPIX DE ALOLA",
        avatar: "evolution-1-alolan-vulpix.png",
        level: 1,
      },
      {
        id: 53,
        name: "NINETALES DE ALOLA",
        avatar: "evolution-2-alolan-ninetales.png",
        level: 4,
      },
    ],
  };

  const { userLogged } = useContext(AuthContext) as IContext;

  useLayoutEffect(() => {
    if (!userLogged) {
      redirect("/login");
    }
  }, [userLogged]);

  return (
    <main className="max-w-[70%]  bg-stone-900  flex justify-center items-center flex-wrap gap-4 ml-auto mr-auto">
      <div className="flex flex-col justify-start items-start w-full">
        <h1 className="mb-2 text-4xl ">Pokémon Unite - Pokédex</h1>
        <h2 className="text-lg text-start">Sua coleção de pokemons.</h2>
        <p>Faça o skan de outros pokemons para completar sua Pokédex</p>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-4 ml-auto mr-auto">
        <Card pokemon={pokemon} key={pokemon.id} />
      </div>
    </main>
  );
}
