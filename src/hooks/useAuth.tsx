import axios, { AxiosError } from 'axios';
import router from 'next/router';
import { setCookie, destroyCookie, parseCookies } from 'nookies';
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { SignUpCredentials, User } from '~/interfaces';
import { api } from '~/services';
import { useToast } from './useToast';
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

const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: FC<AuthContextProviderProps> = ({ children }) => {
  const { toast } = useToast();
  const [user, setUser] = useState({} as User);

  useEffect(() => {
    async function getUserData() {
      try {
        const { data } = await api.get('/users');
        const { 'pcx.token': token } = parseCookies();
        setUser({
          token,
          name: data.name,
          id: data.id,
          avatar: data.avatar,
          cpf: data.cpf,
        });
      } catch (err) {
        destroyCookie(undefined, 'pcx.token');
        setUser({} as User);
      }
    }
    getUserData();
  }, []);

  const login = async ({ email, password }: LoginCredentials) => {};

  const signUp = async ({ cpf, email, name, password }: SignUpCredentials) => {
    try {
      const { data } = await api.post('/users', {
        cpf,
        email,
        name,
        password,
      });

      setCookie(undefined, 'pcx.token', data.token, {
        maxAge: 60 * 60 * 24 * 30, // 1 Month
        path: '/',
      });

      setUser({
        token: data.token,
        name: data.user.name,
        id: data.user.id,
        cpf: data.user.cpf,
        avatar: data.user.avatar,
      });

      toast.success('Account created successfully.');
      router.push('/products');
    } catch (error: any | AxiosError) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message);
      } else {
        toast.error('Error creating account');
      }
    }
  };

  function logout() {
    destroyCookie(undefined, 'pcx.token');
    setUser({} as User);
    router.push('/login');
  }

  return (
    <AuthContext.Provider value={{ signUp, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
