/**
 * @file Login component.
 */

import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: ''
    }
  }
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
