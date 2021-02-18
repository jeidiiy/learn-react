import React, { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import { remove, toggle } from '../modules/todos';
import { useDispatch } from 'react-redux';

const TodoListItem = ({ id, text, checked }) => {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => {
    dispatch(toggle(id));
  }, [dispatch, id]);

  const onRemove = useCallback(() => {
    dispatch(remove(id));
  }, [dispatch, id]);

  return (
    <div>
      <div className={checked ? 'left checked' : 'left'} onClick={onToggle}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <span>{text}</span>
      </div>
      <div className="remove">
        {<MdRemoveCircleOutline onClick={onRemove} />}
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
