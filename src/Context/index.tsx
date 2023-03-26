import React from 'react';

interface ITasksContextProps {
  tasks: Array<{}>;
  setTasks: Function;
}

export const TaskContext = React.createContext({} as ITasksContextProps);

const TaskContextProvider = ({children}: any) => {
  const [tasks, setTasks] = React.useState<Array<{}>>([
    {
      id: 1,
      description: 'Go to Church',
      hour: '8:00 AM',
    },
  ]);

  return (
    <TaskContext.Provider value={{tasks, setTasks}}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
