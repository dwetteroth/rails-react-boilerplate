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
  constructor() {
    super()
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
        {projectSelection === false ? <ProjectSelector selectProject={selectProject} username={username} projectInfo={projectInfo}/> : null}
        {settingsSelected ? <Settings /> : null}
        {clickedProjectDropDown ? <ProjectDropDown /> : null}
        {projectSelection === 1 ? <Dashboard /> : null}
        {projectSelection === 2 ? <Dashboard /> : null}
      </section>
    </main>
  );
}
}

export default Main;
