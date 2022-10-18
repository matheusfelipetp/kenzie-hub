import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  height: 100vh;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-grey-1);
  color: var(--color-grey-0);
  font: var(--font-text-1);
  border: none;
  width: 100%;
  height: 40px;
  border-radius: var(--radius-1);
  transition: 0.3s ease;

  &:hover {
    filter: brightness(1.2);
  }
`;
