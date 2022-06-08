import styled from 'styled-components';

const LandingContainer = styled.div`
  width: 100%;
  padding-top: 8rem;
`;

const LandingDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TopMostLevel = styled.div`
  padding: 6.5rem 4rem 7.5rem 4rem;
  display: flex;
  flex-direction: column;
  margin-top: -1rem;

  background-color: #fafafa;
`;

const Title = styled.div`
  width: 60%;
  /* margin-top: 4rem; */
`;

const SubTitle = styled.div`
  width: 60%;
  margin-top: -1rem;
`;

export { LandingContainer, LandingDiv, TopMostLevel, Title, SubTitle };
