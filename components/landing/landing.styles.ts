import styled, { StyledProps } from 'styled-components';

interface LandingProps {
  aboutUs?: boolean;
  landing?: boolean;
  next?: boolean;
  aboutUS?: boolean;
  contactUS?: boolean;
  team?: boolean;
  teamB?: boolean;
  popover?: boolean;
}

const LandingContainer = styled.div`
  width: 100%;
  padding-top: 6rem;
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

const TopMostLevel = styled.div<LandingProps>`
  width: 100%;

  padding: 6.5rem 1rem 7.5rem 1rem;
  padding: ${({ aboutUS }) => (aboutUS ? '0' : '')};
  display: flex;
  flex-direction: column;
  margin-top: -1rem;
  background-color: #fafafa;

  background-color: ${({ contactUS }) => (contactUS ? 'transparent' : '')};

  @media screen and (min-width: 52em) {
    padding: 6.5rem 4rem 7.5rem 4rem;
    padding: ${({ aboutUS }) => (aboutUS ? '0' : '')};
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    padding: 6.5rem 2rem 7.5rem 2rem;
    padding: ${({ aboutUS }) => (aboutUS ? '0' : '')};
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    padding: 6.5rem 2rem 7.5rem 2rem;
    padding: ${({ aboutUS }) => (aboutUS ? '0' : '')};
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftSide = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    width: 45%;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 40%;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 40%;
  }
`;

const RightSide = styled.div`
  width: 100%;

  margin-top: 3rem;

  @media screen and (min-width: 52em) {
    width: 40%;
    margin-top: 0;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 40%;
    margin-top: -2rem;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    width: 40%;
    margin-top: -2rem;
  }
`;

const Title = styled.div<LandingProps>`
  width: 100%;

  @media (min-width: 52em) {
    width: 100%;
    display: ${({ aboutUs }) => (aboutUs ? 'flex' : '')};
    flex-direction: ${({ aboutUs }) => (aboutUs ? 'column' : '')};
    width: ${({ aboutUs }) => (aboutUs ? '100%' : '')};
    text-align: ${({ aboutUs }) => (aboutUs ? 'center' : '')};
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 100%;
    margin: 0 auto;
  }
`;

const SubTitle = styled.div`
  width: 100%;
  margin: -1rem auto 0 auto;
  text-align: center;

  @media screen and (min-width: 52em) {
    width: 80%;
    margin: -1rem 0 0 0;
    text-align: left;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 80%;
    margin: -1rem auto 0 auto;
    text-align: center;
  }
`;

const Logos = styled.div`
  width: 75%;
  margin: 3rem auto 5rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 52em) {
    flex-direction: row;
  }
`;

const LeftLogos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 52em) {
    width: 50%;
    padding-right: 5rem;
  }
`;

const RightLogos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (min-width: 52em) {
    width: 50%;
    padding-left: 5rem;
    margin-top: -0.5rem;
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
  background-color: #333333;
  background-color: ${({ landing }) => (landing ? '#333333' : '')};
  background-color: ${({ aboutUs }) => (aboutUs ? 'transparent' : '')};
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
  margin-top: 0.1rem;
  border-radius: 16px;

  @media screen and (min-width: 52em) {
    display: none;
  }
`;

const HowLeft = styled.div`
  width: 100%;
  /* border-radius: 16px; */
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
  background: #333333;
  background: ${({ aboutUs, team, teamB }) => (aboutUs || team || teamB ? 'none' : '')};
  background: ${({ next }) => (next ? '#9D2104' : '')};
  padding: 2rem 2rem 5rem 2rem;
  padding: ${({ aboutUs }) => (aboutUs ? '1rem .2rem 1rem .2rem' : '')};
  border-radius: 16px;

  /* border-radius: 16px; */

  @media screen and (min-width: 52em) {
    width: 50%;
    padding: 9rem 2rem 5rem 2rem;
    padding: ${({ aboutUs }) => (aboutUs ? '4rem 2rem 5rem 2rem' : '')};
    padding: ${({ team }) => (team ? '2rem 2rem 5rem 6rem' : '')};
    padding: ${({ teamB }) => (teamB ? '2rem 6rem 5rem 0' : '')};
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 85%;
    width: ${({ next }) => (next ? '85%' : '')};
    margin: 0 auto;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    margin: 0 auto 0 3rem;
    width: 75%;
    width: ${({ next }) => (next ? '85%' : '')};
  }
`;

const OurPartnersArea = styled.div`
  width: 100%;
  background: #f2f2f2;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Partners = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 6rem 0 1rem 0;
`;

const PartnerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.1rem;
  margin: 4rem 0 0 0;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    padding: 0 6rem;
  }
`;

const Partner = styled.div<LandingProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: #ffffff;
  border-radius: 8px;
  margin-top: ${({ next }) => (next ? '4rem' : '')};

  @media screen and (min-width: 52em) {
    width: 45%;
    margin-top: ${({ next }) => (next ? '0' : '')};
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
  margin: 30rem 0 0 0;
  width: 100%;
  background-color: #194a96;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    padding: 2rem;
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

const BlueCard = styled.div<LandingProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  top: -20rem;
  top: ${({ popover }) => (popover ? '1rem' : '')};
  /* margin: -35rem auto 2rem auto; */
  background-color: #ffffff;
  padding: 1rem;

  border: 1px solid #e0e0e0;
  box-shadow: -3px 4px 8px 1px rgba(83, 110, 152, 0.18);
  border-radius: 8px;

  @media screen and (min-width: 52em) {
    flex-direction: row;
    justify-content: ${({ popover }) => (popover ? 'space-between' : '')};
    width: 90%;
    width: ${({ popover }) => (popover ? '100%' : '')};
    padding: 5rem 2rem;
    margin: 2rem auto 2rem auto;
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    width: 90%;
    width: ${({ popover }) => (popover ? '100%' : '')};
    padding: 5rem 2rem;
    margin: 2rem auto 2rem auto;
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    padding: 5rem 2rem;
  }
`;

const LeftText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 52em) {
    width: 50%;
  }
`;

const RightForm = styled.div`
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 50%;
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
  Logos,
  DetailItem,
  DetailHeader,
  AvatarCont,
  HowItWorks,
  HowItem,
  HowLeft,
  HowRight,
  Partners,
  PartnerRow,
  Partner,
  FAQArea,
  FAQDiv,
  LHFaq,
  RHFaq,
  FaqIcon,
  LeftText,
  RightForm,
  FaqText,
  BottomPart,
  TitlePart,
  OurPartnersArea,
  BlueCard,
  MiddlePart,
  HowItemMobile,
  LeftSide,
  LeftLogos,
  RightLogos,
  RightSide,
};
