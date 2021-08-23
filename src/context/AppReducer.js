export const reducer = (state, action) => {
  const actionTypes = {
    LOAD_TASKS: () => {
      return { status: 'loading' };
    },
    TASKS_LOADED: () => {
      return { tasks: action.payload, status: 'finished' };
    },
    TASKS_LOAD_FAILED: () => {
      return { status: 'error' };
    },
    TASK_ADDED: () => {
      return { tasks: [...state.tasks, action.payload], status: 'finished' };
    },
    TASK_DELETED: () => {
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        status: 'finished',
      };
    },
    TASK_STATUS_CHANGED: () => {
      return {
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
        status: 'finished',
      };
    },
  };

  if (action.type in actionTypes) return actionTypes[action.type]();
  return state;
};
