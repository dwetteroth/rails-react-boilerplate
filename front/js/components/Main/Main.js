/**
 * @file Main component.
 */

import React from 'react';

const Main = (props) => {
  return (
    <main>
      <h1>This is the Main</h1>
      <p>Welcome, {props.username}</p>
    </main>
  );
};

export default Main;