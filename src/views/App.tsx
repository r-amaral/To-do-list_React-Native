import React from 'react';
import TaskContextProvider from '../Context';
import ToDo from './ToDo';

const App = () => {
  return (
    <TaskContextProvider>
      <ToDo />
    </TaskContextProvider>
  );
};

export default App;
