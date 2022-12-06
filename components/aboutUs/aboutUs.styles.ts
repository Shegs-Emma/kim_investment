import styled from 'styled-components';

const ImageCont = styled.div`
  width: 80%;
  margin: 2rem auto;
`;

const AboutTopLevel = styled.div`
  width: 100%;
  margin: -0.5rem 0 0 0;

  @media screen and (min-width: 52em) {
    margin: -1rem 0 0 0;
  }
`;

const MyImage = styled.div`
  display: none;

  @media screen and (min-width: 52em) {
    display: block;
    width: 100%;
  }
`;

const MyImageMobile = styled.div`
  display: block;
  width: 100%;

  @media screen and (min-width: 52em) {
    display: none;
  }
`;

const BlurArea = styled.div`
  background-image: url('/assets/blur.svg');
  /* background: linear-gradient(0deg, rgba(19, 19, 19, 0.9), rgba(19, 19, 19, 0.9)),
    url('/assets/blur.svg'); */
  padding: 3rem 1.5rem;
  /* height: 600px; */

  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    padding: 6rem 3rem 5rem 3rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 7rem 3rem;
  }
`;

const AbsoUsText = styled.div`
  z-index: 20;
  position: absolute;
  top: 12rem;
  left: 1.5rem;
  width: 85%;
  text-align: center;

  @media screen and (min-width: 52em) {
    top: 20rem;
    left: 8rem;
  }
`;

const BlurContent = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  text-align: center;

  margin: 0 auto;
`;

const Numbers = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media screen and (min-width: 52em) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const Number = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 1rem;

  @media screen and (min-width: 52em) {
    width: 20%;
    margin-bottom: 0;
  }
`;

export {
  ImageCont,
  BlurArea,
  BlurContent,
  Numbers,
  Number,
  AboutTopLevel,
  AbsoUsText,
  MyImageMobile,
  MyImage,
};
