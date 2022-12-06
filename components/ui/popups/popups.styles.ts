import styled from 'styled-components';

const PopUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(130, 130, 130, 0.5);
  transition: 0.25s ease-in-out;
  padding: 0 0 1.875rem;
  position: fixed;
  z-index: 50;
  top: 0.1rem;
  left: 0;
  overflow-y: scroll;
  margin-bottom: 10rem;

  @media screen and (min-width: 52em) {
    display: flex;
  }
`;

const LeftBackDrop = styled.div`
  display: none;

  @media screen and (min-width: 52em) {
    display: inline-block;
    cursor: pointer;
    background-color: transparent;
    width: 15%;
    z-index: 50;
  }
`;

const RightBackDrop = styled(LeftBackDrop)``;

const InfoContainer = styled.div`
  width: 100%;
  height: 50rem;
  margin: 0.5rem auto 0 auto;
  padding: 0.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const BlueCardInner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    width: 100%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 100%;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    padding: 0.5rem 0.2rem;
  }
`;

export { PopUpContainer, LeftBackDrop, RightBackDrop, InfoContainer, InfoBox, BlueCardInner };
