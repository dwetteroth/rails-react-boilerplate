/**
 * @file Main component.
 */

import React from 'react';
import Nav from '../Nav/Nav';

const Main = (props) => {
  const { username } = props;
  const { logoutUser } = props;
  return (
    <main>
      <Nav logoutUser={logoutUser} />
      <section>
        <h1>This is the Main</h1>
        <p>Welcome, {username}</p>
      </section>
    </main>
  );
};

export default Main;
