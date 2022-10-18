import { useContext } from 'react';
import { CardStyled } from './style';
import { TechContext } from '../../context/TechContext';

interface iCardProps {
  tech: {
    id: string;
    title: string;
    status: string;
  };
}

const Card = ({ tech }: iCardProps) => {
  const { modalEdit, setModalEdit, setTechInfo } = useContext(TechContext);

  return (
    <>
      <CardStyled
        onClick={() => {
          setModalEdit(!modalEdit);
          setTechInfo(tech);
        }}
      >
        <h2>{tech.title}</h2>
        <p>{tech.status}</p>
      </CardStyled>
    </>
  );
};

export default Card;
