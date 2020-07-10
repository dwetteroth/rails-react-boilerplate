/**
 * @file Main component.
 */

import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Settings from '../Settings/Settings';
import ProjectSelector from '../ProjectSelector/ProjectSelector';
import ProjectDropDown from '../ProjectDropDown/ProjectDropDown';
import Dashboard from '../Dashboard/Dashboard'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      project1name: this.getName(0),
      project2name: this.getName(1),
      project1data: this.getData(0),
      project2data: this.getData(1)
    }
  }

  getName = (num) => {
    console.log(this.props.projectInfo)
    return Object.keys(this.props.projectInfo.projects[num])
  }

  getData = (num) => {
    return Object.values(this.props.projectInfo.projects[num])
  }

 

render () {
  const { projectInfo } = this.props;
  const { settingsSelected } = this.props;
  const { username } = this.props;
  const { logoutUser } = this.props;
  const { toggleSettings } = this.props;
  const { openProjectDropDown } = this.props;
  const { clickedProjectDropDown } = this.props;
  const { selectProject } = this.props;
  const { projectSelection } = this.props;
  return (
    <main>
      <Nav
        toggleSettings={toggleSettings}
        logoutUser={logoutUser}
        openProjectDropDown={openProjectDropDown}
      />
      <section>
        {projectSelection === false ? <ProjectSelector selectProject={selectProject} username={username} project1name={this.state.project1name} project2name={this.state.project2name}/> : null}
        {settingsSelected ? <Settings /> : null}
        {clickedProjectDropDown ? <ProjectDropDown /> : null}
        {projectSelection === 1 ? <Dashboard projectData={projectInfo} /> : null}
        {projectSelection === 2 ? <Dashboard projectData={projectInfo} /> : null}
      </section>
    </main>
  );
}
}

export default Main;
