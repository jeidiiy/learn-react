import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {todos.map(({ id, text, checked }) => (
        <TodoListItem key={id} id={id} text={text} checked={checked} />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
