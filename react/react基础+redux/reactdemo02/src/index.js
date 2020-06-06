import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import AllList from './js/allList'

ReactDOM.render(
    <AllList />,
  document.getElementById('root')
)
serviceWorker.unregister();
