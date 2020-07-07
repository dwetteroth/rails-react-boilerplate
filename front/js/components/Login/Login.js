/**
 * @file App component.
 */

import React from 'react';

const Login = (props) => {
  return (
    <div>
      <h1>IDB</h1>
      <input type="text" placeholder="username" />
      <input placeholder="password" />
      <button type="button"> submit</button>
    </div>
  );
};

export default Login;
