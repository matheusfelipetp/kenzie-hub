import { useContext, useEffect, useState } from 'react';
import { iNewUser, UserContext } from '../../context/UserContext';
import { DivStyled, HeaderStyled, LinkStyled as Link } from './style';
import Logo from '../../components/Logo';
import Button from '../../components/Button';
import Form from '../../components/Form';
import MessageError from '../../components/MessageError';
import { AiFillEye, AiFillEyeInvisible, AiFillCaretDown } from 'react-icons/ai';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

const RegisterPage = () => {
  const { registerUser } = useContext(UserContext);
  const [inputPassword, setInputPassword] = useState(false);
  const [inputType, setInputType] = useState('password');
  const [inputConfirm, setInputConfirm] = useState(false);
  const [inputTypeConfirm, setInputTypeConfirm] = useState('password');

  useEffect(() => {
    if (inputPassword) {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }, [inputPassword]);

  useEffect(() => {
    if (inputConfirm) {
      setInputTypeConfirm('text');
    } else {
      setInputTypeConfirm('password');
    }
  }, [inputConfirm]);

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha obrigatória!')
      .matches(
        /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,15}$/,
        'Sua senha deve conter no mínimo: 8 letras, uma letra maiúscula, um símbolo e um número',
      ),
    confirmPassword: yup
      .string()
      .required('Confirmação de senha obrigatória')
      .oneOf([yup.ref('password')], 'As senhas não conferem'),
    bio: yup.string().required('Bio obrigatória'),
    contact: yup
      .string()
      .required('Link de contato obrigatório')
      .url('URL inválida'),
    course_module: yup.string().required('Selecione um módulo'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iNewUser>({
    resolver: yupResolver(formSchema),
  });

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DivStyled>
        <HeaderStyled>
          <Logo />
          <Link to="/">Voltar</Link>
        </HeaderStyled>
        <Form onSubmit={handleSubmit(registerUser)}>
          <div>
            <h2>Crie sua conta</h2>
            <span>Rapido e grátis, vamos nessa!</span>
          </div>
          <div>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              placeholder="Digite seu nome"
              {...register('name')}
            />
            {<MessageError>{errors.name?.message}</MessageError>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Digite seu email"
              {...register('email')}
            />
            {<MessageError>{errors.email?.message}</MessageError>}
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type={inputType}
              placeholder="Digite sua senha"
              {...register('password')}
            />
            {inputPassword ? (
              <AiFillEyeInvisible
                onClick={() => setInputPassword(!inputPassword)}
              />
            ) : (
              <AiFillEye onClick={() => setInputPassword(!inputPassword)} />
            )}
            {<MessageError>{errors.password?.message}</MessageError>}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar senha</label>
            <input
              id="confirmPassword"
              type={inputTypeConfirm}
              placeholder="Confirme sua senha"
              {...register('confirmPassword')}
            />
            {inputConfirm ? (
              <AiFillEyeInvisible
                onClick={() => setInputConfirm(!inputConfirm)}
              />
            ) : (
              <AiFillEye onClick={() => setInputConfirm(!inputConfirm)} />
            )}
            {<MessageError>{errors.confirmPassword?.message}</MessageError>}
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <input
              id="bio"
              placeholder="Fale sobre você"
              {...register('bio')}
            />
            {<MessageError>{errors.bio?.message}</MessageError>}
          </div>
          <div>
            <label htmlFor="contact">Contato (Linkedin)</label>
            <input
              id="contact"
              placeholder="Digite o link do seu perfil no Linkedin"
              {...register('contact')}
            />
            {<MessageError>{errors.contact?.message}</MessageError>}
          </div>
          <div>
            <label htmlFor="course_module">Selecione o módulo</label>
            <div className="selectStyled">
              <select id="course_module" {...register('course_module')}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro Módulo
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo Módulo
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro Módulo
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto Módulo
                </option>
              </select>
            </div>
            <AiFillCaretDown />
            {<MessageError>{errors.course_module?.message}</MessageError>}
          </div>
          <Button type="submit">Cadastrar</Button>
        </Form>
      </DivStyled>
    </motion.div>
  );
};

export default RegisterPage;
