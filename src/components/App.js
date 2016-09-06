import React, {Component} from 'react';

import OnlinePlayersList from './OnlinePlayersList';
import MyInfo from './MyInfo';

export default class App extends Component {
  render() {
    return (
      <div>
        <MyInfo />
        <OnlinePlayersList />
      </div>
    );
  }
}
