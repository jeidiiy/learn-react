import React, { useCallback, useRef } from 'react';
import { MdAdd } from 'react-icons/md';
import { insert, onChangeInput } from '../modules/todos';
import { useSelector, useDispatch } from 'react-redux';

const TodoInsert = () => {
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input);
  const id = useRef(4);

  const onChange = useCallback(
    (e) => {
      dispatch(onChangeInput(e.target.value));
    },
    [dispatch]
  );

  const onInsert = useCallback(
    (e) => {
      e.preventDefault();
      const todo = { id: id.current++, text: input, checked: false };
      dispatch(insert(todo));
    },
    [dispatch, input]
  );

  return (
    <form onSubmit={onInsert}>
      <input
        type="text"
        placeholder="할 일을 입력하세요..."
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default React.memo(TodoInsert);
