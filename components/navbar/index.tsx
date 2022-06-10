import Image from 'next/image';
import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import {
  NavbarContainer,
  NavBar,
  LogoArea,
  LinkArea,
  MobileLinkArea,
  SidebarMenu,
} from './navbar.styles';
import Link from 'next/link';
import logo from '../../public/assets/logo.svg';
import { Span } from '../typography';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();

  return (
    <NavbarContainer>
      <NavBar>
        <LogoArea>
          <Link href='/' passHref replace>
            <>
              <Image src={logo} alt='logo' />
            </>
          </Link>
        </LogoArea>
        <LinkArea>
          <Span active={router.asPath === '/' ? true : false}>
            <Link href='/' replace>
              Home
            </Link>
          </Span>
          <Span active={router.asPath === '/aboutUs' ? true : false}>
            <Link href='/aboutUs' replace>
              About Us
            </Link>
          </Span>
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
          <Span sidebar active={router.asPath === '/' ? true : false}>
            <Link href='/' replace>
              Home
            </Link>
          </Span>
          <Span sidebar active={router.asPath === '/aboutUs' ? true : false}>
            <Link href='/aboutUs' replace>
              About Us
            </Link>
          </Span>
          <Span sidebar>Contact us</Span>
        </LinkArea>
      </SidebarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
