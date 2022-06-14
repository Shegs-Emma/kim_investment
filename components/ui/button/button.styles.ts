import styled from 'styled-components';

interface StyleProps {
  topArea?: boolean;
  platform?: boolean;
  contactForm?: boolean;
}

const ButtonContainer = styled.button<StyleProps>`
  outline: none;
  cursor: pointer;
  padding: 0.5625rem 0.9375rem;
  width: 100%;
  width: ${({ topArea }) => (topArea ? '9.1875rem' : '')};
  width: ${({ platform }) => (platform ? '12.5rem' : '')};
  width: ${({ contactForm }) => (contactForm ? '100%' : '')};
  height: 50px;
  font-family: 'Inter', sans-serif;
  border: 1px solid #ffffff;
  margin: 2.5rem auto 0 auto;
  color: #ffffff;
  color: ${({ platform }) => (platform ? '#464646' : '')};

  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  font-size: ${({ platform }) => (platform ? '13px' : '')};
  line-height: 24px;
  text-align: center;

  background: #ea622b;
  background: ${({ topArea, contactForm }) => (topArea || contactForm ? '#194A96' : '')};
  background: ${({ platform }) => (platform ? '#ffffff' : '')};
  border-radius: 0.125rem;
  border-radius: ${({ topArea, platform }) => (topArea || platform ? '8px' : '')};
  &:hover,
  &:active {
    background-color: rgba(150, 20, 132, 1);
    box-shadow: 0px 3px 2px rgba(29, 29, 29, 0.1);
    color: #ffffff;
    outline: none;
  }

  &:disabled {
    background-color: red;
  }

  @media screen and (min-width: 52em) {
    width: ${({ topArea }) => (topArea ? '13.25rem' : '')};
    width: ${({ platform }) => (platform ? '15.625rem' : '')};
    width: ${({ contactForm }) => (contactForm ? '12.5rem' : '')};
    font-size: ${({ platform }) => (platform ? '17px' : '')};
    font-size: 14px;
    margin: 2.5rem 0 0 0;
  }
`;

export { ButtonContainer };
