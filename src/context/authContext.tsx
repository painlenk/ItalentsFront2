"use client";
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
}

export const AuthContext = createContext<IContext | null>(null);

const AuthContextProvider = ({ children }: IProps) => {
  const router = useRouter();

  const [userLogged, setUserLogged] = useState(false);
  const [userName, setUserName] = useState("");

  const logout = () => {
    setUserName("");
    setUserLogged(false);
    router.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ userLogged, setUserLogged, userName, setUserName, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
