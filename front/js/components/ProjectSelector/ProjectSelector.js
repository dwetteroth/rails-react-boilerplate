/**
 * @file App component.
 */

import React from 'react';
import App.js from 'App';

const ProjectSelector = (props) => {
  return (
    <div>
      <h4>Welcome ${username}</h4>
      <p>please select a project to visualize its data</p>
      {/* <img />  */}
      <button type="button"> Project One</button>
      {/* <img/> */}
      <button type="button"> Project Two</button>
    </div>
  );
};

export default ProjectSelector;
