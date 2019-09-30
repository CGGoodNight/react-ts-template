import React from 'react';
import AppRouter from "./routers";
import './App.css';

import { Provider } from 'react-redux';
import store from "./store";

// 挂载mock
import "./mock/fetchVersion";

const App: React.FC = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );
}

export default App;
