import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';
import './styles/index.css';

import { ReducerContextProvider } from './context/ReducerContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ReducerContextProvider>
      <App />
    </ReducerContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
