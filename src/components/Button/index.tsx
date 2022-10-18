import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyled } from './style';

interface iButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, type, className, onClick }: iButtonProps) => {
  return (
    <ButtonStyled type={type} className={className} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
