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

// 리듀서
function todosReducer(state = initialState, action) {
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

export default todosReducer;
