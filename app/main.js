import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import * as _ from 'lodash';

import App from './components/App';
import LobbyContainer from './components/LobbyContainer';
import PlayerInfo from './components/PlayerInfo';
import reducers from './reducers';

import ws from './services/websocket';


const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStoreWithMiddleware(reducers);

ws.onmessage = function(event) {
  // Change to Upper-Snake-case to follow redux best practices for TYPE
  let msg = JSON.parse(event.data);
  let type = _.toUpper(_.snakeCase(msg.cmd));
  store.dispatch({
    type,
    payload: msg.payload
  });
  console.log(msg);
  console.log(type);
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LobbyContainer} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
