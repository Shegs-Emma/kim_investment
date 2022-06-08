import { FC, MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer } from './button.styles';

interface IProps {
  children: ReactNode;
  clicked?: MouseEventHandler<HTMLButtonElement>;
  topArea?: boolean;
}

const Button: FC<IProps> = ({ children, clicked, topArea }: IProps) => (
  <ButtonContainer onClick={clicked} topArea={topArea}>
    {children}
  </ButtonContainer>
);

export default Button;

Button.defaultProps = {
  clicked: undefined,
  topArea: undefined,
};
