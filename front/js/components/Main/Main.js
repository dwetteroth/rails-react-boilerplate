/**
 * @file Main component.
 */

import React from 'react';
import Nav from '../Nav/Nav';
import { Route } from 'react-router-dom';
import Settings from '../Settings/Settings';
import ProjectSelector from '../ProjectSelector/ProjectSelector';


const Main = (props) => {
  const { username } = props;
  const { logoutUser } = props;
  return (
    <main>
      <Nav logoutUser={logoutUser} />
      <section>
        <ProjectSelector username={username}/>
        <Route path='/settings' render={() => <Settings />}/>
      </section>
    </main>
  );
};

export default Main;
