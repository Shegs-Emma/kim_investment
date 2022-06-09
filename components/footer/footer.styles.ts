import styled from 'styled-components';

interface StyleProps {}

const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Tablet = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    flex-direction: row;
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(250, 250, 250, 0.7);
  margin: 0 auto;
  padding: 3rem 1.5rem;

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 100%;
    padding: 3rem 2rem;
  }

  @media screen and (min-width: 52em) {
    padding: 3rem 4rem;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 100%;
    padding: 3rem 2rem;
  }

  @media screen and (min-width: 90em) {
    width: 80rem;
    margin: 0 auto;
  }
`;

const FooterTop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  border-top: 0.4px solid #e0e0e0;
  margin: 4rem 0 0.1rem 0;
  padding-top: 2rem;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterPara = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    width: 35%;
    justify-content: space-between;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    flex-direction: row;
    width: 45%;
    justify-content: space-between;
  }
`;

const FormSide = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    width: 60%;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 4rem 0;

  @media screen and (min-width: 52em) {
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 60%;
  }
`;

const FormArea = styled.form`
  width: 100%;
  margin: auto;
`;

const FullInput = styled.input.attrs({
  autoComplete: 'off',
})<StyleProps>`
  outline: none;
  width: 100%;
  height: 2.8125rem;
  display: block;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 1px solid #bdbdbd;
  margin: 1.3125rem 0;
  padding-left: 1rem;
  background-color: transparent;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 0.8125rem;
  line-height: 1.0625rem;
  color: #4f4f4f;

  &:focus {
    outline: none;
  }
`;

const ErrorTag = styled.small`
  text-align: left;
  display: block;
  color: tomato;
  padding-left: 1.5rem;
`;

export {
  FooterContainer,
  Tablet,
  FooterDiv,
  FormSide,
  FooterLinks,
  Contact,
  FooterTop,
  FooterBottom,
  FormArea,
  FullInput,
  FooterPara,
  ErrorTag,
};
