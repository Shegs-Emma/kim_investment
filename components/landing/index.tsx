import Image from 'next/image';
import { FC } from 'react';
import { H1, P, Span, H2 } from '../typography';
import Button from '../ui/button';
import {
  LandingContainer,
  LandingDiv,
  SubTitle,
  Title,
  TopMostLevel,
  HowItWorks,
  HowItem,
  HowLeft,
  HowRight,
  FAQArea,
  FAQDiv,
  LHFaq,
  FaqText,
  RHFaq,
  BottomPart,
  BlueCard,
  LeftSide,
  RightSide,
  Logos,
  LeftText,
  RightForm,
  LeftLogos,
  RightLogos,
} from './landing.styles';
import investment from '../../public/assets/investment.svg';
import market from '../../public/assets/market.svg';
import faqImg from '../../public/assets/faqImg.svg';
import landingGrid from '../../public/assets/landing_grid.svg';
import logos1 from '../../public/assets/logos1.svg';
import logos2 from '../../public/assets/logos2.svg';
import logos3 from '../../public/assets/logos3.svg';
import logos4 from '../../public/assets/logos4.svg';
import logos5 from '../../public/assets/logos5.svg';
import { AnyRow } from '../shared';
import { AccordionSection } from './accordion/accordion.styles';
import Accordion from './accordion';
import landingInfo from './landingInfo';
import { FormArea, FullInput, FullTextArea } from '../footer/footer.styles';
import { useForm } from 'react-hook-form';
import { Contact } from '../interfaces';
import { useForm as formSpreeUseForm, ValidationError } from '@formspree/react';
import { toast } from 'react-hot-toast';

