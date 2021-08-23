import React, { useContext, useEffect } from 'react';
import Task from './Task';
import { GlobalContext } from '../context/GlobalState';

const TasksList = () => {
  const { tasks, status, loadTasks, deleteTask, changeTaskStatus } =
    useContext(GlobalContext);

  useEffect(() => {
    if (status === 'idle') loadTasks();
  }, [status, loadTasks]);

  return (
    <div className='tasks-list'>
      {status === 'loading' && <h2>Loading</h2>}
      {status === 'finished' &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onStatusChange={changeTaskStatus}
            onDelete={deleteTask}
          />
        ))}
    </div>
  );
};

export default TasksList;
