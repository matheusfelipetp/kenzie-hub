import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;
  width: 100%;
`;

export const DivStyled = styled.div`
  border-bottom: 2px solid var(--color-grey-3);
`;

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;

  h1 {
    font: var(--font-title-1);
    color: var(--color-grey-0);
  }

  p {
    font: var(--font-text-1);
    color: var(--color-grey-1);
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: var(--color-grey-3);
      color: var(--color-grey-0);
      font: var(--font-title-2);
      border: none;
      border-radius: var(--radius-1);
      padding: 6px 10px;
      transition: 0.3s ease;

      &:hover {
        filter: brightness(1.2);
      }
    }
  }

  h2 {
    font: var(--font-title-2);
    color: var(--color-grey-0);
  }

  p {
    font: var(--font-text-1);
    color: var(--color-grey-1);
  }
`;
