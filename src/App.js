import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layout';
import { GlobalContext, initialState } from './context/GlobalState';

function App() {
  const [tasks, setTasks] = useState(initialState);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('http://localhost:5000/tasks');
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = async (id) => {
    const requestOptions = {
      method: 'DELETE',
    };
    await fetch(`http://localhost:5000/tasks/${id}`, requestOptions);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const changeTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <GlobalContext.Provider
      value={{ tasks, addTask, deleteTask, changeTaskStatus }}>
      <ToastContainer />
      <Layout />
    </GlobalContext.Provider>
  );
}

export default App;
