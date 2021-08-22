import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import TasksList from './TasksList';

const Layout = () => {
  const [tasks, setTasks] = useState([]);

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

  const handleDelete = async (id) => {
    const requestOptions = {
      method: 'DELETE',
    };
    await fetch(`http://localhost:5000/tasks/${id}`, requestOptions);

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleStatusChange = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className='app'>
      <Header addTask={addTask} />
      <TasksList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
      <Footer />
    </div>
  );
};

export default Layout;
