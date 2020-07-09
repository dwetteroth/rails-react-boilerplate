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
import ProjectDropDown from '../ProjectDropDown/ProjectDropDown';
import projects from '../Data';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      projects: {},
      teammates: [],
    };
  }

  loginUser = (username, email) => {
    this.setState({ username });
    this.setState({ email });
  };

  clearProject = () => {
    this.setState({ project: {} })
  }

  logoutUser = () => {
    this.setState({ username: '' });
    this.setState({ email: '' });
    this.clearProjects();
  };

  fetchProjects = () => {
    this.setState({ projects });
  };

  render() {
    const { username } = this.state;
    const { projects } = this.state;
    const { email } = this.state;
    const { teammates } = this.state;
    const { loginUser } = this.loginUser;
    const { logoutUser } = this.logoutUser;
    const { fetchProjects } = this.fetchProjects;
    return (
      <section>
        <Route
          exact
          path="/"
          render={() => (
            <Login
              fetchProjects={fetchProjects}
              logoutUser={logoutUser}
              loginUser={loginUser}
            />
          )}
        />
        <Route path="/home" component={() => <Main username={username} />} />
        <Route
          path="/settings"
          component={() => (
            <Settings
              username={username}
              email={email}
              teammates={teammates}
              projectInfo={projects}
            />
          )}
        />
        <Route
          path="/dashboard/:id"
          component={() => <Dashboard projectInfo={projects} />}
        />
        <Route
          path="/dashboard/:id/detail/:id"
          component={() => <FlowDetails />}
        />
        <Route path="/projects" component={() => <ProjectDropDown />} />
      </section>
    );
  }
}
