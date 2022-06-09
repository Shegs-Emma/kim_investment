import styled from 'styled-components';

interface StyledProps {
  left?: boolean;
  right?: boolean;
}

const AnyRow = styled.div<StyledProps>`
  width: 100%;
  text-align: center;
  text-align: ${({ left }) => (left ? 'left' : '')};
  text-align: ${({ right }) => (right ? 'right' : '')};
`;

export { AnyRow };
