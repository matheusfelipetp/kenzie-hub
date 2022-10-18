import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  span {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  width: 100%;
  max-width: 400px;
`;

export const LinkStyled = styled(Link)`
  background: var(--color-primary);
  color: var(--color-grey-0);
  font: var(--font-text-1);
  border: none;
  width: 100%;
  height: 40px;
  border-radius: var(--radius-1);
  transition: 0.3s ease;
  background: var(--color-grey-3);
  max-width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(1.2);
  }
`;
