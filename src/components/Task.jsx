import React from 'react';
import PropTypes from 'prop-types';

const Task = ({
  task,
  onStatusChange: handleStatusChange,
  onDelete: handleDelete,
}) => {
  const { id, completed, description } = task;
  const imageURL = completed ? 'check-square.svg' : 'square.svg';
  const descriptionClasses = completed
    ? 'task__description task__description--completed'
    : 'task__description';

  return (
    <div className='task-list__task'>
      <img
        className='task__icon task__icon--status'
        src={require(`../assets/img/${imageURL}`).default}
        alt=''
        onClick={() => handleStatusChange(id, !completed)}
      />{' '}
      <p className={descriptionClasses}>{description}</p>
      <img
        className='task__icon task__icon--delete'
        src={require('../assets/img/trash.svg').default}
        alt=''
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  onStatusChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
