/**
 * @file Main component.
 */

import React from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import Settings from '../Settings/Settings';
import ProjectSelector from '../ProjectSelector/ProjectSelector';
import ProjectDropDown from '../ProjectDropDown/ProjectDropDown';


const Main = (props) => {
  const {settingsSelected} = props;
  const { username } = props;
  const { logoutUser } = props;
  const { toggleSettings } = props;
  const { openProjectDropDown } = props;
  const { clickedProjectDropDown } = props;


  return (
    <main>
      <Nav toggleSettings={toggleSettings} logoutUser={logoutUser} openProjectDropDown={openProjectDropDown}/>
      <section>
        <ProjectSelector username={username}/>
        {settingsSelected ? <Settings /> : null}
        {clickedProjectDropDown ? <ProjectDropDown /> : null}
      </section>
    </main>
  );
};

export default Main;


{/* <Route
path="/dashboard/:id"
component={() => <Dashboard projectInfo={projectInfo} />}
/>
<Route
path="/dashboard/:id/detail/:id"
component={() => <FlowDetails />}
/>
<Route path="/projects" component={() => <ProjectDropDown />} /> */}
