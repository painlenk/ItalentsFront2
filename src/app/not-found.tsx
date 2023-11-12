import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col w-[40%] m-auto  justify-center items-center mt-8">
      <h1 className="text-4xl font-bold text-blue-400">
        404 - Página não encontrada
      </h1>
      <p className="mt-4">Infelizmente não encontramos a pagina especificada</p>

      <Image
        src="/images/stat/stat-blastoise.png"
        width={358}
        height={358}
        alt="blastoise"
      />

      <button className=" w-[40%] h-12 mt-8 rounded-xl text-2xl font-semibold bg-blue-400">
        <Link href="/">Voltar a página inicial</Link>
      </button>
    </div>
  );
}
