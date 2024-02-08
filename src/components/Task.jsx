import React, {useDebugValue, useRef} from 'react'
import { addTodo } from '../store/slice/TodoSlice';
import { useDispatch } from 'react-redux';

const Task = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function addTodoItem() {
    const task = inputRef.current.value.trim();
    if(task != "") {
        dispatch(addTodo(task));
    }
    inputRef.current.value = "";
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: "10vh" }}>
      <input
        type='text'
        placeholder='Add your text...'
        ref={inputRef}
      />
      <button onClick={addTodoItem}>Add Task</button>
    </div>
  )
}

export default Task
