import Image from 'next/image';
import { FC } from 'react';
import {
  BlueCard,
  BottomPart,
  FAQArea,
  HowItem,
  HowItemMobile,
  HowItWorks,
  HowLeft,
  HowRight,
  LandingContainer,
  LandingDiv,
  MiddlePart,
  Title,
  TitlePart,
  TopMostLevel,
} from '../landing/landing.styles';
import { H1, H2, P, Span } from '../typography';
import { BlurArea, BlurContent, ImageCont, Number, Numbers } from './aboutUs.styles';
import chart from '../../public/assets/chart.svg';
import sky from '../../public/assets/sky.svg';
import houses from '../../public/assets/houses.svg';
import coins from '../../public/assets/coins.svg';
import hands from '../../public/assets/hands.svg';
import { AnyRow } from '../shared';
import { BsDiamondFill } from 'react-icons/bs';
import Button from '../ui/button';
import { BiChevronRight } from 'react-icons/bi';

const AboutUs: FC = () => {
  return (
    <LandingContainer>
      <LandingDiv>
        <TopMostLevel>
          <Title aboutUs>
            <H1 aboutUs>
              We help you make the best investment decisions and build your{' '}
              <Span aboutUs>Wealth</Span>
            </H1>
            <ImageCont>
              <Image src={chart} alt='chart' />
            </ImageCont>
          </Title>
        </TopMostLevel>

        <HowItWorks>
          <AnyRow>
            <H1 howItWorks>
              We are <Span howItWorks>Passionately Committed</Span> to Advancing/Promoting
            </H1>
          </AnyRow>

          <HowItem aboutUs>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>Financial</Span> Well- Being
              </Span>
              <P passion>
                Foremost in our aims and objectives is securing the financial well-being of our
                clients and customers. <br /> We assist people with investing savings that in ways
                that will benefit them for the rest of their lives. We ask ourselves, How can we
                assist more individuals in investing for their future needs (both known and unknown)
                as it becomes increasingly difficult to save for goals such as childrens, education,
                retirement etc ?
              </P>
            </HowRight>
            <HowLeft>
              <Image src={sky} alt='sky' />
            </HowLeft>
          </HowItem>

          <HowItemMobile>
            <HowLeft>
              <Image src={sky} alt='sky' />
            </HowLeft>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>Financial</Span> Well- Being
              </Span>
              <P passion>
                Foremost in our aims and objectives is securing the financial well-being of our
                clients and customers. <br /> We assist people with investing savings that in ways
                that will benefit them for the rest of their lives. We ask ourselves, How can we
                assist more individuals in investing for their future needs (both known and unknown)
                as it becomes increasingly difficult to save for goals such as childrens, education,
                retirement etc ?
              </P>
            </HowRight>
          </HowItemMobile>

          <HowItem>
            <HowLeft>
              <Image src={houses} alt='houses' />
            </HowLeft>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>Affordable and Accessible</Span> Expertise
              </Span>
              <P passion>
                At Kakarwa Investments, we cater to the needs of everyone and we make ensure that
                our expert service is both accessible and affordable to our clients and customers.
                We offer consulting services for your Investing Needs and answer all questions
                reagarding investments. <br /> Majority of our customers value the ease of access,
                reliablility and transparent management that our company with the aid of technology
                provides for them.
              </P>
            </HowRight>
          </HowItem>

          <HowItem aboutUs>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>Growth</Span> and Innovation
              </Span>
              <P passion>
                We are passionate about finding better ways and better investment opportunities to
                serve our clients needs and improve our company’s success record. Since our
                establishment, innovation has been at the center of how we deliver top-notch
                performance and stay ahead of our clients’ needs and ensure optimal client
                satisfaction. <br /> We totally believe in intovation and expanding our knowledge
                base and as such; we have continually reinvented and improved our organization to
                ensure our impeccable standard.people achieve their goals.
              </P>
            </HowRight>
            <HowLeft>
              <Image src={hands} alt='hands' />
            </HowLeft>
          </HowItem>

          <HowItemMobile>
            <HowLeft>
              <Image src={sky} alt='sky' />
            </HowLeft>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>Growth</Span> and Innovation
              </Span>
              <P passion>
                We are passionate about finding better ways and better investment opportunities to
                serve our clients needs and improve our company’s success record. Since our
                establishment, innovation has been at the center of how we deliver top-notch
                performance and stay ahead of our clients’ needs and ensure optimal client
                satisfaction. <br /> We totally believe in intovation and expanding our knowledge
                base and as such; we have continually reinvented and improved our organization to
                ensure our impeccable standard.people achieve their goals.
              </P>
            </HowRight>
          </HowItemMobile>

          <HowItem>
            <HowLeft>
              <Image src={coins} alt='coins' />
            </HowLeft>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>One Platform </Span>for all your Investment needs
              </Span>
              <P passion>
                Here at Kakarwa; We help you cater to all your investment needs with years of
                investment management expertise, we have consistently distinguished ourselves
                through our superior research quality, asset management track record and
                value-adding services. <br /> We offer premium investment opportunities to a
                substantial and diversified client base that includes corporations, high-net worth
                individuals, and small savers.
              </P>
            </HowRight>
          </HowItem>
        </HowItWorks>

        <BlurArea>
          <BlurContent>
            <H1 blur>
              We are <Span blur>Revolutionizing</Span> the Investment Game
            </H1>
            <P blur>
              We believe that the way we invest greatly influences the world we want to live in,
              recognising the Great role and potential power of capital when used consciously. As an
              organization, we use money as a driving force towards a society that is humane,
              balanced and mutually beneficial for all. We have offered impactful investment
              solutions and services that bridge investors who want to make money work for positive
              change with innovative opportunities and sustainable businesses to help them achieve
              their investment goalsdoing just that.
            </P>
            <Numbers>
              <Number>
                <P number>2,000,000</P>
                <P number>Invested</P>
              </Number>

              <Number>
                <P number>2,000,000</P>
                <P number>Invested</P>
              </Number>

              <Number>
                <P number>2,000,000</P>
                <P number>Invested</P>
              </Number>
            </Numbers>
          </BlurContent>
        </BlurArea>

        <BottomPart>
          <BlueCard>
            <AnyRow left>
              <BsDiamondFill color='rgba(242, 242, 242, 0.7)' size={27} />
            </AnyRow>
            <MiddlePart>
              <H2 platform>One Platform for All your Investing Needs</H2>
              <P platform>Set up a meeting and start investing with KIMS Today</P>
              <Button platform>
                Set Appointment
                <BiChevronRight size={20} color='#464646' className='appoint' />
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

export default AboutUs;
