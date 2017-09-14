import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import ENV from './../../config/environment';

ReactDOM.render(
  <App
    user={window.currentUser || null}
  />,
  document.getElementById('root')
);

if (module.hot) {
   module.hot.accept(`${ENV.ROOT_PATH}/dist/app.js`, () => {
     console.log('Accepting the updated module!');
   });
};
