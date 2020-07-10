/**
 * @file App component.
 */

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
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
      projectInfo: {},
      teammates: [],
      userLoggedIn: false
    };
  }

  loginUser = (username, email) => {
    this.setState({ username });
    this.setState({ email });
    this.setState({userLoggedIn: true});
    this.fetchProjects();
  };

  fetchProjects = () => {
    this.setState({ projectInfo: projects });
  };

  logoutUser = () => {
    console.log('in dere')
    this.setState({ username: '' });
    this.setState({ email: '' });
    this.setState({ userLoggedIn: false});
    this.clearProject();
  };

  clearProject = () => {
    this.setState({ projectInfo: {} });
  };

  render() {
//     const { username } = this.state;
//     const { projectInfo } = this.state;
//     const { email } = this.state;
//     const { teammates } = this.state;
    return (
//       <section>



<main>
  <Route exact path='/' render={() => this.state.userLoggedIn === false ? <Login loginUser={this.loginUser}/> : <Main logoutUser={this.logoutUser}/>}/>
</main>


//         <Route
//           path="/settings"
//           component={() => (
//             <Settings
//               username={username}
//               email={email}
//               teammates={teammates}
//               projectInfo={projectInfo}
//             />
//           )}
//         />
//         <Route
//           path="/dashboard/:id"
//           component={() => <Dashboard projectInfo={projectInfo} />}
//         />
//         <Route
//           path="/dashboard/:id/detail/:id"
//           component={() => <FlowDetails />}
//         />
//         <Route path="/projects" component={() => <ProjectDropDown />} />
//       </section>
    );
  }
}

