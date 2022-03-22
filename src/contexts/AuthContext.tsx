import axios, { AxiosError } from "axios";
import router from "next/router";
import { setCookie, destroyCookie, parseCookies } from "nookies";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ModalContext } from ".";
import type { SignUpFormCredentials, User } from "../interfaces";
import { api } from "../services";

interface AuthContextData {
  signUp: (signUpCredentials: SignUpFormCredentials) => Promise<void>;
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

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const { modal } = useContext(ModalContext);
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    async function getUserData() {
      try {
        const { data } = await api.get("/users");
        const { "pcx.token": token } = parseCookies();
        setUser({
          token,
          name: data.name,
          id: data.id,
          avatar: data.avatar,
          cpf: data.cpf,
        });
      } catch (err) {
        destroyCookie(undefined, "pcx.token");
        setUser({} as User);
      }
    }
    getUserData();
  }, []);

  async function login({ email, password }: LoginCredentials) {}

  async function signUp({ cpf, email, name, password }: SignUpFormCredentials) {
    try {
      const { data } = await api.post("/users", {
        cpf,
        email,
        name,
        password,
      });

      setCookie(undefined, "pcx.token", data.token, {
        maxAge: 60 * 60 * 24 * 30, // 1 Month
        path: "/",
      });

      setUser({
        token: data.token,
        name: data.user.name,
        id: data.user.id,
        cpf: data.user.cpf,
        avatar: data.user.avatar,
      });

      modal.success("Account created successfully.");
      router.push("/products");
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        modal.error(error.response?.data.message);
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
