import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: var(--color-primary);
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

  &.btn-grey {
    background: var(--color-grey-3);
    max-width: 80px;
  }
`;
