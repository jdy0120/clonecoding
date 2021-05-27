import React from 'react'
import styled, { keyframes, css } from 'styled-components';


const Bounce = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #ff7979;
  animation: ${Bounce} 2s infinite;
`;

const BounceCircle = () => {
  return (
    <Circle />
  );
}

export default BounceCircle;