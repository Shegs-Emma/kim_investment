import { FC, MouseEventHandler, ReactNode } from 'react';
import { ButtonContainer } from './button.styles';

interface IProps {
  children: ReactNode;
  clicked?: MouseEventHandler<HTMLButtonElement>;
  topArea?: boolean;
  platform?: boolean;
  contactForm?: boolean;
}

const Button: FC<IProps> = ({ children, clicked, topArea, platform, contactForm }: IProps) => (
  <ButtonContainer
    onClick={clicked}
    topArea={topArea}
    platform={platform}
    contactForm={contactForm}
  >
    {children}
  </ButtonContainer>
);

export default Button;

Button.defaultProps = {
  clicked: undefined,
  topArea: undefined,
  platform: undefined,
  contactForm: undefined,
};
