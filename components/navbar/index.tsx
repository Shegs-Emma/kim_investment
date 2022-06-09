import Image from 'next/image';
import { FC, useState } from 'react';
import {
  NavbarContainer,
  NavBar,
  LogoArea,
  LinkArea,
  MobileLinkArea,
  SidebarMenu,
} from './navbar.styles';
import logo from '../../public/assets/logo.svg';
import { Span } from '../typography';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);

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
        <MobileLinkArea>
          <GiHamburgerMenu
            size={30}
            color='#194A96'
            className='hamburger'
            onClick={() => setOpen(!isOpen)}
          />
        </MobileLinkArea>
      </NavBar>
      <SidebarMenu collapsed={isOpen === true}>
        <LinkArea sidebar>
          <Span sidebar>Home</Span>
          <Span sidebar>About Us</Span>
          <Span sidebar>Contact us</Span>
        </LinkArea>
      </SidebarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
