import Image from 'next/image';
import { FC } from 'react';
import { LogoArea } from '../navbar/navbar.styles';
import {
  Contact,
  FooterBottom,
  FooterContainer,
  FooterDiv,
  FooterLinks,
  FooterPara,
  FooterTop,
  FormSide,
} from './footer.styles';
import logo from '../../public/assets/logo.svg';
import { P, Span } from '../typography';

const Footer: FC = () => {
  return (
    <FooterContainer>
      <FooterDiv>
        <FooterTop>
          <LogoArea>
            <Image src={logo} alt='logo' />
          </LogoArea>

          <FormSide>
            <FooterLinks>
              <Span footer>Company</Span>
              <P footer>Home</P>
              <P footer>About Us</P>
              <P footer>Team</P>
              <P footer>Contact Us</P>
            </FooterLinks>
            <FooterLinks contact>
              <Span footer>Contact us</Span>
              <P footer>
                3A, 3rd Floor, Churchgate Tower 1, PC30, Churchgate Street, Victoria Island, Lagos,
                Nigeria
              </P>
            </FooterLinks>
            <Contact>
              <Span footer>Connect</Span>
              <P footer>Question or Feedback? We would love to hear from you</P>
              <P footer line>
                info@kimafrica.com
              </P>
            </Contact>
          </FormSide>
        </FooterTop>

        <FooterBottom>
          <FooterPara>
            <P footerBottom>2022 KIMS Investments </P>
            <P footerBottom>Copyright and All Rights Reserved</P>
          </FooterPara>
          <P footerBottom>Terms and Conditions</P>
        </FooterBottom>
      </FooterDiv>
    </FooterContainer>
  );
};

export default Footer;
