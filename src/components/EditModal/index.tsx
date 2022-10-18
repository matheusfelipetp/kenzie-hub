import { BackgroundStyled, HeaderModal, ModalStyled } from './style';
import Button from '../Button';
import Form from '../Form';
import Loading from '../Loading';
import MessageError from '../MessageError';
import { AiFillCaretDown } from 'react-icons/ai';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from 'react';
import { iEditTech, TechContext } from '../../context/TechContext';
import { UserContext } from '../../context/UserContext';

interface iTech {
  tech: {
    title: string;
    status: string;
    id: string;
  };
}

const EditModal = ({ tech }: iTech) => {
  const { loading } = useContext(UserContext);
  const { editTech, deleteTech, modalEdit, setModalEdit } =
    useContext(TechContext);

  const formSchema = yup.object().shape({
    status: yup.string().required('Selecione um status'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iEditTech>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: iEditTech) => {
    editTech(data, tech.id);
  };

  return (
    <BackgroundStyled>
      {loading ? (
        <Loading />
      ) : (
        <ModalStyled>
          <HeaderModal>
            <h3>Detalhes Tecnologia</h3>
            <button
              aria-label="Fechar modal"
              onClick={() => setModalEdit(!modalEdit)}
            >
              X
            </button>
          </HeaderModal>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="tech">Nome</label>
              <input id="tech" type="text" value={tech.title} disabled />
            </div>
            <div>
              <label htmlFor="status">Status </label>
              <select id="status" {...register('status')}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <AiFillCaretDown />
              {<MessageError>{errors.status?.message}</MessageError>}
            </div>
            <div className="div-btn">
              <Button type="submit">Salvar</Button>
              <Button
                className="btn-grey-1"
                type="button"
                onClick={() => deleteTech(tech.id)}
              >
                Excluir
              </Button>
            </div>
          </Form>
        </ModalStyled>
      )}
    </BackgroundStyled>
  );
};

export default EditModal;
