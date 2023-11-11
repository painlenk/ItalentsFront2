import { Divider } from "@/shared/Divider";
import { Pills } from "@/shared/Pills";
import { SkillsBar } from "@/shared/SkillsBar";
import Image from "next/image";

interface IProps {
  params: {
    slug: string;
  };
}

export default async function Details({ params }: IProps) {
  return (
    <main className="max-w-[60%] ml-auto mr-auto mt-14 ">
      <section className="flex justify-center items-center  bg-gradient-to-r from-stone-900 via-stone-800 to-stone-700 rounded-2xl px-12 mb-14">
        <Image
          src={`/images/stat/stat-charizard.png`}
          alt="charizard"
          width={358}
          height={358}
        />
        <div className="flex flex-col items-end">
          <h1 className="text-4xl font-bold" style={{ color: "orange" }}>
            Charizard
          </h1>
          <span>Nível: INICIANTE</span>

          <p className="max-w-[80%] mt-8 text-right">
            Enquanto ainda é Charmander, não é o mais confiável, mas ao evoluir
            para Charizard, consegue usar seus movimentos poderosos para atacar
            e causar dano em uma área bem grande.
          </p>

          <div className="flex  mt-8 max-w-[60%] items-center justify-between gap-8">
            <Pills />
            <Pills />
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

        <div className="flex flex-col gap-4 justify-center items-center mt-14   w-[70%]">
          <SkillsBar />
          <SkillsBar />
          <SkillsBar />
        </div>
      </section>
    </main>
  );
}
