import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';
import api from '../../services/Api';
import { UserContext } from '../UserContext';

interface iTechProviderProps {
  children: ReactNode;
}

export interface iTechs {
  id: string;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export interface iEditTech {
  status: string;
}

export interface iRegisterTech {
  title: string;
  status: string;
}

interface iTechInfo {
  id: string;
  title: string;
  status: string;
}

interface iTechProvider {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
  modalEdit: boolean;
  setModalEdit: Dispatch<SetStateAction<boolean>>;
  userTechs: iTechs[];
  techInfo: iTechInfo;
  setTechInfo: Dispatch<SetStateAction<iTechInfo>>;
  registerTech: (data: iRegisterTech) => void;
  deleteTech: (techId: string) => void;
  editTech: (data: iEditTech, techId: string) => void;
}

export const TechContext = createContext({} as iTechProvider);

export const TechProvider = ({ children }: iTechProviderProps) => {
  const { user, setLoading, loadUser } = useContext(UserContext);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [userTechs, setUserTechs] = useState([] as iTechs[]);
  const [techInfo, setTechInfo] = useState({} as iTechInfo);
  const token = localStorage.getItem('@token');

  useEffect(() => {
    if (user) {
      setUserTechs(user.techs);
    }
  }, [user]);

  const registerTech = async (dataTech: iRegisterTech) => {
    setLoading(true);
    try {
      const { data } = await api.post<iTechs>('users/techs', dataTech, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setModal(!modal);
      setUserTechs([...userTechs, data]);
      toast.success('Tecnologia adicionada!');
    } catch {
      toast.error('Ops! Alguma coisa deu errado!');
    } finally {
      setLoading(false);
    }
  };

  const deleteTech = async (techId: string) => {
    setLoading(true);
    try {
      await api.delete(`users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const filterTech = userTechs.filter((elem) => elem.id !== techId);

      setModalEdit(!modalEdit);
      toast.success('Tecnologia deletada!');
      setUserTechs(filterTech);
    } catch {
      toast.error('Ops! Alguma coisa deu errado!');
    } finally {
      setLoading(false);
    }
  };

  const editTech = async (data: iEditTech, techId: string) => {
    setLoading(true);
    try {
      await api.put<iTechs>(`users/techs/${techId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setModalEdit(!modalEdit);
      loadUser();
      toast.success('Tecnologia atualizada!');
    } catch {
      toast.error('Ops! Alguma coisa deu errado!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        modal,
        setModal,
        modalEdit,
        setModalEdit,
        registerTech,
        userTechs,
        editTech,
        deleteTech,
        techInfo,
        setTechInfo,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
