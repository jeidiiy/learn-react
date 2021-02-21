import React, { useContext } from 'react';
import TodoListItem from './TodoListItem';
import { store } from '../contexts/todos';
const TodoList = () => {
  const globalContext = useContext(store);
  const { todos } = globalContext.state;
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          checked={todo.checked}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
