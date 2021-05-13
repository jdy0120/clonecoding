import React from 'react';
import Header from './components/header/Header';
import styled from 'styled-components';

const Container = styled.div`
`;

const Text = styled.p`
  animation-duration: 3s;
  animation-name: slidein;

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }
    to {
      margin-left: 0%;
      width: 100%;
    }
    75% {
      font-size: 300%;
      margin-left: 25%;
      width: 150%;
    }
  }
`;

function App() {
  return (
    <Container>
      <Header/>
      <Text>{'doyeon'}</Text>
    </Container>      
  );
}

export default App;
