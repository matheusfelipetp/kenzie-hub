import styled from 'styled-components';

export const CardStyled = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-grey-4);
  padding: 1rem;
  border-radius: var(--radius-1);
  cursor: pointer;
  animation: showCard 0.5s ease forwards;
  transition: 0.3s ease;

  &:hover {
    background: var(--color-grey-2);
  }

  @keyframes showCard {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
