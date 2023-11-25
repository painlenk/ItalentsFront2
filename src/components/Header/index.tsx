"use client";
import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { AuthContext, IContext } from "@/context/authContext";
import { useContext } from "react";

export const Header = () => {
  const { userName, userLogged, logout, deleteAccount } = useContext(
    AuthContext
  ) as IContext;

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

        {userLogged ? (
          <ul className="flex gap-8 font-bold text-base justify-between h-20 items-center ml-auto ">
            <li className="lowercase  text-center border-r-2 border-x-white border-solid pl-8">
              bem-vindo
              <span className="text-yellow-400 "> {userName}</span>
            </li>
            <li className="">
              <Link href="/colecao">coleção</Link>
            </li>

            <li className="">
              <Link onClick={logout} href="/">
                Sair
              </Link>
            </li>

            <li className="">
              <Link onClick={deleteAccount} href="/">
                excluir conta
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-8 font-bold text-lg justify-between h-20 items-center ml-auto ">
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Cadastro</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
