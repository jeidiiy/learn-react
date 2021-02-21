import React, { createContext, useReducer } from 'react';

// 초깃값
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '자바스크립트 공부',
      checked: true,
    },
    {
      id: 2,
      text: '리액트 공부',
      checked: true,
    },
    {
      id: 3,
      text: '알고리즘 학습',
      checked: false,
    },
  ],
};

// 스토어
export const store = createContext(initialState);
const { Provider } = store;

// 액션
const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const TOGGLE = 'todos/TOGGLE';
const INSERT = 'todos/INSERT';
const REMOVE = 'todos/REMOVE';

// 액션 크리에이터
export const onChangeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});
export const toggle = (id) => ({ type: TOGGLE, id });
export const insert = (todo) => ({ type: INSERT, todo });
export const remove = (id) => ({ type: REMOVE, id });

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
        ),
      };
    case INSERT:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default TodosProvider;
