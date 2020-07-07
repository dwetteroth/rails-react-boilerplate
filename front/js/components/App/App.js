/**
 * @file App component.
 */

import React, { Component } from 'react';

export class App extends Component {
  constructor() {
    super()
    this.state = {
    username: "",
    email: "",
    projects:[],
    teammates: [],
    isLoading: true,
    networkMessage: '',
    error: ''
  };


  render() {
    return <h1>Hello World</h1>;
  }
}
export default App;
