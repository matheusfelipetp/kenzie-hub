import { BackgroundStyled, HeaderModal, ModalStyled } from './style';
import Button from '../Button';
import Form from '../Form';
import Loading from '../Loading';
import { AiFillCaretDown } from 'react-icons/ai';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import MessageError from '../MessageError';
import { useContext } from 'react';
import { iRegisterTech, TechContext } from '../../context/TechContext';
import { UserContext } from '../../context/UserContext';

const AddModal = () => {
  const { loading } = useContext(UserContext);
  const { modal, setModal, registerTech } = useContext(TechContext);

  const formSchema = yup.object().shape({
    title: yup.string().required('Nome obrigatório'),
    status: yup.string().required('Selecione um status'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterTech>({
    resolver: yupResolver(formSchema),
  });

  return (
    <BackgroundStyled>
      {loading ? (
        <Loading />
      ) : (
        <ModalStyled>
          <HeaderModal>
            <h3>Cadastrar tecnologia</h3>
            <button aria-label="Fechar modal" onClick={() => setModal(!modal)}>
              X
            </button>
          </HeaderModal>
          <Form onSubmit={handleSubmit(registerTech)}>
            <div>
              <label htmlFor="tech">Nome</label>
              <input
                id="tech"
                type="text"
                placeholder="Digite o nome da tecnologia"
                {...register('title')}
              />
              {<MessageError>{errors.title?.message}</MessageError>}
            </div>
            <div>
              <label htmlFor="status">Selecionar status </label>
              <select id="status" {...register('status')}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <AiFillCaretDown />
              {<MessageError>{errors.status?.message}</MessageError>}
            </div>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </ModalStyled>
      )}
    </BackgroundStyled>
  );
};

export default AddModal;
