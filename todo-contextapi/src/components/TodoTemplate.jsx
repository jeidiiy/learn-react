import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="todo-template">
      <div className="title">일정 관리 앱</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default React.memo(TodoTemplate);
