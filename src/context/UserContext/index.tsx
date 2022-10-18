import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/Api';
import { iTechs } from '../TechContext';

interface iUserProviderProps {
  children: ReactNode;
}

interface iWorks {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

interface iUser {
  id: string;
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
  techs: iTechs[];
  works: iWorks[];
  created_at: string;
  updated_at: string;
  avatar_url: string;
}

export interface iNewUser {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

export interface iUserLogin {
  email: string;
  password: string;
}

interface iUserLoginAxios {
  user: iUser;
  token: string;
}

interface iUserProvider {
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  token: string | null;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  loadUser: () => void;
  login: (dataUser: iUserLogin) => void;
  registerUser: (dataUser: iNewUser) => void;
  logout: () => void;
}

export const UserContext = createContext({} as iUserProvider);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('@token');

  const loadUser = async () => {
    if (token) {
      setLoading(true);
      try {
        const { data } = await api.get<iUser>('profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(`dashboard`);
      } catch {
        localStorage.removeItem('@userId');
        localStorage.removeItem('@token');
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = async (dataUser: iUserLogin) => {
    setLoading(true);
    try {
      const { data } = await api.post<iUserLoginAxios>('sessions', dataUser);
      setUser(data.user);

      localStorage.setItem('@token', data.token);

      navigate(`/dashboard`, { replace: true });
      toast.success('Login realizado com sucesso');
    } catch {
      toast.error('Ops! Alguma coisa deu errado!');
    } finally {
      setLoading(false);
    }
  };

  const registerUser = async (dataUser: iNewUser) => {
    const newUser = {
      email: dataUser.email,
      password: dataUser.password,
      name: dataUser.name,
      bio: dataUser.bio,
      contact: dataUser.contact,
      course_module: dataUser.course_module,
    };

    try {
      await api.post<iUser>('users', newUser);
      toast.success('Usuário cadastrado com sucesso!');
      setTimeout(() => navigate('/'), 2000);
    } catch (err: any) {
      if (err.response.data.message === 'Email already exists') {
        toast.error('Email já cadastrado!');
      } else {
        toast.error('Ops! Alguma coisa deu errado!');
      }
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('@token');
    localStorage.removeItem('@userId');
    navigate('/');
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        loading,
        setLoading,
        registerUser,
        logout,
        token,
        loadUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
