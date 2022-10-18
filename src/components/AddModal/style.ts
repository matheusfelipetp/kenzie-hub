import styled from 'styled-components';

export const BackgroundStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalStyled = styled.div`
  position: relative;
  top: -60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-grey-0);
  background: var(--color-grey-3);
  margin: 0 1rem 0 1rem;
  width: 100%;
  max-width: 500px;
  height: max-content;
  padding: 0 1rem 1rem 1rem;
  border-radius: var(--radius-1);
  animation: show 0.5s forwards;

  form {
    max-width: 100%;
  }

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(30px);
    }
  }
`;

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-grey-2);
  width: 100%;
  padding: 1rem;
  border-radius: var(--radius-1);

  h3 {
    font: var(--font-title-3);
  }

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
`;
