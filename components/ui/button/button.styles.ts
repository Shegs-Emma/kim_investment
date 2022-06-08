import styled from 'styled-components';

interface StyleProps {
  topArea?: boolean;
}

const ButtonContainer = styled.button<StyleProps>`
  outline: none;
  cursor: pointer;
  padding: 0.5625rem 0.9375rem;
  width: 100%;
  width: ${({ topArea }) => (topArea ? '13.25rem' : '')};
  height: 50px;
  font-family: 'Inter', sans-serif;
  border: 1px solid #ffffff;
  margin-top: 2.5rem;
  color: #ffffff;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;

  background: #ea622b;
  background: ${({ topArea }) => (topArea ? '#194A96' : '')};
  border-radius: 0.125rem;
  border-radius: ${({ topArea }) => (topArea ? '8px' : '')};
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
`;

export { ButtonContainer };
