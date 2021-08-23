import React, { useContext } from 'react';
import Task from './Task';
import { GlobalContext } from '../context/GlobalState';

const TasksList = () => {
  const context = useContext(GlobalContext);
  const { tasks, changeTaskStatus, deleteTask } = context;
  return (
    <div className='tasks-list'>
      {Array.isArray(tasks) ? (
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onStatusChange={changeTaskStatus}
            onDelete={deleteTask}
          />
        ))
      ) : (
        <h2>Loading</h2>
      )}
    </div>
  );
};

export default TasksList;
