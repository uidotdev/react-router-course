import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <div className="yellow-border" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);