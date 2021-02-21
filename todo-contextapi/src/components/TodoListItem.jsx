import React, { useContext, useCallback } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import { store, toggle, remove } from '../contexts/todos';

const TodoListItem = ({ id, text, checked }) => {
  const globalContext = useContext(store);
  const { dispatch } = globalContext;

  const onToggle = useCallback(() => {
    dispatch(toggle(id));
  }, [dispatch, id]);

  const onRemove = useCallback(() => {
    dispatch(remove(id));
  }, [dispatch, id]);

  return (
    <div className="todo-item" onClick={onToggle}>
      <div className={checked ? 'check checked' : 'check'}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span className="text">{text}</span>
      </div>
      <div className="remove">
        <MdRemoveCircleOutline className="btn-remove" onClick={onRemove} />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
