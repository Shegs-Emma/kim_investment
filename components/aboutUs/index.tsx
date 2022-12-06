import Image from 'next/image';
import { FC } from 'react';
import {
  HowItem,
  HowItemMobile,
  HowItWorks,
  HowLeft,
  HowRight,
  LandingContainer,
  LandingDiv,
  LeftLogos,
  Logos,
  RightLogos,
} from '../landing/landing.styles';
import { H1, P, Span } from '../typography';
import { AboutTopLevel, AbsoUsText, MyImage, MyImageMobile } from './aboutUs.styles';
import about1 from '../../public/assets/about1.svg';
import about2 from '../../public/assets/about2.svg';
import about3 from '../../public/assets/about3.svg';
import logos1 from '../../public/assets/logos1.svg';
import logos2 from '../../public/assets/logos2.svg';
import logos3 from '../../public/assets/logos3.svg';
import logos4 from '../../public/assets/logos4.svg';
import logos5 from '../../public/assets/logos5.svg';
import aboutusLanding from '../../public/assets/aboutusLanding.svg';
import mobileImg from '../../public/assets/mobileImg.svg';
import { AnyRow } from '../shared';

const AboutUs: FC = () => {
  return (
    <LandingContainer>
      <LandingDiv>
        <AboutTopLevel>
          <MyImage>
            <Image src={aboutusLanding} alt='chart' className='aboutUsImg' />
          </MyImage>
          <MyImageMobile>
            <Image src={mobileImg} alt='chart' className='mobileImg' />
          </MyImageMobile>
          <AbsoUsText>
            <Span active>About Us</Span>
            <H1 aboutUS>
              We assess prospective rewards, measure risks appropriately, and identify opportunities
              early.
            </H1>
          </AbsoUsText>
        </AboutTopLevel>

        <HowItWorks>
          <HowItem aboutUs>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>Who we are</Span>
              </Span>
              <P passion>
                We are a burgeoning African financial holding company. The companies operating under
                the Group are Kakawa Investment Management and KIM Global Markets:-We pride
                ourselves in being low-touch, high impact investors who provide insights and support
                as needed. We believe our screen for potential investee companies selects for
                partners who have drive, commitment and most importantly, integrity
              </P>
            </HowRight>
            <HowLeft>
              <Image src={about1} alt='sky' />
            </HowLeft>
          </HowItem>

          <HowItemMobile>
            <HowLeft>
              <Image src={about1} alt='sky' />
            </HowLeft>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>Who we are</Span>
              </Span>
              <P passion>
                We are a burgeoning African financial holding company. The companies operating under
                the Group are Kakawa Investment Management and KIM Global Markets:-We pride
                ourselves in being low-touch, high impact investors who provide insights and support
                as needed. We believe our screen for potential investee companies selects for
                partners who have drive, commitment and most importantly, integrity
              </P>
            </HowRight>
          </HowItemMobile>

          <HowItem aboutUs>
            <HowLeft>
              <Image src={about2} alt='houses' />
            </HowLeft>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>What we do</Span>
              </Span>
              <P passion>
                We are involved in backing entrepreneurs solving African problems within and outside
                the continent,. Although the fintech industry forms the basis of Kakawa's
                investments, our investing perspective is sector-neutral and looks to where
                opportunity for quick expansion exists. We also finance early-stage businesses
                outside the start-up space. For example,We are investors in The Good Beach, Lagos'
                premier beach club.
              </P>
            </HowRight>
          </HowItem>

          <HowItem aboutUs>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>How we do this</Span>
              </Span>
              <P passion>
                With a highly experienced team across various industry sectors, we possess a mental
                and operational flexibility in our approach. This enables us spot opportunity early,
                size risk appropriately and determine the potential reward very quickly. We believe
                our screen for potential investee companies selects for partners who have drive,
                commitment and most importantly, integrity.
              </P>
            </HowRight>
            <HowLeft>
              <Image src={about3} alt='hands' />
            </HowLeft>
          </HowItem>

          <HowItemMobile>
            <HowLeft>
              <Image src={about2} alt='sky' />
            </HowLeft>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>What we do</Span>
              </Span>
              <P passion>
                We are involved in backing entrepreneurs solving African problems within and outside
                the continent,. Although the fintech industry forms the basis of Kakawa's
                investments, our investing perspective is sector-neutral and looks to where
                opportunity for quick expansion exists. We also finance early-stage businesses
                outside the start-up space. For example,We are investors in The Good Beach, Lagos'
                premier beach club.
              </P>
            </HowRight>
          </HowItemMobile>

          <HowItemMobile>
            <HowLeft>
              <Image src={about3} alt='sky' />
            </HowLeft>
            <HowRight aboutUs>
              <Span passion>
                <Span passionB>How we do this</Span>
              </Span>
              <P passion>
                With a highly experienced team across various industry sectors, we possess a mental
                and operational flexibility in our approach. This enables us spot opportunity early,
                size risk appropriately and determine the potential reward very quickly. We believe
                our screen for potential investee companies selects for partners who have drive,
                commitment and most importantly, integrity.
              </P>
            </HowRight>
          </HowItemMobile>
        </HowItWorks>

        <AnyRow>
          <AnyRow>
            <H1 howItWorks>Our Partners</H1>
          </AnyRow>
          <Logos>
            <LeftLogos>
              <Image src={logos1} alt='logos1' />
              <Image src={logos2} alt='logos2' />
            </LeftLogos>
            <RightLogos>
              <Image src={logos3} alt='logos3' />
              <Image src={logos4} alt='logos4' />
              <Image src={logos5} alt='logos5' />
            </RightLogos>
          </Logos>
        </AnyRow>
      </LandingDiv>
    </LandingContainer>
  );
};

export default AboutUs;
