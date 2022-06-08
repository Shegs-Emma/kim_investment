import styled from 'styled-components';

interface StyleProps {
  active?: boolean;
}

const H1 = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 120%;
  /* or 54px */

  /* 464646 */
  color: #464646;
`;

const Span = styled.span<StyleProps>`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-weight: ${({ active }) => (active ? '500' : '')};
  font-size: 18px;
  color: #464646;
  color: ${({ active }) => (active ? '#ea6b36' : '')};
  border-bottom: ${({ active }) => (active ? '2px solid #ea6b36' : '')};
  padding: 1rem 0.5rem;
  margin-top: 0.6rem;
  height: 3rem;
`;

const P = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  /* or 30px */

  /* 464646 */
  color: #464646;
`;

export { Span, H1, P };
