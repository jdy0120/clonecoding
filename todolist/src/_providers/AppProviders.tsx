import React, { useReducer } from 'react';
import { createCtx } from '../utils/createCtx';
import { Todo } from '../type/type';

const [useCtx, Provider] = createCtx<Context>();

export interface State {
  todo: Todo[];
};

interface Context {
  state: State;
  setTodo: (todo: Array<Todo>) => void;
};

export enum ActionType {
  SetTodo = 'set-todo',
};

const initialState: State = {
  todo: [],
};

interface SetTodoAction {
  type: ActionType.SetTodo;
  payload: Array<Todo>;
};

type Action = SetTodoAction;

interface Props {
  children?: React.ReactElement;
}

type Reducer = (state: State, action: Action) => State;

const setTodo = (dispatch: React.Dispatch<SetTodoAction>) => (
  todo: Todo[]
): void => {
  dispatch({
    type: ActionType.SetTodo,
    payload: todo,
  });
};

const reducer: Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'set-todo':
      return { ...state, todo: action.payload };
    default:
      return state;
  }
}

function AppProvider(props: Props): React.ReactElement {
  const [state, dispatch] = useReducer<Reducer>(reducer,initialState);

  const actions = {
    setTodo: setTodo(dispatch),
  }

  return <Provider value={{ state, ...actions }}>{props.children}</Provider>
}

export { useCtx as useAppContext, AppProvider }