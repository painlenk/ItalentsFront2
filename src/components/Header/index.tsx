import Image from "next/image";
import logo from "../../../public/images/logo.svg";

export const Header = () => {
  return (
    <header className="border-b-2 border-gray-600 border-solid py-6 bg-stone-900">
      <nav className="uppercase flex items-center  max-w-[80%] mx-auto ">
        <Image src={logo} alt="logo" width={135} height={74} />
        <ul className="flex font-bold text-lg justify-evenly h-20 items-center w-3/4 ">
          <li className="border-solid border-yellow-300 border-2 bg-yellow-400 rounded-full p-2  text-gray-900">
            Página Inicial
          </li>
          <li>Google Play</li>
          <li>APP Store</li>
          <li>APP Store</li>
        </ul>

        <ul className="flex gap-8 font-bold text-lg justify-between h-20 items-center ml-auto ">
          <li>Login</li>
          <li>Cadastro</li>
        </ul>
      </nav>
    </header>
  );
};
