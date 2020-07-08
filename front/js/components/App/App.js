/**
 * @file App component.
 */

import React, { Component } from 'react';
import Route from 'react-router-dom';

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
    }
  }

  render() {
    return (
      <section>
      <Route exact path='/' render={() => <Login loginUser={this.loginUser}/>}/>
      <Route path='/home' component={() => <Main username={this.state.username}/>}/>
      <Route path='/settings' component={() => <Settings username={this.state.username} email={this.state.email} teammates={this.state.teammates} projects={this.state.projects}/>}/>
      <Route path='/project/:id' component={() => <Dashboard projectInfo={this.state.projects}/>}/>
      <Route path='/project/:id/detail/:id' component={() => <FlowDetails/>}/>
    </section>
    )
  }
}

export default App;
