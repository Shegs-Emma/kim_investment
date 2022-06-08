import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 4rem;
  box-sizing: border-box;
  background: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  z-index: 99;
`;

const NavBar = styled.div`
  width: 70rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 100%;
  }

  @media screen and (min-width: 90em) {
    width: 80rem;
  }
`;

const LogoArea = styled.div``;

const LinkArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 25rem;
`;

export { NavbarContainer, NavBar, LogoArea, LinkArea };
