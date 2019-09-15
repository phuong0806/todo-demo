import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './../../reducers';
import './App.css';
import TaskBoard from './../TaskBoard';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, devTools);

function App() {
  return (
    <Provider store={store}>
      <TaskBoard />
    </Provider>
  );
}

export default App;
