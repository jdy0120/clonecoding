import React from 'react';
import TopHeader from './TopHeader';
import BottomHeader from './BottomHeader';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0px;
  padding: 0px;
`;

const Horizon = styled.hr`
  margin:0;
  padding:0;
`;

const Header = () => {
  return (
    <Container>
      <TopHeader />
      <Horizon />
      <BottomHeader />
      <Horizon />
    </Container>
  );
}

export default Header;