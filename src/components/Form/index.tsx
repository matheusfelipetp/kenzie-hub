import { FormHTMLAttributes, ReactNode } from 'react';
import { FormStyled } from './style';

interface iFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

const Form = ({ children, onSubmit }: iFormProps) => {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
};

export default Form;
