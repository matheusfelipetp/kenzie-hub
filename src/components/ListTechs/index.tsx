import { useContext } from 'react';
import { TechContext } from '../../context/TechContext';
import Card from '../Card';
import EditModal from '../EditModal';
import { ListStyled } from './style';

const ListTechs = () => {
  const { userTechs, modalEdit, techInfo } = useContext(TechContext);

  return (
    <ListStyled>
      {userTechs.length > 0 ? (
        userTechs.map((elem) => <Card key={elem.id} tech={elem} />)
      ) : (
        <p>Não há tecnologias adicionadas</p>
      )}
      {modalEdit && <EditModal tech={techInfo} />}
    </ListStyled>
  );
};

export default ListTechs;
