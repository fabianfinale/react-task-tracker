import { createContext, useReducer } from 'react';
import { reducer } from './AppReducer';

export const initialState = {
  tasks: [],
  status: 'idle',
};

export const GlobalContext = createContext(initialState);
GlobalContext.displayName = 'GlobalContext';

export const CustomProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadTasks = async () => {
    dispatch({ type: 'LOAD_TASKS' });

    try {
      const response = await fetch('http://localhost:5000/tasks');
      const data = await response.json();

      dispatch({ type: 'TASKS_LOADED', payload: data });
    } catch (error) {
      dispatch({ type: 'TASKS_LOAD_FAILED', payload: error.message });
    }
  };

  const addTask = async (task) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ description: task, completed: false }),
    };

    try {
      const response = await fetch(
        'http://localhost:5000/tasks',
        requestOptions
      );
      const newTask = await response.json();
      dispatch({ type: 'TASK_ADDED', payload: newTask });
    } catch (error) {}
  };

  const deleteTask = async (id) => {
    const requestOptions = {
      method: 'DELETE',
    };

    try {
      await fetch(`http://localhost:5000/tasks/${id}`, requestOptions);
      dispatch({ type: 'TASK_DELETED', payload: id });
    } catch (error) {}
  };

  const changeTaskStatus = async (id, completed) => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ completed }),
    };

    try {
      await fetch(`http://localhost:5000/tasks/${id}`, requestOptions);
      dispatch({ type: 'TASK_STATUS_CHANGED', payload: id });
    } catch (error) {}
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks: state.tasks,
        status: state.status,
        loadTasks,
        addTask,
        deleteTask,
        changeTaskStatus,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
