import React from 'react';
import styled from 'styled-components';
import { useAppContext } from '../_providers/AppProviders';
import { Todo } from '../type/type';
const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Search = styled.input`
  outline: none;
  width: 100%;
  height: 30px;
  padding: 0;
  border-width: 0;
  background-color: orange;
  font-size: 20px;
  text-align: center;
`;

const Button = styled.button`
  border: 0;
  background-color: #1adbae;
  color: white;
  width: 70px;
  font-size: 20px;
  cursor: pointer;
  transition: all 500ms;
  &:hover {
    transform: scale(1.25, 1.25);
    overflow: hidden;
  }
`;

const CreateTodo = () => {
  const [todoState, setTodoState] = React.useState<Todo>({
    content: '',
    complete: false,
  });
  const { state:{ todo }, setTodo } = useAppContext();

  const contentState = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = {
      ...todoState,
      content: e.target.value
    }
    setTodoState(newTodo);
  }

  const insertTodo = () => {
    if (todoState.content !== '') {
      const todoArray = [...todo, todoState];
      setTodo(todoArray);
      setTodoState({
        ...todoState,
        content: ''
      });
    }
  }

  React.useEffect(() => {
    console.log(todoState.content);
  },[todoState.content])

  return (
    <Container>
      <Search type='text' placeholder={'할일을 입력하세요'} value={todoState.content} onChange={contentState} />
      <Button
        onClick={insertTodo}
      >{'입력'}</Button>
    </Container>
  );
}

export default CreateTodo;