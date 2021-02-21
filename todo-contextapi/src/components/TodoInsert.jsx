import React, { useRef, useContext, useCallback } from 'react';
import './TodoInsert.scss';
import { MdAdd } from 'react-icons/md';
import { store, onChangeInput, insert } from '../contexts/todos';

const TodoInsert = () => {
  let id = useRef(4);
  const globalContext = useContext(store);
  const { dispatch, state } = globalContext;

  const onChange = useCallback(
    (e) => {
      dispatch(onChangeInput(e.target.value));
    },
    [dispatch]
  );

  const onInsert = useCallback(
    (e) => {
      e.preventDefault();
      const todo = { id: id.current++, text: state.input, checked: false };
      dispatch(insert(todo));
    },
    [dispatch, state.input]
  );

  return (
    <form className="insert-form" onSubmit={onInsert}>
      <input type="text" placeholder="할 일을 입력하세요" onChange={onChange} />
      <button className="btn-insert" type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default React.memo(TodoInsert);
