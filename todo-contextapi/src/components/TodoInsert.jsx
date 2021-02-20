import React from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = () => {
  return (
    <form className="insert-form">
      <input type="text" placeholder="할 일을 입력하세요" />
      <div className="btn-insert">
        <MdAdd />
      </div>
    </form>
  );
};

export default TodoInsert;