const Landing: FC = () => {
  const [state, handleSubmit] = formSpreeUseForm('meqdyglp');
  const { register } = useForm<Contact>();

  if (state.succeeded) {
    toast.success('Thanks for the message!');
  }

  return (
    <LandingContainer>
      <LandingDiv>
        <TopMostLevel>
          <LeftSide>
            <Title>
              <H1>We are a burgeoning african financial holding company. </H1>
            </Title>
            <SubTitle>
              <P kim>Kim Africa has developed overtime to being low-touch, high-impact investors</P>
            </SubTitle>
            <Button topArea>Let’s do business</Button>
          </LeftSide>
          <RightSide>
            <Image src={landingGrid} alt='landingGrid' />
          </RightSide>
        </TopMostLevel>

        <Logos>
          <LeftLogos>
            <Image src={logos1} alt='logos1' />
            <Image src={logos2} alt='logos2' />
          </LeftLogos>
          <RightLogos>
            <Image src={logos3} alt='logos3' />
            <Image src={logos4} alt='logos4' />
            <Image src={logos5} alt='logos5' />
          </RightLogos>
        </Logos>

        {/* <NextTop>
          <DetailsItems>
            <DetailItem>
              <DetailHeader>
                <AvatarCont>
                  <Image src={lookman} alt='man' />
                </AvatarCont>
                <Span details>Customercentric</Span>
                <P details>
                  With our customer first way of doing business, we ensure that a clients needs and
                  benefit are foremost on our mind as an organization. we put our clients needs
                  first at all times. Always getting feedback from our customers and keeping our
                  clients updated.
                </P>
              </DetailHeader>
            </DetailItem>

            <DetailItem>
              <DetailHeader>
                <AvatarCont>
                  <Image src={lookman} alt='lock' />
                </AvatarCont>
                <Span details>Security</Span>
                <P details>
                  Our platform recognizes the need for client privacy, confidentiality and security
                  because of the delicate nature of our profession and as such we as a company
                  prioritizes and ensures the privacy and security of all our clients and their
                  investment portfolios
                </P>
              </DetailHeader>
            </DetailItem>

            <DetailItem>
              <DetailHeader>
                <AvatarCont>
                  <Image src={suitcase} alt='suitcase' />
                </AvatarCont>
                <Span details>Valuable Expertise</Span>
                <P details>
                  As an organization, we leverage on our extensive and valuable experience and
                  expertise in the investment industry to ensure that we offer standard, and
                  impeccable investment services to our clients at all times.
                </P>
              </DetailHeader>
            </DetailItem>
          </DetailsItems>
        </NextTop> */}

        <HowItWorks>
          <AnyRow>
            <H1 howItWorks>Our Businesses</H1>
          </AnyRow>
          <HowItem landing>
            <HowLeft>
              <Image src={investment} alt='lookman' className='investment' />
            </HowLeft>
            <HowRight>
              <Span howRight>Kakawa Investment Management</Span>
              <P howRight>
                Kakawa Investment Management is an alternative African investment firm focused on
                backing entrepreneurs solving African problems within and outside the continent.
                While the foundations of Kakawa’s investments are in the fintech space, our
                investment worldview is sector agnostic and goes to where opportunity for rapid
                scaling exists.
              </P>
            </HowRight>
          </HowItem>

          <HowItem>
            <HowLeft>
              <Image src={market} alt='coin' className='landing' />
            </HowLeft>
            <HowRight next>
              <Span howRight>KIM Global Markets</Span>
              <P howRight>
                Kakawa Securities encompasses the trading activities we engage in the financial
                markets. This cuts across fixed income and equity assets. We pride ourselves in
                being low-touch, high impact investors where we provide insights and support as
                needed
              </P>
            </HowRight>
          </HowItem>
        </HowItWorks>

        <FAQArea id='faq'>
          <FaqText>
            <H2 how>How this Works</H2>
          </FaqText>
          <FAQDiv>
            <LHFaq>
              <Image src={faqImg} alt='faqImg' className='landing' />
            </LHFaq>
            <RHFaq>
              <AccordionSection
                style={{
                  position: 'relative',
                  zIndex: 90,
                }}
              >
                {landingInfo &&
                  landingInfo.faq.map((item, index) => (
                    <Accordion key={index} title={item.title} data={item.subTitle} />
                  ))}
              </AccordionSection>
            </RHFaq>
          </FAQDiv>
        </FAQArea>

        <BottomPart>
          <BlueCard>
            <LeftText>
              <P leftT>GET IN TOUCH</P>
              <H1 leftT>It starts with a conversation.</H1>
              <P leftTP>
                Send us a message and a member of our team will reach out to you with solutions and
                answers on how we can help and assist you.
              </P>
            </LeftText>
            <RightForm>
              {/* <FormArea onSubmit={handleSubmit(onSubmit)}>
                <AnyRow formShare>
                  <AnyRow formHalf>
                    <AnyRow>
                      <P contactForm>First name</P>
                    </AnyRow>
                    <FullInput
                      contactForm
                      placeholder=''
                      type='text'
                      {...register('firstName', { required: true })}
                    />
                    {errors.firstName && <ErrorTag>{errors.firstName.message}</ErrorTag>}
                  </AnyRow>
                  <AnyRow formHalf>
                    <AnyRow>
                      <P contactForm>Last name</P>
                    </AnyRow>
                    <FullInput
                      contactForm
                      placeholder=''
                      type='text'
                      {...register('lastName', { required: true })}
                    />
                    {errors.lastName && <ErrorTag>{errors.lastName.message}</ErrorTag>}
                  </AnyRow>
                </AnyRow>

                <AnyRow>
                  <AnyRow>
                    <P contactForm>Email</P>
                  </AnyRow>
                  <FullInput
                    contactForm
                    placeholder=''
                    type='email'
                    {...register('email', { required: true })}
                  />
                  {errors.email && <ErrorTag>{errors.email.message}</ErrorTag>}
                </AnyRow>

                <AnyRow>
                  <AnyRow>
                    <P contactForm>Phone Number</P>
                  </AnyRow>
                  <FullInput
                    contactForm
                    placeholder=''
                    type='text'
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && <ErrorTag>{errors.phone.message}</ErrorTag>}
                </AnyRow>

                <AnyRow>
                  <AnyRow>
                    <P contactForm>Message</P>
                  </AnyRow>
                  <FullTextArea {...register('message', { required: true })} />
                  {errors.message && <ErrorTag>{errors.message.message}</ErrorTag>}
                </AnyRow>

                <AnyRow contactForm>
                  <Button contactForm>Send Message</Button>
                </AnyRow>
              </FormArea> */}
              <FormArea onSubmit={handleSubmit}>
                <AnyRow formShare>
                  <AnyRow formHalf>
                    <AnyRow>
                      <P contactForm>First name</P>
                    </AnyRow>
                    <FullInput
                      id='firstName'
                      contactForm
                      placeholder=''
                      type='text'
                      {...register('firstName', { required: true })}
                    />
                    <ValidationError prefix='First Name' field='firstName' errors={state.errors} />
                    {/* {errors.firstName && <ErrorTag>{errors.firstName.message}</ErrorTag>} */}
                  </AnyRow>
                  <AnyRow formHalf>
                    <AnyRow>
                      <P contactForm>Last name</P>
                    </AnyRow>
                    <FullInput
                      id='lastName'
                      contactForm
                      placeholder=''
                      type='text'
                      {...register('lastName', { required: true })}
                    />
                    <ValidationError prefix='Last Name' field='lastName' errors={state.errors} />
                    {/* {errors.lastName && <ErrorTag>{errors.lastName.message}</ErrorTag>} */}
                  </AnyRow>
                </AnyRow>

                <AnyRow>
                  <AnyRow>
                    <P contactForm>Email</P>
                  </AnyRow>
                  <FullInput
                    id='email'
                    contactForm
                    placeholder=''
                    type='email'
                    {...register('email', { required: true })}
                  />
                  <ValidationError prefix='Email' field='email' errors={state.errors} />
                  {/* {errors.email && <ErrorTag>{errors.email.message}</ErrorTag>} */}
                </AnyRow>

                <AnyRow>
                  <AnyRow>
                    <P contactForm>Phone Number</P>
                  </AnyRow>
                  <FullInput
                    id='phone'
                    contactForm
                    placeholder=''
                    type='text'
                    {...register('phone', { required: true })}
                  />
                  <ValidationError prefix='Phone Number' field='phone' errors={state.errors} />
                  {/* {errors.phone && <ErrorTag>{errors.phone.message}</ErrorTag>} */}
                </AnyRow>

                <AnyRow>
                  <AnyRow>
                    <P contactForm>Message</P>
                  </AnyRow>
                  <FullTextArea id='message' {...register('message', { required: true })} />
                  {/* {errors.message && <ErrorTag>{errors.message.message}</ErrorTag>} */}
                  <ValidationError prefix='Message' field='message' errors={state.errors} />
                </AnyRow>

                <AnyRow contactForm>
                  <Button contactForm>Send Message</Button>
                </AnyRow>
              </FormArea>
            </RightForm>
          </BlueCard>
        </BottomPart>
      </LandingDiv>
    </LandingContainer>
  );
};

export default Landing;
