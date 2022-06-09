import styled from 'styled-components';

interface AccordianProps {
  collapsed?: boolean;
}

const AccordionSection = styled.div`
  min-height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 52em) {
    width: 100%;
  }

  @media screen and (min-width: 90em) {
    width: 85%;
  }
`;

const AccordionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 4.25rem;
  width: 100%;

  @media screen and (min-width: 90em) {
    height: 3.25rem;
  }
`;

const AccordionItem = styled.div<AccordianProps>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ collapsed }) => (collapsed ? '10rem' : '0')};
  transition: ${({ collapsed }) =>
    collapsed
      ? 'max-height 0.7s cubic-bezier(0, 1, 0.5, 1)'
      : 'max-height 0.7s cubic-bezier(0, 1, 0.5, 1)'};
`;

const AccordionChildren = styled.div`
  width: 100%;
`;

const DownIconWrapper = styled.div`
  margin-left: auto;
  width: 1.75rem;
  height: 1.75rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

const UpIconWrapper = styled.div`
  margin-left: auto;
  width: 1.75rem;
  height: 1.75rem;
  font-size: 1.5rem;
  color: #36d7ff;
  cursor: pointer;
`;

export {
  AccordionSection,
  AccordionTitle,
  AccordionItem,
  AccordionChildren,
  UpIconWrapper,
  DownIconWrapper,
};
