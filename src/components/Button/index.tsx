import { ReactNode } from 'react';
import { ButtonMain } from './styles';

interface IButtonProps {
  onClick: () => void;
  disabled: boolean;
  backgroundColor: string;
  children: ReactNode
}

const Button = ({
  onClick,
  disabled,
  backgroundColor = '#000',
  children
}: IButtonProps) => {
  return (
    <ButtonMain
      onClick={onClick}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {children}
    </ButtonMain>
  )
}

export default Button;