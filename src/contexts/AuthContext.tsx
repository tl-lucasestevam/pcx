import axios, { AxiosError } from "axios";
import router from "next/router";
import { setCookie, destroyCookie } from "nookies";
import { createContext, FC, ReactNode, useState } from "react";
import { toast } from "react-toastify";
import type { User } from "../interfaces";
import { api } from "../services";

interface AuthContextData {
  signUp: (signUpCredentials: SignUpCredentials) => Promise<void>;
  logout: () => void;
  user: User;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  cpf: string;
  password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState({} as User);

  async function login({ email, password }: LoginCredentials) {}

  async function signUp({ cpf, email, name, password }: SignUpCredentials) {
    try {
      const { data } = await api.post("/users", {
        cpf,
        email,
        name,
        password,
        address: "1",
      });

      setCookie(undefined, "pcx.token", data.token, {
        maxAge: 60 * 60 * 24 * 30, // 1 Month
        path: "/",
      });

      setUser({
        token: data.token,
        name: data.user.name,
        id: data.user.id,
        avatar: data.user.avatar,
      });

      router.push("/products");
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data.message;
        toast.error(errorMessage);
      }
    }
  }

  function logout() {
    destroyCookie(undefined, "pcx.token");
    setUser({} as User);
    router.push("/login");
  }

  return (
    <AuthContext.Provider value={{ signUp, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
