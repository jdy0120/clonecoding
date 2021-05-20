import React from 'react';
import CircleComponent from './components/CircleComponent';
import CircleStyle from './components/CircleStyle';
import Button from './components/Button';
import styled, { ThemeProvider } from 'styled-components';
import Dialog from './components/Dialog';
import BounceCircle from './components/BounceCircle';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
  }
`;

function App() {

  const [circleColor, setCircleColor] = React.useState('');
  const [sizeState, setSizeState] = React.useState('small');
  const [visible, setVisible] = React.useState(false);

  const onClick = () => {
    setVisible(true);
  }

  const onConfirm = () => {
    setVisible(false);
  }
  
  const onCancel = () => {
    setVisible(false);
  }

  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595',
        }
      }}
    >
      <CircleStyle setCircleColor={setCircleColor} setSizeState={setSizeState}/>
      <CircleComponent color={circleColor} huge={sizeState}/>
      <>
        <AppBlock>
          <ButtonGroup>
            <Button size='large'>{'BUTTON'}</Button>
            <Button>{'BUTTON'}</Button>
            <Button size='small'>{'BUTTON'}</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color='gray' size='large'>{'BUTTON'}</Button>
            <Button color='gray'>{'BUTTON'}</Button>
            <Button color='gray' size='small'>{'BUTTON'}</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button color='pink' size='large'>{'BUTTON'}</Button>
            <Button color='pink'>{'BUTTON'}</Button>
            <Button color='pink' size='small'>{'BUTTON'}</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' outline>{'BUTTON'}</Button>
            <Button color='gray' outline>{'BUTTON'}</Button>
            <Button size='small' color='pink' outline>{'BUTTON'}</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button size='large' fullWidth>{'BUTTON'}</Button>
            <Button size='large' color='gray' fullWidth>{'BUTTON'}</Button>
            <Button size='large' color='pink' fullWidth onClick={onClick}>{'BUTTON'}</Button>
          </ButtonGroup>
        </AppBlock>
        <Dialog
          title='정말로 삭제하시겠습니까?'
          confirmText='삭제'
          cancelText='취소'
          onConfirm={onConfirm}
          onCancel={onCancel}
          visible={visible}
        >
          {'데이터를 정말로 삭제하시겠습니까?'}
        </Dialog>
      </>
      <BounceCircle />
    </ThemeProvider>
  );
}

export default App;
