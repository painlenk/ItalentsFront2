"use client";
import { AuthContext, IContext } from "@/context/authContext";
import axios from "axios";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function Register() {
  const [loginError, setLoginError] = useState("");
  const { setUserLogged, setUserName, userLogged } = useContext(
    AuthContext
  ) as IContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const submit = async (data: { username: string; password: string }) => {
    const { username, password } = data;

    try {
      const userData = await axios.post("/api/users", {
        username,
        password,
      });

      if (userData.status !== 200) {
        setLoginError("usuário já cadastrado");
        return;
      }
      setUserLogged(true);
      setUserName(username);
    } catch (e) {
      console.log("error -->", e);
      setLoginError("erro ao realizar o registro, tente novamente mais tarde");
    }
  };

  //  apos o usuário se registar redireciona ele para a pagina home
  useEffect(() => {
    if (userLogged) {
      redirect("/");
    }
  }, [userLogged]);

  return (
    <main className="flex flex-col justify-center items-center border-2 rounded-lg p-4 max-w-[50%] mr-auto ml-auto mt-14">
      <h1 className="text-4xl font-bold text-yellow-400">Cadastro</h1>
      <p className="text-xl mt-3">
        Crie sua conta e começe a{" "}
        <span className="text-yellow-400 font-semibold">Batalha</span>
      </p>

      <form
        method="POST"
        onSubmit={handleSubmit((data) => submit(data))}
        className="flex flex-col justify-center items-start mt-8 gap-4 w-[40%]"
      >
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="username" className="text-yellow-400 font-semibold">
            Usuário
          </label>
          <input
            type="text"
            id="username"
            placeholder="ex: Pikachu99"
            {...register("username", { required: true })}
            className="bg-stone-900 border-2 border-gray-400 border-solid rounded-lg p-1"
          />
          {errors.username && (
            <p className="text-red-500">O nome de usuário é requerido</p>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password" className="text-yellow-400 font-semibold">
            Senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="ex: 123Ashe"
            {...register("password", { required: true })}
            className="bg-stone-900 border-2 border-gray-400 border-solid rounded-lg p-1"
          />
          {errors.password && (
            <p className="text-red-500">A senha é requerida</p>
          )}
        </div>

        <input
          type="submit"
          value="Registrar"
          className="w-full border p-2 mt-4 bg-green-500 text-xl font-bold text-stone-800 rounded-lg cursor-pointer hover:bg-green-400 mb-4"
        />
        <p className="text-center text-red-500 w-full">{loginError}</p>
      </form>
    </main>
  );
}
