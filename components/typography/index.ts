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
  touch?: boolean;
  how?: boolean;
  leftT?: boolean;
  leftTP?: boolean;
  line?: boolean;
  kim?: boolean;
  aboutUS?: boolean;
  location?: boolean;
  address?: boolean;
  chair?: boolean;
  design?: boolean;
  ourTeam?: boolean;
  crowd?: boolean;
  crowdT?: boolean;
}

const H1 = styled.h1<StyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-weight: ${({ bottom }) => (bottom ? '800' : '')};
  font-size: 18px;
  font-size: ${({ howItWorks }) => (howItWorks ? '18px' : '')};
  font-size: ${({ bottom }) => (bottom ? '18px' : '')};
  font-size: ${({ leftT }) => (leftT ? '24px' : '')};
  font-size: ${({ ourTeam }) => (ourTeam ? '24px' : '')};
  line-height: 120%;
  text-align: center;
  text-align: ${({ leftT }) => (leftT ? 'left' : '')};
  /* or 54px */

  /* 464646 */
  color: #464646;

  color: ${({ blur }) => (blur ? '#FFFFFF' : '')};
  color: ${({ aboutUS }) => (aboutUS ? '#F2F2F2' : '')};
  text-align: ${({ blur }) => (blur ? 'center' : '')};

  @media screen and (min-width: 52em) {
    font-size: 45px;
    text-align: left;
    text-align: ${({ howItWorks, aboutUs, ourTeam }) =>
      howItWorks || aboutUs || ourTeam ? 'center' : ''};
    font-size: ${({ howItWorks, blur }) => (howItWorks || blur ? '36px' : '')};
    font-size: ${({ ourTeam }) => (ourTeam ? '42px' : '')};
    color: ${({ blur }) => (blur ? '#FFFFFF' : '')};
    text-align: ${({ blur, bottom }) => (blur || bottom ? 'center' : '')};
    font-size: ${({ bottom }) => (bottom ? '54px' : '')};
    font-size: ${({ leftT }) => (leftT ? '48px' : '')};
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
  color: ${({ how }) => (how ? '#464646' : '')};

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
  font-weight: ${({ accord, location, chair }) => (accord || location || chair ? '600' : '')};
  font-weight: ${({ details, howItWorks, howRight, footer, blur, aboutUs, passion, passionB }) =>
    details || howItWorks || howRight || footer || blur || aboutUs || passion || passionB
      ? '700'
      : ''};
  font-size: 14px;
  font-size: ${({ details, contact }) => (details || contact ? '12px' : '')};
  font-size: ${({ howItWorks, blur, chair }) => (howItWorks || blur || chair ? '18px' : '')};
  font-size: ${({ howRight, design, ourTeam }) => (howRight || design || ourTeam ? '14px' : '')};
  font-size: ${({ footer }) => (footer ? '20px' : '')};
  font-size: ${({ aboutUs, location }) => (aboutUs || location ? '18px' : '')};
  font-size: ${({ passion, passionB, address }) => (passion || passionB || address ? '14px' : '')};
  line-height: ${({ address }) => (address ? '160%' : '')};
  color: #464646;
  color: ${({ howRight }) => (howRight ? '#f2f2f2' : '')};
  color: ${({ design }) => (design ? '#EA6B36' : '')};
  color: ${({ active }) => (active ? '#ea6b36' : '')};
  color: ${({ details }) => (details ? '#4F4F4F' : '')};
  color: ${({ howItWorks, aboutUs, touch }) => (howItWorks || aboutUs || touch ? '#194A96' : '')};
  border-bottom: ${({ active, sidebar }) => (active && !sidebar ? '2px solid #ea6b36' : '')};
  padding: 0.5rem 0;
  padding: ${({ howRight, accord, footer, design, chair }) =>
    howRight || accord || footer || design || chair ? '0' : ''};
  padding: ${({ touch }) => (touch ? '15px 1rem 0 1rem' : '')};
  width: ${({ touch }) => (touch ? '136px' : '')};
  margin-top: 0.6rem;
  margin: ${({ chair }) => (chair ? '0' : '')};
  height: 3rem;
  cursor: ${({ sidebar, touch }) => (sidebar || touch ? 'pointer' : '')};
  color: ${({ passionB, blur }) => (passionB || blur ? '#194A96' : '')};
  background-color: ${({ touch }) => (touch ? 'rgba(25, 74, 150, 0.12)' : '')};

  text-align: ${({ contact, touch }) => (contact || touch ? 'center' : '')};

  @media screen and (min-width: 52em) {
    font-size: 18px;
    font-size: ${({ details }) => (details ? '14px' : '')};
    padding: 1rem 0.5rem;
    font-size: ${({ howItWorks, blur }) => (howItWorks || blur ? '36px' : '')};
    font-size: ${({ passion, passionB }) => (passion || passionB ? '22px' : '')};
    font-size: ${({ address, design }) => (address || design ? '20px' : '')};
    font-size: ${({ aboutUs }) => (aboutUs ? '45px' : '')};
    font-size: ${({ howRight, contact, location, chair, ourTeam }) =>
      howRight || contact || location || chair || ourTeam ? '24px' : ''};
    font-weight: ${({ aboutUs, passion, passionB }) =>
      aboutUs || passion || passionB ? '700' : ''};
    color: ${({ aboutUs, passionB, blur }) => (aboutUs || passionB || blur ? '#194A96' : '')};
    padding: ${({ howRight, accord, footer, passion, passionB, chair, design }) =>
      howRight || accord || footer || passion || passionB || chair || design ? '0' : ''};
    padding: ${({ touch }) => (touch ? '13px 1rem' : '')};
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
  font-weight: ${({ leftT, crowd }) => (leftT || crowd ? '600' : '')};
  font-weight: ${({ blur }) => (blur ? '400' : '')};
  font-size: 12px;
  font-size: ${({ details, footerForm, footerBottom }) =>
    details || footerForm || footerBottom ? '12px' : ''};
  font-size: ${({ howRight, platform, footer }) => (howRight || platform || footer ? '12px' : '')};
  font-size: ${({ accord, contactForm, leftT, leftTP }) =>
    accord || contactForm || leftT || leftTP ? '14px' : ''};
  font-size: ${({ crowd }) => (crowd ? '18px' : '')};
  font-size: ${({ crowdT }) => (crowdT ? '16px' : '')};
  line-height: 150%;
  line-height: ${({ footer }) => (footer ? '160%' : '')};
  width: ${({ footerForm }) => (footerForm ? '80%' : '')};

  margin: ${({ number }) => (number ? '.5rem' : '')};
  margin: ${({ contactForm }) => (contactForm ? '.5rem 0' : '')};
  margin-top: ${({ howRight }) => (howRight ? '-1rem' : '')};
  margin-top: ${({ platform }) => (platform ? '1rem' : '')};
  text-decoration: ${({ footer, line }) => (footer && line ? 'underline' : '')};
  /* or 30px */

  /* 464646 */
  color: #f2f2f2;
  color: ${({ accord, footer, leftTP, kim }) =>
    accord || footer || leftTP || kim ? '#464646' : ''};
  color: ${({ leftT }) => (leftT ? '#EA6B36' : '')};
  color: ${({ crowd, crowdT }) => (crowd || crowdT ? '#333333' : '')};
  color: ${({ contactForm }) => (contactForm ? '#344054' : '')};
  color: ${({ details, footerBottom, passion }) =>
    details || footerBottom || passion ? '#4F4F4F' : ''};
  color: ${({ platform, blur, number }) => (platform || blur || number ? '#ffffff' : '')};
  text-align: ${({ number }) => (number ? 'center' : '')};
  text-align: ${({ contactForm }) => (contactForm ? 'left' : '')};
  width: ${({ leftTP }) => (leftTP ? '87%' : '')};

  @media screen and (min-width: 52em) {
    margin-top: ${({ howRight }) => (howRight ? '0' : '')};
    margin-top: ${({ platform }) => (platform ? '-1rem' : '')};
    font-size: 20px;
    text-align: left;

    font-size: ${({ details, footerForm, footerBottom }) =>
      details || footerForm || footerBottom ? '14px' : ''};
    font-size: ${({ howRight, platform, footer }) =>
      howRight || platform || footer ? '17px' : ''};
    font-size: ${({ accord, passion, leftT, leftTP }) =>
      accord || passion || leftT || leftTP ? '16px' : ''};
    font-size: ${({ blur }) => (blur ? '20px' : '')};
    font-size: ${({ number, crowd }) => (number || crowd ? '24px' : '')};
    font-size: ${({ crowd }) => (crowd ? '28px' : '')};
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
