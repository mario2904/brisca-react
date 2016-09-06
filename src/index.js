import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import querystring from 'querystring';
import * as _ from 'lodash';

import App from './components/App';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);
const ws = new WebSocket('wss://brisca-server.herokuapp.com');

ws.onmessage = function(event) {
  // Change to Upper-Snake-case to follow redux best practices for TYPE
  let data = querystring.parse(event.data);
  let type = _.toUpper(_.snakeCase(data.cmd));
  store.dispatch({
    type,
    payload: data
  });
  console.log(data);
  console.log(type);
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('app'));
