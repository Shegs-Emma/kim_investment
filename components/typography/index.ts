import styled from 'styled-components';

interface StyleProps {
  active?: boolean;
  details?: boolean;
  howItWorks?: boolean;
  howRight?: boolean;
  accord?: boolean;
  bottom?: boolean;
  platform?: boolean;
  footer?: boolean;
  footerForm?: boolean;
  footerBottom?: boolean;
  sidebar?: boolean;
  aboutUs?: boolean;
  passion?: boolean;
  passionB?: boolean;
  blur?: boolean;
  number?: boolean;
  contact?: boolean;
  contactForm?: boolean;
}

const H1 = styled.h1<StyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-weight: ${({ bottom }) => (bottom ? '800' : '')};
  font-size: 18px;
  font-size: ${({ howItWorks }) => (howItWorks ? '18px' : '')};
  font-size: ${({ bottom }) => (bottom ? '18px' : '')};
  line-height: 120%;
  text-align: center;
  /* or 54px */

  /* 464646 */
  color: #464646;

  color: ${({ blur }) => (blur ? '#FFFFFF' : '')};
  text-align: ${({ blur }) => (blur ? 'center' : '')};

  @media screen and (min-width: 52em) {
    font-size: 45px;
    text-align: left;
    text-align: ${({ howItWorks, aboutUs }) => (howItWorks || aboutUs ? 'center' : '')};
    font-size: ${({ howItWorks, blur }) => (howItWorks || blur ? '36px' : '')};
    color: ${({ blur }) => (blur ? '#FFFFFF' : '')};
    text-align: ${({ blur }) => (blur ? 'center' : '')};
    font-size: ${({ bottom }) => (bottom ? '54px' : '')};
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    font-size: ${({ bottom }) => (bottom ? '44px' : '')};
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    font-size: ${({ blur }) => (blur ? '30px' : '')};
  }
`;

const H2 = styled.h2<StyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  font-size: ${({ platform }) => (platform ? '18px' : '')};
  line-height: 140%;
  /* or 50px */
  letter-spacing: 0.01em;

  /* Main */
  color: #194a96;
  color: ${({ platform }) => (platform ? '#ffffff' : '')};

  @media screen and (min-width: 52em) {
    font-size: 36px;
    font-size: ${({ platform }) => (platform ? '30px' : '')};
  }
`;

const Span = styled.span<StyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-weight: ${({ active }) => (active ? '500' : '')};
  font-weight: ${({ accord }) => (accord ? '600' : '')};
  font-weight: ${({ details, howItWorks, howRight, footer, blur, aboutUs, passion, passionB }) =>
    details || howItWorks || howRight || footer || blur || aboutUs || passion || passionB
      ? '700'
      : ''};
  font-size: 14px;
  font-size: ${({ details, contact }) => (details || contact ? '12px' : '')};
  font-size: ${({ howItWorks, blur }) => (howItWorks || blur ? '18px' : '')};
  font-size: ${({ howRight }) => (howRight ? '14px' : '')};
  font-size: ${({ footer }) => (footer ? '20px' : '')};
  font-size: ${({ aboutUs }) => (aboutUs ? '18px' : '')};
  font-size: ${({ passion, passionB }) => (passion || passionB ? '14px' : '')};
  color: #464646;
  color: ${({ active }) => (active ? '#ea6b36' : '')};
  color: ${({ details }) => (details ? '#4F4F4F' : '')};
  color: ${({ howItWorks, aboutUs }) => (howItWorks || aboutUs ? '#194A96' : '')};
  border-bottom: ${({ active, sidebar }) => (active && !sidebar ? '2px solid #ea6b36' : '')};
  padding: 0.5rem 0;
  padding: ${({ howRight, accord, footer }) => (howRight || accord || footer ? '0' : '')};
  margin-top: 0.6rem;
  height: 3rem;
  cursor: ${({ sidebar }) => (sidebar ? 'pointer' : '')};
  color: ${({ passionB, blur }) => (passionB || blur ? '#194A96' : '')};

  text-align: ${({ contact }) => (contact ? 'center' : '')};

  @media screen and (min-width: 52em) {
    font-size: 18px;
    font-size: ${({ details }) => (details ? '14px' : '')};
    padding: 1rem 0.5rem;
    font-size: ${({ howItWorks, blur }) => (howItWorks || blur ? '36px' : '')};
    font-size: ${({ passion, passionB }) => (passion || passionB ? '22px' : '')};
    font-size: ${({ aboutUs }) => (aboutUs ? '45px' : '')};
    font-size: ${({ howRight, contact }) => (howRight || contact ? '24px' : '')};
    font-weight: ${({ aboutUs, passion, passionB }) =>
      aboutUs || passion || passionB ? '700' : ''};
    color: ${({ aboutUs, passionB, blur }) => (aboutUs || passionB || blur ? '#194A96' : '')};
    padding: ${({ howRight, accord, footer, passion, passionB }) =>
      howRight || accord || footer || passion || passionB ? '0' : ''};
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    font-size: ${({ details }) => (details ? '12px' : '')};
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    font-size: ${({ blur }) => (blur ? '30px' : '')};
  }
`;

const P = styled.p<StyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-weight: ${({ details, howRight, accord, passion, contactForm }) =>
    details || howRight || accord || passion || contactForm ? '300' : ''};
  font-weight: ${({ number }) => (number ? '700' : '')};
  font-weight: ${({ blur }) => (blur ? '400' : '')};
  font-size: 12px;
  font-size: ${({ details, footerForm, footerBottom }) =>
    details || footerForm || footerBottom ? '12px' : ''};
  font-size: ${({ howRight, platform, footer }) => (howRight || platform || footer ? '12px' : '')};
  font-size: ${({ accord, contactForm }) => (accord || contactForm ? '14px' : '')};
  line-height: 150%;
  line-height: ${({ footer }) => (footer ? '15.88px' : '')};
  width: ${({ footerForm }) => (footerForm ? '80%' : '')};

  margin: ${({ number }) => (number ? '.5rem' : '')};
  /* or 30px */

  /* 464646 */
  color: #464646;
  color: ${({ details, footerBottom }) => (details || footerBottom ? '#4F4F4F' : '')};
  color: ${({ platform, blur, number }) => (platform || blur || number ? '#ffffff' : '')};
  text-align: ${({ number }) => (number ? 'center' : '')};
  text-align: ${({ contactForm }) => (contactForm ? 'left' : '')};

  @media screen and (min-width: 52em) {
    font-size: 20px;
    text-align: left;

    font-size: ${({ details, footerForm, footerBottom }) =>
      details || footerForm || footerBottom ? '14px' : ''};
    font-size: ${({ howRight, platform, footer }) =>
      howRight || platform || footer ? '17px' : ''};
    font-size: ${({ accord, passion }) => (accord || passion ? '16px' : '')};
    font-size: ${({ blur }) => (blur ? '20px' : '')};
    font-size: ${({ number }) => (number ? '24px' : '')};
    width: ${({ footerForm }) => (footerForm ? '75%' : '')};
    text-align: ${({ platform, blur, number }) => (platform || blur || number ? 'center' : '')};
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    font-size: ${({ details, footerForm, footerBottom }) =>
      details || footerForm || footerBottom ? '12px' : ''};

    text-align: ${({ platform }) => (platform ? 'center' : '')};
  }

  @media (min-width: 48em) and (max-width: 51.938em) {
    font-size: ${({ blur }) => (blur ? '20px' : '')};
    font-size: ${({ number }) => (number ? '24px' : '')};
  }
`;

export { Span, H1, P, H2 };
