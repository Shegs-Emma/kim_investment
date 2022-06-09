import styled from 'styled-components';

interface NavbarProps {
  collapsed?: boolean;
  sidebar?: boolean;
}

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  z-index: 99;

  @media screen and (min-width: 52em) {
    padding: 1rem 4rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 1rem 2rem;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    padding: 1rem 2rem;
  }
`;

const NavBar = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 52em) {
    width: 70rem;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 100%;
  }

  @media screen and (min-width: 90em) {
    width: 80rem;
    padding: 0 4rem;
  }
`;

const LogoArea = styled.div``;

const LinkArea = styled.div<NavbarProps>`
  display: none;
  display: ${({ sidebar }) => (sidebar ? 'flex' : '')};
  flex-direction: ${({ sidebar }) => (sidebar ? 'column' : '')};
  width: ${({ sidebar }) => (sidebar ? '100%' : '')};
  padding: ${({ sidebar }) => (sidebar ? '2rem 0 3rem 0' : '')};

  @media (min-width: 52em) {
    display: ${({ sidebar }) => (sidebar ? 'none' : '')};
    display: flex;
    justify-content: space-between;
    width: 25rem;
  }
`;

const MobileLinkArea = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;

  @media (min-width: 52em) {
    display: none;
  }
`;

const SidebarMenu = styled.div<NavbarProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ collapsed }) => (collapsed ? '30rem' : '0')};
  transition: ${({ collapsed }) =>
    collapsed
      ? 'max-height 0.7s cubic-bezier(0, 1, 0.5, 1)'
      : 'max-height 0.7s cubic-bezier(0, 1, 0.5, 1)'};
`;

export { NavbarContainer, NavBar, LogoArea, LinkArea, MobileLinkArea, SidebarMenu };
