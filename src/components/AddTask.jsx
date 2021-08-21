import React from 'react';
import PropTypes from 'prop-types';

const AddTask = ({
  value,
  error,
  onChange: handleChange,
  onClick: handleClick,
}) => {
  return (
    <div className='task-bar'>
      <input
        className={
          !error ? 'task-bar__input' : 'task-bar__input task-bar__input--error'
        }
        type='text'
        value={value}
        onChange={handleChange}
        placeholder={!error ? 'Add a task' : error}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

AddTask.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddTask;
