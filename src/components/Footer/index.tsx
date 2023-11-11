import Image from "next/image";
import Logo from "../../../public/images/logo-footer.png";

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
        <li>Google Play</li>
        <li>Nintendo Switch</li>
        <li>App Store</li>
      </ul>
    </footer>
  );
};
