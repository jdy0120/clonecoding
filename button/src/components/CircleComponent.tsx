import React from 'react';
import styled, { css } from 'styled-components';

interface Props {
  color: string;
  huge?: string;
}

const Circle  = styled.div<Props>`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'};
  border-radius: 50%;
  ${props => 
    props.huge === 'huge'?
    css`
      width: 10rem;
      height: 10rem;
    `
    :
    css`
      width: 5rem;
      height: 5rem;
    `
  }
`;

const CircleComponent = (props:Props) => {

  return (
    <Circle color={props.color} huge={props.huge} />
  );
}

export default  CircleComponent;