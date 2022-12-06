import styled from 'styled-components';

interface StyledProps {
  left?: boolean;
  right?: boolean;
  contactForm?: boolean;
  formShare?: boolean;
  formHalf?: boolean;
  image?: boolean;
}

const AnyRow = styled.div<StyledProps>`
  width: 100%;
  width: ${({ formHalf }) => (formHalf ? '47%' : '')};
  text-align: center;
  text-align: ${({ left, contactForm, image }) => (left || contactForm || image ? 'left' : '')};
  text-align: ${({ right }) => (right ? 'right' : '')};
  display: ${({ formShare }) => (formShare ? 'flex' : '')};
  justify-content: ${({ formShare }) => (formShare ? 'space-between' : '')};
`;

export { AnyRow };
