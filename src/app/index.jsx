import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(
  <App
    user={window.currentUser || null}
  />,
  document.getElementById('root')
);
