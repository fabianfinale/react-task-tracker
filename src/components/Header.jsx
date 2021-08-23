import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { GlobalContext } from '../context/GlobalState';
import AddTask from './AddTask';

const Header = () => {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const { addTask } = useContext(GlobalContext);

  const handleChange = (e) => {
    setError('');
    setTask(e.target.value);
  };

  const handleClick = async () => {
    if (!task) {
      setError('Please, specify the task to be added');
      return toast.error('The task could not be added');
    }

    addTask(task);
    setTask('');
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
