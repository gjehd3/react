import React from 'react';
import Todos from './components/Todos';
import CounterContainers from './containers/CounterContainer';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <hr />
      <Todos />
    </div>
  );
};

export default App;