import React from 'react';

const TodoTemplate = ({ children }) => {
  return (
    <div>
      <h3>일정 관리</h3>
      {children}
    </div>
  );
};

export default TodoTemplate;
