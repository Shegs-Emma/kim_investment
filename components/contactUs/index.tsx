import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorTag, FormArea, FullInput, FullTextArea } from '../footer/footer.styles';
import { Contact } from '../interfaces';
import { LandingContainer, LandingDiv, TopMostLevel } from '../landing/landing.styles';
import { AnyRow } from '../shared';
import { H1, P, Span } from '../typography';
import Button from '../ui/button';
import { ContactF, ContactImageSide, ContactUsFormArea, ContactUsHeader } from './contact.styles';
import contactImg from '../../public/assets/contact.svg';
import Image from 'next/image';

const ContactUs: FC = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>();
  const onSubmit: SubmitHandler<Contact> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <LandingContainer>
      <LandingDiv>
        <TopMostLevel>
          <ContactUsHeader>
            <H1 aboutUs>Contact Us</H1>
            <Span contact>
              Got a special request, need more information on a service or you simply want to talk?
              Reach out to us and we'll respond as soon as possible.
            </Span>
          </ContactUsHeader>
          <ContactUsFormArea>
            <ContactImageSide>
              <Image src={contactImg} alt='logo' />
            </ContactImageSide>
            <ContactF>
              <FormArea onSubmit={handleSubmit(onSubmit)}>
                <AnyRow>
                  <AnyRow>
                    <P contactForm>Full Name:</P>
                  </AnyRow>
                  <FullInput
                    contactForm
                    placeholder=''
                    type='text'
                    {...register('name', { required: true })}
                  />
                  {errors.name && <ErrorTag>{errors.name.message}</ErrorTag>}
                </AnyRow>

                <AnyRow>
                  <AnyRow>
                    <P contactForm>Email Address</P>
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
                    <P contactForm>Message</P>
                  </AnyRow>
                  <FullTextArea {...register('message', { required: true })} />
                  {errors.message && <ErrorTag>{errors.message.message}</ErrorTag>}
                </AnyRow>

                <AnyRow contactForm>
                  <Button contactForm>Send Message</Button>
                </AnyRow>
              </FormArea>
            </ContactF>
          </ContactUsFormArea>
        </TopMostLevel>
      </LandingDiv>
    </LandingContainer>
  );
};

export default ContactUs;
