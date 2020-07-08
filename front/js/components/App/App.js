/**
 * @file App component.
 */

import React, { Component } from 'react';
import Route from 'react-router-dom';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Settings from '../Settings/Settings';
import Dashboard from '../Dashboard/Dashboard';
import FlowDetails from '../FlowDetails/FlowDetails';

export default class App extends Component {
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

  loginUser = (username, email) => {
    this.setState( { username })
    this.setState( { email } )
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
