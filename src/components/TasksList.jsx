import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

const TasksList = ({
  tasks,
  onDelete: handleDelete,
  onStatusChange: handleStatusChange,
}) => {
  return (
    <div className='tasks-list'>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

TasksList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default TasksList;
