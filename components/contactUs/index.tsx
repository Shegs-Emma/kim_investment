import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorTag, FormArea, FullInput, FullTextArea } from '../footer/footer.styles';
import { Contact } from '../interfaces';
import { LandingContainer, LandingDiv, TopMostLevel } from '../landing/landing.styles';
import { AnyRow } from '../shared';
import { H1, P, Span } from '../typography';
import Button from '../ui/button';
import {
  ContactUsForm,
  ContactUsHeader,
  EmailArea,
  FormSideContact,
  ImageSide,
  LocationArea,
  LocationDetails,
  MessageArea,
  MessageHead,
  MiddleContact,
} from './contact.styles';
import messageImg from '../../public/assets/messageImg.svg';
import Image from 'next/image';
import { IoLocationSharp } from 'react-icons/io5';
import { AiFillMail } from 'react-icons/ai';

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
        <TopMostLevel contactUS>
          <ContactUsHeader>
            <H1 aboutUs>Contact Us</H1>
            <Span contact>
              Got a special request, need more information on a service or you simply want to talk?
              Reach out to us and we&apos;ll respond as soon as possible.
            </Span>
          </ContactUsHeader>
        </TopMostLevel>
        <MiddleContact>
          <LocationArea>
            <LocationDetails>
              <IoLocationSharp color='#194A96' size={30} />
              <Span location>Location</Span>
              <Span address>
                3A, 3rd Floor, Churchgate Tower 1, PC30, Churchgate Street, Victoria Island, Lagos,
                Nigeria
              </Span>
            </LocationDetails>
          </LocationArea>
          <EmailArea>
            <LocationDetails>
              <AiFillMail color='#194A96' size={30} />
              <Span location>Email Address</Span>
              <Span address>info@kimafrica.com</Span>
            </LocationDetails>
          </EmailArea>
        </MiddleContact>

        <MessageArea>
          <MessageHead>
            <H1 aboutUs>Leave a Message</H1>
            <Span contact>
              Have questions? drop us a message below, and we’ll get back to you shortly.
            </Span>
          </MessageHead>
        </MessageArea>

        <ContactUsForm>
          <ImageSide>
            <Image src={messageImg} alt='messageImg' />
          </ImageSide>
          <FormSideContact>
            <FormArea onSubmit={handleSubmit(onSubmit)}>
              <AnyRow>
                <AnyRow>
                  <P contactForm>Full Name:</P>
                </AnyRow>
                <FullInput
                  contactFormPage
                  placeholder=''
                  type='text'
                  {...register('fullName', { required: true })}
                />
                {errors.fullName && <ErrorTag>{errors.fullName.message}</ErrorTag>}
              </AnyRow>

              <AnyRow>
                <AnyRow>
                  <P contactForm>Email Address</P>
                </AnyRow>
                <FullInput
                  contactFormPage
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
                <FullTextArea contactFormPage {...register('message', { required: true })} />
                {errors.message && <ErrorTag>{errors.message.message}</ErrorTag>}
              </AnyRow>

              <AnyRow contactForm>
                <Button contactForm>Send Message</Button>
              </AnyRow>
            </FormArea>
          </FormSideContact>
        </ContactUsForm>
      </LandingDiv>
    </LandingContainer>
  );
};

export default ContactUs;
