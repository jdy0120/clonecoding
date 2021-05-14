import React from 'react';
import styled, { css } from 'styled-components';
import { useAppContext } from '../_providers/AppProviders';
import { Todo } from '../type/type';

const Container = styled.div`
  width : 300px;
  height: 30vh;
  background-color: #13f0ec;
  border: solid 1px red;
`;

const TodoItem = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  /* border: solid 1px red; */
  justify-content: space-between;
`;

const SelectBox = styled.div`
  display: flex;
  /* border: solid 1px blue; */
`;

const Complete = styled.div`
  font-size: 30px;
  color: green;
  cursor: pointer;
`;

const Delete = styled.div`
  margin-left: 5px;
  font-size: 30px;
  color: red;
  cursor: pointer;
  transition: all .3s;
`;

const ShowTodo = () => {
  const { state: {todo}, setTodo } = useAppContext();

  console.log(todo);

  const setComplete = (index:number) => (e:React.MouseEvent) => {
    const setCompleteItem = {
      ...todo[index],
      complete: !todo[index].complete
    }
    const newTodo = todo.map((e,idx) => {
      return idx === index ? setCompleteItem : e;
    });
    setTodo(newTodo);
  }

  const setDelete = (index:number) => (e:React.MouseEvent) => {
    const removedContent = todo.filter((e,idx) => {
      return idx !== index
    })
    setTodo(removedContent);
  }

  return (
    <Container >
      {todo.map((element: Todo,index: number) => {
        return (
          <TodoItem key={index}>
            <Content complete={element.complete}>{element.content}</Content>
            <SelectBox>
              <Complete onClick={setComplete(index)}>{'V'}</Complete>
              <Delete onClick={setDelete(index)}>{'X'}</Delete>
            </SelectBox>
          </TodoItem>
        );
      })}
    </Container>
  );
}

export default ShowTodo;

interface ContentProps {
  complete: boolean
};

const Content = styled.div<ContentProps>`
  width: auto;
  font-size: 30px;
  text-decoration: ${({ complete }) => complete ? 'line-through' : 'none' }
  /* border: solid 1px blue; */
`;
