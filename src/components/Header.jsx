import React, { useState } from 'react';
import { toast } from 'react-toastify';
import AddTask from './AddTask';

const Header = () => {
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
      body: JSON.stringify({ description: task }),
    };
    console.log('requestOptions.body :>> ', requestOptions.body);

    const response = await fetch('http://localhost:5000/tasks', requestOptions);

    const newTask = await response.json();
    console.log(newTask);
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

export default Header;
