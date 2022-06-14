import React, { FC, useState } from 'react';
import {
  AccordionChildren,
  AccordionItem,
  AccordionTitle,
  DownIconWrapper,
} from './accordion.styles';
import { H1, P, Span } from '../../typography';
import { FiChevronDown } from 'react-icons/fi';

interface IProps {
  title: string;
  data: string;
}

const Accordion: FC<IProps> = ({ title, data }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <AccordionTitle>
        <Span accord>{title}</Span>
        <DownIconWrapper onClick={() => setOpen(!isOpen)}>
          <FiChevronDown color='#194A96' className='drop' />
        </DownIconWrapper>
      </AccordionTitle>
      <AccordionItem collapsed={isOpen === true}>
        <AccordionChildren>
          <P accord>{data}</P>
        </AccordionChildren>
      </AccordionItem>
    </>
  );
};

export default Accordion;
