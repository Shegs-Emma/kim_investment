import styled from 'styled-components';

interface LandingProps {
  aboutUs?: boolean;
  landing?: boolean;
}

const LandingContainer = styled.div`
  width: 100%;
  padding-top: 8rem;
`;

const LandingDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 100%;
  }

  @media screen and (min-width: 90em) {
    width: 80rem;
  }
`;

const TopMostLevel = styled.div`
  width: 100%;
  padding: 6.5rem 1rem 7.5rem 1rem;
  display: flex;
  flex-direction: column;
  margin-top: -1rem;
  background-color: #fafafa;

  @media screen and (min-width: 52em) {
    padding: 6.5rem 4rem 7.5rem 4rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 6.5rem 2rem 7.5rem 2rem;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    padding: 6.5rem 2rem 7.5rem 2rem;
  }
`;

const Title = styled.div<LandingProps>`
  width: 100%;

  @media (min-width: 52em) {
    width: 60%;
    display: ${({ aboutUs }) => (aboutUs ? 'flex' : '')};
    flex-direction: ${({ aboutUs }) => (aboutUs ? 'column' : '')};
    width: ${({ aboutUs }) => (aboutUs ? '100%' : '')};
    text-align: ${({ aboutUs }) => (aboutUs ? 'center' : '')};
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 60%;
    margin: 0 auto;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  margin: -1rem auto 0 auto;
  text-align: center;

  @media screen and (min-width: 52em) {
    width: 60%;
    margin: -1rem 0 0 0;
    text-align: left;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 60%;
    margin: -1rem auto 0 auto;
    text-align: center;
  }
`;

const NextTop = styled.div`
  display: flex;
  width: 100%;
  padding: 6.5rem 1.5rem 7.5rem 1.5rem;

  background: #ffffff;
  border: 0.8px solid #f1f1f1;
  box-shadow: 0px 4px 8px rgba(117, 117, 117, 0.1);

  @media screen and (min-width: 52em) {
    padding: 6.5rem 4rem 7.5rem 4rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 6.5rem 2rem 7.5rem 2rem;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    padding: 6.5rem 2rem 7.5rem 2rem;
  }
`;

const DetailsItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media screen and (min-width: 52em) {
    margin-bottom: 0;
  }
`;

const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 21rem;
  text-align: left;

  @media screen and (min-width: 52em) {
    text-align: center;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    text-align: center;
    margin: 0 auto;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 17rem;
  }

  /* background-color: red; */
`;

const AvatarCont = styled.div`
  text-align: left;

  @media screen and (min-width: 52em) {
    text-align: center;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    text-align: center;
  }
`;

const HowItWorks = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10.5rem 1.5rem 7.5rem 1.5rem;

  @media screen and (min-width: 52em) {
    padding: 10.5rem 4rem 7.5rem 4rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 10.5rem 2rem 7.5rem 2rem;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    padding: 10.5rem 2rem 7.5rem 2rem;
  }
`;

const HowItem = styled.div<LandingProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 6rem;
  display: ${({ aboutUs }) => (aboutUs ? 'none' : '')};
  background-color: ${({ landing }) => (landing ? '#fafafa' : '')};
  border-radius: 16px;

  @media screen and (min-width: 52em) {
    display: ${({ aboutUs }) => (aboutUs ? 'flex' : '')};
    flex-direction: row;
  }
`;

const HowItemMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 6rem;
  border-radius: 16px;

  @media screen and (min-width: 52em) {
    display: none;
  }
`;

const HowLeft = styled.div`
  width: 100%;
  border-radius: 16px;

  @media screen and (min-width: 52em) {
    width: 50%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding-left: 7%;
  }
`;

const HowRight = styled.div<LandingProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #fafafa;
  background: ${({ aboutUs }) => (aboutUs ? 'none' : '')};
  padding: 2rem 2rem 5rem 2rem;
  padding: ${({ aboutUs }) => (aboutUs ? '1rem .2rem 1rem .2rem' : '')};

  border-radius: 16px;

  @media screen and (min-width: 52em) {
    width: 50%;
    padding: 9rem 2rem 5rem 2rem;
    padding: ${({ aboutUs }) => (aboutUs ? '4rem 2rem 5rem 2rem' : '')};
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 85%;
    margin: 0 auto;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    margin: 0 auto 0 3rem;
    width: 75%;
  }
`;

const FAQArea = styled.div`
  background: #f7f7ff;
  padding: 5rem 1.5rem;

  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    padding: 5rem 3rem;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 5rem 3rem;
  }
`;

const FAQDiv = styled.div`
  width: 100%;
  margin: 3rem auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 52em) {
    width: 70rem;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 90%;
  }

  @media screen and (min-width: 90em) {
    width: 80rem;
  }
`;

const LHFaq = styled.div`
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 40%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding-left: 7%;
  }
`;

const RHFaq = styled.div`
  width: 100%;
  margin-top: 2rem;

  @media screen and (min-width: 52em) {
    width: 50%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 85%;
    margin: 2rem auto;
  }
`;

const FaqIcon = styled.span`
  display: flex;
`;

const FaqText = styled.div`
  width: 100%;
  text-align: center;
`;

const BottomPart = styled.div`
  padding: 1.5rem;
  margin-bottom: 6rem;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    padding: 4rem;
  }
`;

const TitlePart = styled.div`
  width: 100%;
  margin: 3rem auto;
  text-align: center;

  @media screen and (min-width: 52em) {
    width: 85%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 55%;
  }
`;

const BlueCard = styled.div`
  width: 100%;
  margin: 0 auto 2rem auto;
  border-radius: 24px;
  background-color: #194a96;
  padding: 1rem;

  @media screen and (min-width: 52em) {
    width: 90%;
    padding: 2rem;
    margin: 2rem auto 2rem auto;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 90%;
    padding: 2rem;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    padding: 2rem;
  }
`;

const MiddlePart = styled.div`
  width: 100%;
  margin: 2rem auto;
  text-align: center;

  @media screen and (min-width: 52em) {
    width: 100%;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 100%;
    text-align: center;
    margin: 2rem auto;
  }
`;

export {
  LandingContainer,
  LandingDiv,
  TopMostLevel,
  Title,
  SubTitle,
  NextTop,
  DetailsItems,
  DetailItem,
  DetailHeader,
  AvatarCont,
  HowItWorks,
  HowItem,
  HowLeft,
  HowRight,
  FAQArea,
  FAQDiv,
  LHFaq,
  RHFaq,
  FaqIcon,
  FaqText,
  BottomPart,
  TitlePart,
  BlueCard,
  MiddlePart,
  HowItemMobile,
};
