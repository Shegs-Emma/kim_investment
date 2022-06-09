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
}

const H1 = styled.h1<StyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-weight: ${({ bottom }) => (bottom ? '800' : '')};
  font-size: 18px;
  font-size: ${({ howItWorks }) => (howItWorks ? '16px' : '')};
  font-size: ${({ bottom }) => (bottom ? '18px' : '')};
  line-height: 120%;
  text-align: center;
  /* or 54px */

  /* 464646 */
  color: #464646;

  @media screen and (min-width: 52em) {
    font-size: 45px;
    text-align: center;
    font-size: ${({ howItWorks }) => (howItWorks ? '36px' : '')};
    font-size: ${({ bottom }) => (bottom ? '54px' : '')};
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    font-size: ${({ bottom }) => (bottom ? '44px' : '')};
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
  font-weight: ${({ details, howItWorks, howRight, footer }) =>
    details || howItWorks || howRight || footer ? '700' : ''};
  font-size: 14px;
  font-size: ${({ details }) => (details ? '12px' : '')};
  font-size: ${({ howItWorks }) => (howItWorks ? '16px' : '')};
  font-size: ${({ howRight }) => (howRight ? '14px' : '')};
  font-size: ${({ footer }) => (footer ? '20px' : '')};
  color: #464646;
  color: ${({ active }) => (active ? '#ea6b36' : '')};
  color: ${({ details }) => (details ? '#4F4F4F' : '')};
  color: ${({ howItWorks }) => (howItWorks ? '#194A96' : '')};
  border-bottom: ${({ active }) => (active ? '2px solid #ea6b36' : '')};
  padding: 0.5rem 0;
  padding: ${({ howRight, accord, footer }) => (howRight || accord || footer ? '0' : '')};
  margin-top: 0.6rem;
  height: 3rem;
  cursor: ${({ sidebar }) => (sidebar ? 'pointer' : '')};

  @media screen and (min-width: 52em) {
    font-size: 18px;
    font-size: ${({ details }) => (details ? '14px' : '')};
    padding: 1rem 0.5rem;
    font-size: ${({ howItWorks }) => (howItWorks ? '36px' : '')};
    font-size: ${({ howRight }) => (howRight ? '24px' : '')};
    padding: ${({ howRight, accord, footer }) => (howRight || accord || footer ? '0' : '')};
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    font-size: ${({ details }) => (details ? '12px' : '')};
  }
`;

const P = styled.p<StyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-weight: ${({ details, howRight, accord }) => (details || howRight || accord ? '300' : '')};
  font-size: 12px;
  font-size: ${({ details, footerForm, footerBottom }) =>
    details || footerForm || footerBottom ? '12px' : ''};
  font-size: ${({ howRight, platform, footer }) => (howRight || platform || footer ? '12px' : '')};
  font-size: ${({ accord }) => (accord ? '14px' : '')};
  line-height: 150%;
  line-height: ${({ footer }) => (footer ? '15.88px' : '')};
  width: ${({ footerForm }) => (footerForm ? '80%' : '')};
  /* or 30px */

  /* 464646 */
  color: #464646;
  color: ${({ details, footerBottom }) => (details || footerBottom ? '#4F4F4F' : '')};
  color: ${({ platform }) => (platform ? '#ffffff' : '')};

  @media screen and (min-width: 52em) {
    font-size: 20px;
    text-align: left;

    font-size: ${({ details, footerForm, footerBottom }) =>
      details || footerForm || footerBottom ? '14px' : ''};
    font-size: ${({ howRight, platform, footer }) =>
      howRight || platform || footer ? '17px' : ''};
    font-size: ${({ accord }) => (accord ? '16px' : '')};
    width: ${({ footerForm }) => (footerForm ? '75%' : '')};
    text-align: ${({ platform }) => (platform ? 'center' : '')};
  }

  @media (min-width: 52em) and (max-width: 64.313em) {
    font-size: ${({ details, footerForm, footerBottom }) =>
      details || footerForm || footerBottom ? '12px' : ''};

    text-align: ${({ platform }) => (platform ? 'center' : '')};
  }
`;

export { Span, H1, P, H2 };
