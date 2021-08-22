import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import AddTask from './AddTask';

const Header = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setError('');
    setTask(e.target.value);
  };

  const handleClick = async () => {
    if (!task) {
      setError('Please, specify the task to be added');
      return toast.error('The task could not be added');
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ description: task, completed: false }),
    };

    const response = await fetch('http://localhost:5000/tasks', requestOptions);

    setTask('');

    const newTask = await response.json();
    addTask(newTask);
  };

  return (
    <div className='header'>
      <img
        className='header__logo'
        src={require('../assets/img/check2-square-purple.svg').default}
        alt='The task tracker logo'
      />
      <h1 className='header__title'>A React based Task Tracker</h1>
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <AddTask
              value={task}
              error={error}
              onChange={handleChange}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  addTask: PropTypes.func.isRequired,
};

export default Header;
