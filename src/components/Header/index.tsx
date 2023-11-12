import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="border-b-2 border-gray-600 border-solid py-6 bg-stone-900">
      <nav className="uppercase flex items-center  max-w-[80%] mx-auto ">
        <Image src={logo} alt="logo" width={135} height={74} />
        <ul className="flex font-bold text-lg justify-evenly h-20 items-center w-3/4 ">
          <li className="border-solid border-yellow-300 border-2 bg-yellow-400 rounded-full p-2  text-gray-900">
            <Link href="/">Página inicial</Link>
          </li>
          <li>
            <Link href="https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite&hl=pt_BR&gl=US">
              Google Play
            </Link>
          </li>
          <li>
            <Link href="https://apps.apple.com/br/app/pok%C3%A9mon-unite/id1512321575">
              APP Store
            </Link>
          </li>
          <li>
            <Link href="https://unite.pokemon.com/pt-br/">Site Oficial</Link>
          </li>
        </ul>

        <ul className="flex gap-8 font-bold text-lg justify-between h-20 items-center ml-auto ">
          <li>Login</li>
          <li>Cadastro</li>
        </ul>
      </nav>
    </header>
  );
};
