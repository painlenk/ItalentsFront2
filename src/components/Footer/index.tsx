import Image from "next/image";
import Logo from "../../../public/images/logo-footer.png";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="relative mt-52 bg-gray-600 flex flex-col justify-center items-center min-h-[300px]  ">
      <Image
        src={Logo}
        alt="Logo"
        className="absolute w-[350px] top-[-100px]"
      />

      <a
        href="https://unite.pokemon.com/pt-br/"
        className="p-6 bg-yellow-400 uppercase font-bold text-gray-900 rounded-full mt-12"
      >
        Jogue Pokémon Unite Agora!
      </a>

      <ul className="flex mt-6 gap-6 font-semibold">
        <li>
          <Link href="https://play.google.com/store/apps/details?id=jp.pokemon.pokemonunite&hl=pt_BR&gl=US">
            Google Play
          </Link>
        </li>
        <li>
          <Link href='"https://apps.apple.com/br/app/pok%C3%A9mon-unite/id1512321575"'>
            App Store
          </Link>
        </li>
        <li>
          <Link href="/">Página Inicial</Link>
        </li>
      </ul>
    </footer>
  );
};
