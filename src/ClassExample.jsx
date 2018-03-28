import React, { Component } from 'react';


export default class ClassExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>{this.constructor.name}</div>
    );
  }
}
