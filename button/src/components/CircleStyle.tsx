import React from 'react';
import styled from 'styled-components';

interface Props {
  setCircleColor: React.Dispatch<React.SetStateAction<string>>;
  setSizeState: React.Dispatch<React.SetStateAction<string>>;
}

const SizeButton = styled.div`
  width: 4rem;
  height: 1rem;
  background: skyblue;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
`;

const CircleStyle = (props: Props) => {
  const [colorState, setColorState] = React.useState('');

  const clickEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      props.setCircleColor(colorState);
    }
  }

  const colorChagne = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorState(e.target.value);
  }

  return (
    <Container>
      <input type="text" onChange={colorChagne} onKeyPress={clickEnter} />
      <SizeButton onClick={() => {
        props.setSizeState('huge')
      }}>커져라</SizeButton>
      <SizeButton onClick={() => {
        props.setSizeState('small')
      }}>작아져라</SizeButton>
    </Container>
  );
}

export default CircleStyle;