import Image from 'next/image';
import { FC } from 'react';
import { NavbarContainer, NavBar, LogoArea, LinkArea } from './navbar.styles';
import logo from '../../public/assets/logo.svg';
import { Span } from '../typography';

const Navbar: FC = () => {
  return (
    <NavbarContainer>
      <NavBar>
        <LogoArea>
          <Image src={logo} alt='logo' />
        </LogoArea>
        <LinkArea>
          <Span active>Home</Span>
          <Span>About Us</Span>
          <Span>Contact us</Span>
        </LinkArea>
      </NavBar>
    </NavbarContainer>
  );
};

export default Navbar;
