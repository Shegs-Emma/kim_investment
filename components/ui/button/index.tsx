import { FC, MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer } from './button.styles';

interface IProps {
  children: ReactNode;
  clicked?: MouseEventHandler<HTMLButtonElement>;
  topArea?: boolean;
  platform?: boolean;
}

const Button: FC<IProps> = ({ children, clicked, topArea, platform }: IProps) => (
  <ButtonContainer onClick={clicked} topArea={topArea} platform={platform}>
    {children}
  </ButtonContainer>
);

export default Button;

Button.defaultProps = {
  clicked: undefined,
  topArea: undefined,
  platform: undefined,
};
