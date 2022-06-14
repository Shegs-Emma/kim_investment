import Image from 'next/image';
import { FC } from 'react';
import { H1, P, Span, H2 } from '../typography';
import Button from '../ui/button';
import {
  LandingContainer,
  LandingDiv,
  NextTop,
  SubTitle,
  Title,
  TopMostLevel,
  DetailsItems,
  DetailItem,
  AvatarCont,
  DetailHeader,
  HowItWorks,
  HowItem,
  HowLeft,
  HowRight,
  FAQArea,
  FAQDiv,
  LHFaq,
  FaqText,
  RHFaq,
  BottomPart,
  TitlePart,
  BlueCard,
  MiddlePart,
} from './landing.styles';
import man from '../../public/assets/man.svg';
import lock from '../../public/assets/lock.svg';
import suitcase from '../../public/assets/case.svg';
import lookman from '../../public/assets/lookman.svg';
import coin from '../../public/assets/coin.svg';
import candles from '../../public/assets/candles.svg';
import board from '../../public/assets/board.svg';
import faqImg from '../../public/assets/faqImg.svg';
import { AnyRow } from '../shared';
import { AccordionSection } from './accordion/accordion.styles';
import Accordion from './accordion';
import landingInfo from './landingInfo';
import { BsDiamondFill } from 'react-icons/bs';
import { BiChevronRight } from 'react-icons/bi';

const Landing: FC = () => {
  return (
    <LandingContainer>
      <LandingDiv>
        <TopMostLevel>
          <Title>
            <H1>Secure Your Assets with the Best Investment Managers</H1>
          </Title>
          <SubTitle>
            <P>
              Secure Your Future with the Best possible Investments Secure Your Future with the Best
              possible Investments
            </P>
          </SubTitle>
          <Button topArea>Talk to an Expert</Button>
        </TopMostLevel>

        <NextTop>
          <DetailsItems>
            <DetailItem>
              <DetailHeader>
                <AvatarCont>
                  <Image src={man} alt='man' />
                </AvatarCont>
                <Span details>Customercentric</Span>
                <P details>
                  With our customer first way of doing business, we ensure that a clients needs and
                  benefit are foremost on our mind as an organization. we put our clients needs
                  first at all times. Always getting feedback from our customers and keeping our
                  clients updated.
                </P>
              </DetailHeader>
            </DetailItem>

            <DetailItem>
              <DetailHeader>
                <AvatarCont>
                  <Image src={lock} alt='lock' />
                </AvatarCont>
                <Span details>Security</Span>
                <P details>
                  Our platform recognizes the need for client privacy, confidentiality and security
                  because of the delicate nature of our profession and as such we as a company
                  prioritizes and ensures the privacy and security of all our clients and their
                  investment portfolios
                </P>
              </DetailHeader>
            </DetailItem>

            <DetailItem>
              <DetailHeader>
                <AvatarCont>
                  <Image src={suitcase} alt='suitcase' />
                </AvatarCont>
                <Span details>Valuable Expertise</Span>
                <P details>
                  As an organization, we leverage on our extensive and valuable experience and
                  expertise in the investment industry to ensure that we offer standard, and
                  impeccable investment services to our clients at all times.
                </P>
              </DetailHeader>
            </DetailItem>
          </DetailsItems>
        </NextTop>

        <HowItWorks>
          <AnyRow>
            <H1 howItWorks>
              <Span howItWorks>How</Span> It Works
            </H1>
          </AnyRow>
          <HowItem landing>
            <HowLeft>
              <Image src={lookman} alt='lookman' className='landing' />
            </HowLeft>
            <HowRight>
              <Span howRight>Profile Generation</Span>
              <P howRight>
                With the aim of producing an accurate and appropriate profile, we Examine, assess,
                analyze, and determine your present financial level/standard, risk ability and
                tolerance, investment aims and projected time frame.
              </P>
            </HowRight>
          </HowItem>

          <HowItem>
            <HowLeft>
              <Image src={coin} alt='coin' className='landing' />
            </HowLeft>
            <HowRight>
              <Span howRight>Investment Map and Strategy</Span>
              <P howRight>
                With the first stage of profile generation, we leverage our expertise and use your
                developed profile, to create an investment map and strategy that includes spans
                multiple assets and investment sector diversification.
              </P>
            </HowRight>
          </HowItem>

          <HowItem>
            <HowLeft>
              <Image src={board} alt='board' className='landing' />
            </HowLeft>
            <HowRight>
              <Span howRight>Strategy Implementation</Span>
              <P howRight>
                After feedback sessions where the client is informed and updated; we proceed to the
                implementation stage where with the blessing of our client, we begin implementation.
              </P>
            </HowRight>
          </HowItem>

          <HowItem>
            <HowLeft>
              <Image src={candles} alt='candles' className='landing' />
            </HowLeft>
            <HowRight>
              <Span howRight>Profile Generation</Span>
              <P howRight>
                With the aim of producing an accurate and appropriate profile, we Examine, assess,
                analyze, and determine your present financial level/standard, risk ability and
                tolerance, investment aims and projected time frame.
              </P>
            </HowRight>
          </HowItem>
        </HowItWorks>

        <FAQArea id='faq'>
          <FaqText>
            <H2>Frequently asked Questions</H2>
          </FaqText>
          <FAQDiv>
            <LHFaq>
              <Image src={faqImg} alt='faqImg' className='landing' />
            </LHFaq>
            <RHFaq>
              <AccordionSection
                style={{
                  position: 'relative',
                  zIndex: 90,
                }}
              >
                {landingInfo &&
                  landingInfo.faq.map((item, index) => (
                    <Accordion key={index} title={item.title} data={item.subTitle} />
                  ))}
              </AccordionSection>
            </RHFaq>
          </FAQDiv>
        </FAQArea>

        <BottomPart>
          <TitlePart>
            <H1 bottom>Join the people who already trust us to build their wealth</H1>
          </TitlePart>
          <BlueCard>
            <AnyRow left>
              <BsDiamondFill color='rgba(242, 242, 242, 0.7)' size={27} />
            </AnyRow>
            <MiddlePart>
              <H2 platform>One Platform for All your Investing Needs</H2>
              <P platform>Set up a meeting and start investing with KIMS Today</P>
              <Button platform>
                Set Appointment
                <BiChevronRight size={20} color='#464646' className='appointL' />
                <BiChevronRight size={20} color='#464646' className='appoint' />
              </Button>
            </MiddlePart>
            <AnyRow right>
              <BsDiamondFill color='rgba(242, 242, 242, 0.7)' size={27} />
            </AnyRow>
          </BlueCard>
        </BottomPart>
      </LandingDiv>
    </LandingContainer>
  );
};

export default Landing;
