import Image from 'next/image';
import { FC } from 'react';
import { ContactUsHeader } from '../contactUs/contact.styles';
import {
  HowItem,
  HowItemMobile,
  HowItWorks,
  HowLeft,
  HowRight,
  LandingContainer,
  LandingDiv,
  OurPartnersArea,
  Partner,
  PartnerRow,
  Partners,
} from '../landing/landing.styles';
import { H1, P, Span } from '../typography';
import chairman from '../../public/assets/chairman.svg';
import advisor from '../../public/assets/advisor.svg';
import advisor2 from '../../public/assets/advisor2.svg';
import logos1 from '../../public/assets/logos1.svg';
import logos2 from '../../public/assets/logos2.svg';
import logos3 from '../../public/assets/logos3.svg';
import logos4 from '../../public/assets/logos4.svg';
import logos5 from '../../public/assets/logos5.svg';
import { BsLinkedin } from 'react-icons/bs';
import Link from 'next/link';
import { AnyRow } from '../shared';

const Team: FC = () => {
  return (
    <LandingContainer>
      <LandingDiv>
        <ContactUsHeader>
          <H1 ourTeam>Our Management Team</H1>
          <Span ourTeam>Meet the Board</Span>
        </ContactUsHeader>

        <HowItWorks>
          <HowItem aboutUs>
            <HowLeft>
              <Image src={chairman} alt='houses' />
            </HowLeft>
            <HowRight team>
              <Span chair>Laoye Jaiyeola</Span>
              <Span design>Chairman</Span>
              <Link
                href='https://www.linkedin.com/in/laoye-jaiyeola-fcib-fca-fiod-3263bb66/?originalSubdomain=ng'
                replace
              >
                <BsLinkedin color='#0A66C2' size={24} className='hamburger' />
              </Link>

              <P passion>
                Mr. Jaiyeola is the CEO of the Nigerian Economic Summit Group (NESG), a position he
                has held since 2015. Prior to that, he was the CEO of Kakawa Discount House where he
                led the business prior to its acquisition by First Bank of Nigeria Plc. He is a
                Member, Board of Trustees of the Financial Market Dealers Association of Nigeria.
                Laoye holds a Bsc in Economics from the University of Ife, a MSc in Banking and
                Finance from the University of Lagos and an MBA from the University of Bangor,
                Wales.
              </P>
            </HowRight>
          </HowItem>

          <HowItemMobile>
            <HowLeft>
              <Image src={chairman} alt='houses' />
            </HowLeft>
            <HowRight team>
              <Span chair>Laoye Jaiyeola</Span>
              <Span design>Chairman</Span>
              <Link
                href='https://www.linkedin.com/in/laoye-jaiyeola-fcib-fca-fiod-3263bb66/?originalSubdomain=ng'
                replace
              >
                <BsLinkedin color='#0A66C2' size={24} className='hamburger' />
              </Link>

              <P passion>
                Mr. Jaiyeola is the CEO of the Nigerian Economic Summit Group (NESG), a position he
                has held since 2015. Prior to that, he was the CEO of Kakawa Discount House where he
                led the business prior to its acquisition by First Bank of Nigeria Plc. He is a
                Member, Board of Trustees of the Financial Market Dealers Association of Nigeria.
                Laoye holds a Bsc in Economics from the University of Ife, a MSc in Banking and
                Finance from the University of Lagos and an MBA from the University of Bangor,
                Wales.
              </P>
            </HowRight>
          </HowItemMobile>

          <HowItem aboutUs>
            <HowRight teamB>
              <Span chair>Oluwapelumi Joseph</Span>
              <Span design>Board Advisor</Span>
              <Link href='https://www.linkedin.com/in/oluwapelumi-joseph/' replace>
                <BsLinkedin color='#0A66C2' size={24} className='hamburger' />
              </Link>

              <P passion>
                Pelumi is the Finance Director at DAI Nigeria, a global development company. Prior
                to that, he was the Hub Manufacturing Finance Controller at British American Tobacco
                Nigeria and Group Head, Investor Relations at AfricaPractice, where he provided
                advisory support to multinationals across the African continent. He holds a BSc in
                Economics from the University of Lagos, a Msc in Finance from Imperial College
                London and is a member of the Association of Chartered Certified Accountants (ACCA)
              </P>
            </HowRight>
            <HowLeft>
              <Image src={advisor} alt='sky' />
            </HowLeft>
          </HowItem>

          <HowItem aboutUs>
            <HowLeft>
              <Image src={advisor2} alt='hands' />
            </HowLeft>
            <HowRight team>
              <Span chair>Olalekan Dairo</Span>
              <Span design>Board Advisor</Span>
              <Link
                href='https://www.linkedin.com/in/lekan-dairo-328a7641/?originalSubdomain=ng'
                replace
              >
                <BsLinkedin color='#0A66C2' size={24} className='hamburger' />
              </Link>

              <P passion>
                Lekan is currently a Senior Associate at Banwo & Ighadalo. He is a seasoned legal
                practitioner with over a decade of experience advising clients on complex and
                landmark transactions. Prior to that, he was a Senior Associate at The New Practice
                after he had obtained in-house legal experience as Counsel at Viathan Engineering
                Limited. He holds a Bachelor of Laws (LLB) from the University of Lagos. He is a
                member of the Nigerian Bar Association (NBA) and the Chartered Institute of Taxation
                of Nigeria (CITN)
              </P>
            </HowRight>
          </HowItem>

          <HowItemMobile>
            <HowLeft>
              <Image src={advisor} alt='sky' />
            </HowLeft>
            <HowRight teamB>
              <Span chair>Oluwapelumi Joseph</Span>
              <Span design>Board Advisor</Span>
              <Link href='https://www.linkedin.com/in/oluwapelumi-joseph/' replace>
                <BsLinkedin color='#0A66C2' size={24} className='hamburger' />
              </Link>

              <P passion>
                Pelumi is the Finance Director at DAI Nigeria, a global development company. Prior
                to that, he was the Hub Manufacturing Finance Controller at British American Tobacco
                Nigeria and Group Head, Investor Relations at AfricaPractice, where he provided
                advisory support to multinationals across the African continent. He holds a BSc in
                Economics from the University of Lagos, a Msc in Finance from Imperial College
                London and is a member of the Association of Chartered Certified Accountants (ACCA)
              </P>
            </HowRight>
          </HowItemMobile>

          <HowItemMobile>
            <HowLeft>
              <Image src={advisor2} alt='hands' />
            </HowLeft>
            <HowRight team>
              <Span chair>Olalekan Dairo</Span>
              <Span design>Board Advisor</Span>
              <Link
                href='https://www.linkedin.com/in/lekan-dairo-328a7641/?originalSubdomain=ng'
                replace
              >
                <BsLinkedin color='#0A66C2' size={24} className='hamburger' />
              </Link>

              <P passion>
                Lekan is currently a Senior Associate at Banwo & Ighadalo. He is a seasoned legal
                practitioner with over a decade of experience advising clients on complex and
                landmark transactions. Prior to that, he was a Senior Associate at The New Practice
                after he had obtained in-house legal experience as Counsel at Viathan Engineering
                Limited. He holds a Bachelor of Laws (LLB) from the University of Lagos. He is a
                member of the Nigerian Bar Association (NBA) and the Chartered Institute of Taxation
                of Nigeria (CITN)
              </P>
            </HowRight>
          </HowItemMobile>
        </HowItWorks>

        <OurPartnersArea>
          <ContactUsHeader>
            <H1 ourTeam>Our Partners</H1>
            <Span ourTeam>
              Our organization develops and grows through strategic business relationships built on
              mutual trust and respect. We align with world-class organizations that share similar
              values.
            </Span>
          </ContactUsHeader>

          <Partners>
            <PartnerRow>
              <Partner>
                <AnyRow image>
                  <Image src={logos3} alt='logos2' className='team' />
                </AnyRow>
                <P crowd>CrowdForce</P>
                <P crowdT>
                  CrowdForce empowers businesses to drive mass adoption of digital financial
                  services for merchants of all sizes. This cascades into financial inclusion for
                  underserved communities.
                </P>
              </Partner>

              <Partner next>
                <AnyRow image>
                  <Image src={logos1} alt='logos2' className='team' />
                </AnyRow>
                <P crowd>Traction</P>
                <P crowdT>
                  Traction is solving the SME financing gap through its payment systems for African
                  businesses. It is building an ecosystem of tools which will become the operating
                  system for African SMEs.
                </P>
              </Partner>
            </PartnerRow>

            <PartnerRow>
              <Partner>
                <AnyRow image>
                  <Image src={logos5} alt='logos2' className='team' />
                </AnyRow>
                <P crowd>Paddy Cover </P>
                <P crowdT>
                  Paddy Cover is an insurance start-up solving the micro-insurance challenge across
                  Nigeria and West Africa.
                </P>
              </Partner>

              <Partner next>
                <AnyRow image>
                  <Image src={logos2} alt='logos2' className='team' />
                </AnyRow>
                <P crowd>Fair-eZone </P>
                <P crowdT>
                  Fair-eZone is a business simplifying financial inclusion for the African diaspora
                  in Europe through its MyPocket solution.
                </P>
              </Partner>
            </PartnerRow>

            <PartnerRow>
              <Partner>
                <AnyRow image>
                  <Image src={logos4} alt='logos2' className='team' />
                </AnyRow>
                <P crowd>Moni </P>
                <P crowdT>
                  Moni is a social finance business powered by social trust. It is utilizing its
                  community-based model to ensure repayments for mobile money agents have minimal
                  default rates.
                </P>
              </Partner>
            </PartnerRow>
          </Partners>
        </OurPartnersArea>
      </LandingDiv>
    </LandingContainer>
  );
};

export default Team;
