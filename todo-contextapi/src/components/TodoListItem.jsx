import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
const TodoListItem = () => {
  return (
    <div className="todo-item">
      <div className="check">
        <MdCheckBoxOutlineBlank />
        <span className="text">리액트의 기초 알아보기</span>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline className="btn-remove" />
      </div>
    </div>
  );
};

export default TodoListItem;
