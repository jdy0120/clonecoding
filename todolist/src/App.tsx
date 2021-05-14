import React, { Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import CreateTodo from './components/CreateTodo';
import ShowTodo from './components/ShowTodo';

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    background-color: burlywood;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  /* border: solid 0px red; */
  justify-content: center;
  align-items: center;
`;

const App = () => {
  return (
    <Fragment>
      <GlobalStyle></GlobalStyle>
        <Container>
          <div>
            <CreateTodo/>
            <ShowTodo/>
          </div>
        </Container>
    </Fragment>
  );
}

export default App;

