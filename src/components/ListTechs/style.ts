import styled from 'styled-components';

export const ListStyled = styled.ul`
  background: var(--color-grey-3);
  border-radius: var(--radius-1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
