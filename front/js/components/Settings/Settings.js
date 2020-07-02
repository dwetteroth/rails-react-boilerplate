/**
 * @file Settings component.
 */

import React from 'react';


const Settings = () => {
  return (
    <div>
        <img>x</img>
        <h2>Settings</h2>
        <h3>Projects:</h3>
        <p>${projectNames}</p>
        <h3>Team Members:</h3>
        <p>${teamMemberNames}</p>
        <h3>Username:</h3>
        <p>${username}</p>
        <h3>Email Address:</h3>
        <p>${emailAddress}</p>
    </div>
  );
};

export default Settings;
