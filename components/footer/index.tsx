import Image from 'next/image';
import { FC } from 'react';
import { LogoArea } from '../navbar/navbar.styles';
import {
  Contact,
  ErrorTag,
  FooterBottom,
  FooterContainer,
  FooterDiv,
  FooterLinks,
  FooterPara,
  FooterTop,
  FormArea,
  FormSide,
  FullInput,
} from './footer.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import logo from '../../public/assets/logo.svg';
import { P, Span } from '../typography';
import { Inputs } from '../interfaces';
import { AnyRow } from '../shared';

const Footer: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // dispatch(loginUser(data));
    console.log(data);
  };

  return (
    <FooterContainer>
      <FooterDiv>
        <FooterTop>
          <LogoArea>
            <Image src={logo} alt='logo' />
          </LogoArea>

          <FormSide>
            <FooterLinks>
              <Span footer>Company</Span>
              <P footer>Home</P>
              <P footer>About Us</P>
              <P footer>Contact Us</P>
            </FooterLinks>
            <Contact>
              <Span footer>Get In Touch</Span>
              <P footerForm>Question or Feedback? We would love to hear from you</P>
              <FormArea onSubmit={handleSubmit(onSubmit)}>
                <AnyRow>
                  <FullInput
                    placeholder='Input Email'
                    type='email'
                    {...register('email', { required: true })}
                  />
                  {errors.email && <ErrorTag>{errors.email.message}</ErrorTag>}
                </AnyRow>
              </FormArea>
            </Contact>
          </FormSide>
        </FooterTop>

        <FooterBottom>
          <FooterPara>
            <P footerBottom>2021 KIMS Investments </P>
            <P footerBottom>Copyright and All Rights Reserved</P>
          </FooterPara>
          <P footerBottom>Terms and Conditions</P>
        </FooterBottom>
      </FooterDiv>
    </FooterContainer>
  );
};

export default Footer;
