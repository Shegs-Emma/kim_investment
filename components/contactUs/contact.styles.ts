import styled from 'styled-components';

const ContactUsHeader = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  text-align: center;
`;

const ContactUsFormArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 6rem 0;
  padding: 1rem;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    padding: 3rem;
  }
`;

const ContactImageSide = styled.div`
  width: 100%;
  background: rgba(197, 213, 255, 0.2);
  padding: 5rem 1.5rem 5rem 2rem;
  box-shadow: 4px 4px 8px rgba(232, 232, 232, 0.4);

  @media screen and (min-width: 52em) {
    width: 50%;
    padding: 9rem 3rem 0 4rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 6rem 0 5rem 10rem;
  }
`;

const ContactF = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 5rem 1.5rem;
  box-shadow: 4px 4px 8px rgba(232, 232, 232, 0.4);

  @media screen and (min-width: 52em) {
    width: 50%;
    padding: 5rem 3rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 5rem 3rem;
  }
`;

const MiddleContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  padding: 3rem 0;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    padding: 3rem 0 10rem 0;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    flex-direction: row;
    padding: 3rem 0 10rem 0;
  }
`;

const LocationArea = styled.div`
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 50%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 50%;
  }
`;
const EmailArea = styled.div`
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 50%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 50%;
  }
`;

const LocationDetails = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 4rem 0;

  @media screen and (min-width: 52em) {
    width: 50%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 50%;
  }
`;

const MessageArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const MessageHead = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 2rem auto;

  @media screen and (min-width: 52em) {
    width: 70%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 70%;
  }
`;

const ContactUsForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: #fafafa;
  margin: 0 auto 10rem auto;

  border: 0.6px solid #e0e0e0;
  box-shadow: 0px -8px 16px rgba(232, 232, 232, 0.28), 0px 10px 20px rgba(232, 232, 232, 0.3);
  border-radius: 8px;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    width: 85%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    flex-direction: row;
    width: 85%;
  }
`;

const ImageSide = styled.div`
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 50%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 50%;
  }
`;

const FormSideContact = styled.div`
  background-color: #ffffff;
  padding: 2rem 1rem 0 1rem;
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 50%;
    /* padding: 6rem 3rem; */
    padding: 2rem 3rem 0 3rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 50%;
    padding: 0.1rem 1.5rem 0 1.5rem;
  }
`;

export {
  ContactUsHeader,
  MessageArea,
  MessageHead,
  ContactUsFormArea,
  ContactUsForm,
  ContactImageSide,
  ContactF,
  MiddleContact,
  LocationArea,
  EmailArea,
  LocationDetails,
  ImageSide,
  FormSideContact,
};
