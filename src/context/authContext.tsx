"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

interface IProps {
  children: React.ReactNode;
}

export interface IContext {
  userLogged: boolean;
  setUserLogged: (value: boolean) => void;
  userName: string;
  setUserName: (name: string) => void;
  logout: () => void;
  deleteAccount: () => void;
}

export const AuthContext = createContext<IContext | null>(null);

const AuthContextProvider = ({ children }: IProps) => {
  const router = useRouter();

  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  //função de logout que limpa o estado
  const logout = () => {
    setUserName("");
    setUserLogged(false);
    router.push("/");
  };

  //função para deletar usuario
  const deleteAccount = async () => {
    try {
      const userData = await axios.patch("/api/users", { username: userName });
      logout();
    } catch (e) {
      console.log("error -->", e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userLogged,
        setUserLogged,
        userName,
        setUserName,
        logout,
        deleteAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
