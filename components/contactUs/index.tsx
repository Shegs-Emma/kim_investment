import { FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormArea, FullInput, FullTextArea } from '../footer/footer.styles';
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
import { useForm as formSpreeUseForm, ValidationError } from '@formspree/react';
import { toast } from 'react-hot-toast';

const ContactUs: FC = () => {
  const [state, handleSubmit] = formSpreeUseForm('meqdyglp');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, reset } = useForm<Contact>();

  useEffect(() => {
    if (state.succeeded) {
      setIsSubmitted(true);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (isSubmitted) {
      setIsSubmitted(false);
      reset();
      toast.success('Message Successfully Sent!');
    }
  }, [isSubmitted]);

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
            <FormArea onSubmit={handleSubmit}>
              <AnyRow>
                <AnyRow>
                  <P contactForm>Full Name:</P>
                </AnyRow>
                <FullInput
                  id='fullName'
                  contactFormPage
                  placeholder=''
                  type='text'
                  {...register('fullName', { required: true })}
                />
                <ValidationError prefix='Full Name' field='fullName' errors={state.errors} />
              </AnyRow>

              <AnyRow>
                <AnyRow>
                  <P contactForm>Email Address</P>
                </AnyRow>
                <FullInput
                  id='email'
                  contactFormPage
                  placeholder=''
                  type='email'
                  {...register('email', { required: true })}
                />
                <ValidationError prefix='Email' field='email' errors={state.errors} />
              </AnyRow>

              <AnyRow>
                <AnyRow>
                  <P contactForm>Message</P>
                </AnyRow>
                <FullTextArea
                  id='message'
                  contactFormPage
                  {...register('message', { required: true })}
                />
                <ValidationError prefix='Message' field='message' errors={state.errors} />
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
