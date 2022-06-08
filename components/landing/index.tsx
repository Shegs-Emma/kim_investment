import { FC } from 'react';
import { H1, P } from '../typography';
import Button from '../ui/button';
import { LandingContainer, LandingDiv, SubTitle, Title, TopMostLevel } from './landing.styles';

const Landing: FC = () => {
  return (
    <LandingContainer>
      <LandingDiv>
        <TopMostLevel>
          <Title>
            <H1>
              Secure Your Assets with <br /> the Best Investment Managers
            </H1>
          </Title>
          <SubTitle>
            <P>
              Secure Your Future with the Best possible Investments Secure Your Future with the Best
              possible Investments
            </P>
          </SubTitle>
          <Button topArea>Talk to an Expert</Button>
        </TopMostLevel>
      </LandingDiv>
    </LandingContainer>
  );
};

export default Landing;
