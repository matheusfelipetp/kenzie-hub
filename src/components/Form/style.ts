import styled from 'styled-components';

export const FormStyled = styled.form`
  width: 100%;
  max-width: 400px;
  height: max-content;
  background: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  box-sizing: border-box;
  border-radius: var(--radius-1);

  h2 {
    font: var(--font-title-2);
    color: var(--color-grey-0);
  }

  span {
    font: var(--font-text-1);
    color: var(--color-grey-1);
    margin-top: 1rem;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;

    label {
      align-self: flex-start;
      font: var(--font-text-1);
      color: var(--color-grey-0);
    }

    .selectStyled {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      overflow: hidden;
      border-radius: var(--radius-1);
      border: none;
    }

    select {
      background: var(--color-grey-2);
      width: 100%;
      height: 40px;
      padding: 5px;
      -webkit-appearance: none;
      border: 2px solid transparent;
      border-radius: var(--radius-1);
      color: var(--color-grey-0);
      padding: 0 0.8rem;

      &:focus {
        border: 2px solid var(--color-primary);
      }
    }

    input {
      width: 100%;
      height: 40px;
      border-radius: var(--radius-1);
      background: var(--color-grey-2);
      border: none;
      padding: 0 0.8rem;
      padding-right: 2.5rem;
      box-sizing: border-box;
      color: var(--color-grey-0);
      font: var(--font-text-3);

      &:disabled {
        color: var(--color-grey-1);
      }

      &:focus {
        outline: 2px solid var(--color-primary);
      }

      &::placeholder {
        color: var(--color-grey-1);
      }
    }

    svg {
      position: absolute;
      right: 1rem;
      top: 37px;
      cursor: pointer;
      transition: 0.3s ease;
      color: var(--color-grey-1);

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;
