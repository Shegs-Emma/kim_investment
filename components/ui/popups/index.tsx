import { FC } from 'react';
import { togglePopUp } from '../../../store/slices/modalSlice';
import {
  BlueCardInner,
  InfoBox,
  InfoContainer,
  LeftBackDrop,
  PopUpContainer,
  RightBackDrop,
} from './popups.styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { FormArea, FullInput, FullTextArea } from '../../footer/footer.styles';
import { AnyRow } from '../../shared';
import Button from '../button';
import { useForm } from 'react-hook-form';
import { Contact } from '../../interfaces';
import { H1, P } from '../../typography';
import { GrClose } from 'react-icons/gr';
import { BlueCard, LeftText, RightForm } from '../../landing/landing.styles';
import { useForm as formSpreeUseForm, ValidationError } from '@formspree/react';
import { toast } from 'react-hot-toast';

const PopUp: FC = () => {
  const [state, handleSubmit] = formSpreeUseForm('meqdyglp');
  const dispatch = useDispatch<AppDispatch>();
  const { popUpOpen } = useSelector((state: RootState) => state.modal);
  const { register, reset } = useForm<Contact>();

  if (state.succeeded) {
    reset();
    toast.success('Thanks for the message!');
  }

  return (
    <PopUpContainer>
      <LeftBackDrop onClick={() => dispatch(togglePopUp(!popUpOpen))} />
      <InfoContainer>
        <BlueCard popover>
          <InfoBox>
            <GrClose className='close' onClick={() => dispatch(togglePopUp(!popUpOpen))} />
            <BlueCardInner>
              <LeftText>
                <P leftT>GET IN TOUCH</P>
                <H1 leftT>It starts with a conversation.</H1>
                <P leftTP>
                  Send us a message and a member of our team will reach out to you with solutions
                  and answers on how we can help and assist you.
                </P>
              </LeftText>
              <RightForm>
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
                      <ValidationError
                        prefix='First Name'
                        field='firstName'
                        errors={state.errors}
                      />
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
            </BlueCardInner>
          </InfoBox>
        </BlueCard>
      </InfoContainer>
      <RightBackDrop onClick={() => dispatch(togglePopUp(!popUpOpen))} />
    </PopUpContainer>
  );
};

export default PopUp;
