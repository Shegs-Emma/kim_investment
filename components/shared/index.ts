import styled from 'styled-components';

interface StyledProps {
  left?: boolean;
  right?: boolean;
  contactForm?: boolean;
}

const AnyRow = styled.div<StyledProps>`
  width: 100%;
  text-align: center;
  text-align: ${({ left, contactForm }) => (left || contactForm ? 'left' : '')};
  text-align: ${({ right }) => (right ? 'right' : '')};
`;

export { AnyRow };
