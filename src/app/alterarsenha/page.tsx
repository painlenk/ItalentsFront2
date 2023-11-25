"use client";
import { AuthContext, IContext } from "@/context/authContext";
import axios from "axios";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function NewPassword() {
  const [passwordError, setPasswordError] = useState("");
  const [hasRedirect, setHasRedirect] = useState(false);
  const { userName, userLogged } = useContext(AuthContext) as IContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const submit = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    const { password, confirmPassword } = data;

    if (confirmPassword !== password) {
      setPasswordError("as senhãs não são iguais");
      return;
    }

    const userData = await axios.put("/api/users", {
      userName,
      password,
    });

    try {
    } catch (e) {
      console.log("error -->", e);
      setPasswordError("erro no servidor");
    }
  };

  useEffect(() => {
    if (hasRedirect) {
      redirect("/login");
    }
  }, [hasRedirect]);

  return (
    <main className="flex flex-col justify-center items-center border-2 rounded-lg p-4 max-w-[50%] mr-auto ml-auto mt-14">
      <h1 className="text-4xl font-bold text-yellow-400">Alterar senha</h1>

      <form
        method="POST"
        onSubmit={handleSubmit((data) => submit(data))}
        className="flex flex-col justify-center items-start mt-8 gap-4 w-[40%]"
      >
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password" className="text-yellow-400 font-semibold">
            Nova senha
          </label>
          <input
            type="password"
            id="password"
            placeholder="ex: Pikachu99"
            {...register("password", { required: true })}
            className="bg-stone-900 border-2 border-gray-400 border-solid rounded-lg p-1"
          />
        </div>
        {errors.password && <p className="text-red-500">A senha é requerida</p>}

        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="password" className="text-yellow-400 font-semibold">
            Confirmar senha
          </label>
          <input
            type="password"
            id="password"
            {...register("confirmPassword", { required: true })}
            className="bg-stone-900 border-2 border-gray-400 border-solid rounded-lg p-1"
          />
          {errors.password && (
            <p className="text-red-500">As senhas tem que ser iguais</p>
          )}
        </div>

        <input
          type="submit"
          value="Alterar"
          className="w-full border p-2 mt-4 bg-green-500 text-xl font-bold text-stone-800 rounded-lg cursor-pointer hover:bg-green-400 mb-4"
        />
        <p className="text-center text-red-500 w-full">{passwordError}</p>
      </form>
    </main>
  );
}
