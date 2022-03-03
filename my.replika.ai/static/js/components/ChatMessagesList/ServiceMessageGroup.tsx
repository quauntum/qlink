import * as React from 'react';
import styled from 'styled-components/macro';
import ServiceMessage from './ServiceMessage';
import { Message } from '../../types/models';

type Props = {
  className?: string;
  messages: Message[];
};

const ServiceMessageGroupRoot = styled.div``;

const ServiceMessageGroup = ({ messages, className }: Props) => (
  <ServiceMessageGroupRoot className={className}>
    {messages.map(m => (
      <ServiceMessage key={m.id}>{m.content.text}</ServiceMessage>
    ))}
  </ServiceMessageGroupRoot>
);

export default ServiceMessageGroup;
