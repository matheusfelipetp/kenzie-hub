import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { TechContext } from '../../context/TechContext';
import Button from '../../components/Button';
import Logo from '../../components/Logo';
import AddModal from '../../components/AddModal';
import { DivStyled, HeaderStyled, MainStyled, SectionStyled } from './style';
import { motion } from 'framer-motion';
import { Navigate } from 'react-router-dom';
import ListTechs from '../../components/ListTechs';

const UserPage = () => {
  const { user, logout } = useContext(UserContext);
  const { modal, setModal } = useContext(TechContext);

  return (
    <>
      {user ? (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DivStyled>
            <div className="container">
              <HeaderStyled>
                <Logo />
                <Button type="button" className="btn-grey" onClick={logout}>
                  Sair
                </Button>
              </HeaderStyled>
            </div>
          </DivStyled>
          <DivStyled>
            <div className="container">
              <SectionStyled>
                <h1>Olá, {user?.name}</h1>
                <p>{user?.course_module}</p>
              </SectionStyled>
            </div>
          </DivStyled>
          <div className="container">
            <MainStyled>
              <div>
                <h2>Tecnologias</h2>
                <button
                  aria-label="Adicionar tecnologia"
                  onClick={() => setModal(!modal)}
                >
                  +
                </button>
              </div>
              <ListTechs />
            </MainStyled>
          </div>
          {modal && <AddModal />}
        </motion.div>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default UserPage;
