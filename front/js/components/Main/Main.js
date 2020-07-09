/**
 * @file Main component.
 */

import React from 'react';

const Main = (props) => {
  const { username } = props;
  return (
    <main>
      <h1>This is the Main</h1>
      <p>Welcome, {username}</p>
    </main>
  );
};

export default Main;
