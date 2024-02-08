import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deletetodo } from '../store/slice/TodoSlice'

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.tasks)

  const handleDelete = (id) => {
    dispatch(deletetodo(id));
  }

  return (
    <div className="tasklist">
      <div className="display-tasks">
        <h3>Your tasks:</h3>
        <ul className="tasks">
          {tasks?.map((task) => (
            <li className="task" key={task.id}>
              {task.data}
              <button
                className="delete-btn"
                onClick={() => handleDelete(task.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TaskList
