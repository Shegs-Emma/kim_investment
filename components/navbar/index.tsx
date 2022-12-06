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
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { togglePopUp } from '../../store/slices/modalSlice';
import PopUp from '../ui/popups';

const Navbar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setOpen] = useState(false);
  const router = useRouter();
  const { popUpOpen } = useSelector((state: RootState) => state.modal);

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
          <Span active={router.asPath === '/team' ? true : false}>
            <Link href='/team' replace>
              Team
            </Link>
          </Span>
          <Span active={router.asPath === '/contactUs' ? true : false}>
            <Link href='/contactUs' replace>
              Contact Us
            </Link>
          </Span>
          <Span onClick={() => dispatch(togglePopUp(!popUpOpen))} touch>
            Get in touch
          </Span>
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
          <Span sidebar active={router.asPath === '/team' ? true : false}>
            <Link href='/team' replace>
              Team
            </Link>
          </Span>
          <Span sidebar active={router.asPath === '/contactUs' ? true : false}>
            <Link href='/contactUs' replace>
              Contact Us
            </Link>
          </Span>
          <Span onClick={() => dispatch(togglePopUp(!popUpOpen))} touch>
            Get in touch
          </Span>
        </LinkArea>
      </SidebarMenu>
      {popUpOpen ? <PopUp /> : null}
    </NavbarContainer>
  );
};

export default Navbar;
