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
   module.hot.accept(`${ENV.ROOT_PATH}/dist/app.webpack`, function() {
     console.log('Accepting the updated printMe module!');
   });
};
