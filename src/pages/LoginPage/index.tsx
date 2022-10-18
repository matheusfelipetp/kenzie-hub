import { useContext, useEffect, useState } from 'react';
import { iUserLogin, UserContext } from '../../context/UserContext';
import { LinkStyled as Link, MainStyled } from './style';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import Button from '../../components/Button';
import Loading from '../../components/Loading';
import MessageError from '../../components/MessageError';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const { login, loading } = useContext(UserContext);
  const [inputPassword, setInputPassword] = useState(false);
  const [inputType, setInputType] = useState('password');

  useEffect(() => {
    if (inputPassword) {
      setInputType('text');
    } else {
      setInputType('password');
    }
  }, [inputPassword]);

  const formSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLogin>({
    resolver: yupResolver(formSchema),
  });

  const showPassword = () => {
    setInputPassword(!inputPassword);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainStyled className="container">
        {loading ? (
          <Loading />
        ) : (
          <>
            <motion.header
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Logo />
            </motion.header>
            <Form onSubmit={handleSubmit(login)}>
              <h2>Login</h2>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  placeholder="Digite seu e-mail"
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
                  <AiFillEyeInvisible onClick={showPassword} />
                ) : (
                  <AiFillEye onClick={showPassword} />
                )}
                {<MessageError>{errors.password?.message}</MessageError>}
              </div>
              <Button type="submit">Entrar</Button>

              <div>
                <span>Ainda não possui uma conta?</span>
                <Link to="/register">Cadastre-se</Link>
              </div>
            </Form>
          </>
        )}
      </MainStyled>
    </motion.div>
  );
};

export default LoginPage;
