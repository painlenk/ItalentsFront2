"use client";
import { Divider } from "@/shared/Divider";
import { Pills } from "@/shared/Pills";
import { SkillsBar } from "@/shared/SkillsBar";
import { IPokemon } from "@/types/pokemon";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface IProps {
  params: {
    slug: string;
  };
}

export default function Details({ params }: IProps) {
  const [pokemon, setPokemon] = useState<IPokemon>();
  const urlParams = useSearchParams();

  useEffect(() => {
    const state = urlParams.get("data");

    if (!state) {
      return;
    }

    setPokemon(JSON.parse(state));
  }, [urlParams]);

  if (!pokemon) {
    return;
  }

  return (
    <main className="max-w-[60%] ml-auto mr-auto mt-14 ">
      <section className="flex justify-center items-center  bg-gradient-to-r from-stone-900 via-stone-800 to-stone-700 rounded-2xl px-12 mb-14">
        <Image
          src={`/images/stat/stat-${pokemon?.avatar}.png`}
          alt={pokemon?.name}
          width={358}
          height={358}
        />
        <div className="flex flex-col items-end">
          <h1 className="text-4xl font-bold" style={{ color: pokemon.color }}>
            {pokemon.name}
          </h1>
          <span>Nível: {pokemon.level}</span>

          <p className="max-w-[80%] mt-8 text-right">{pokemon.description}</p>

          <div className="flex  mt-8 max-w-[60%] items-center justify-between gap-8">
            {pokemon.stats_battle.map((item) => {
              return (
                <Pills
                  color={pokemon.color}
                  statusBattle={item}
                  key={`${item}${pokemon.id}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      <section className="flex flex-col justify-center items-center mt-14">
        <h2 className="font-bold text-4xl mb-3" style={{ color: "orange" }}>
          Skills do Pokémon
        </h2>
        <p className="text-lg">
          Esse Pokémon possui as seguintes habilidades de batalha:
        </p>

        <div className=" mt-14 w-[70%] flex justify-center items-center ">
          <SkillsBar skill={pokemon.skills} />
        </div>
      </section>
    </main>
  );
}
