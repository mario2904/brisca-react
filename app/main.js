import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import querystring from 'querystring';
import * as _ from 'lodash';

import App from './components/App';
import LobbyContainer from './components/LobbyContainer';
import PlayerInfo from './components/PlayerInfo';
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
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LobbyContainer} />
        <Route path="playerInfo" component={PlayerInfo} />
      </Route>
    </Router>
  </Provider>
  , document.getElementById('app'));
