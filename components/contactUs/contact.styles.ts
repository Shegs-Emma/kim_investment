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

export { ContactUsHeader, ContactUsFormArea, ContactImageSide, ContactF };
