import React, { Component } from 'react';

import ClassExample from './ClassExample';

export default class App extends Component {
  render() {
    return (
      <div
        style={{
          width: '80%',
          margin: 'auto',
        }}
      >
        <h1>{ this.props.appName }</h1>
        <ClassExample />
      </div>
    );
  }
}
