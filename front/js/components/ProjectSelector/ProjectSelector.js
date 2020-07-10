/**
 * @file ProjectSelector component.
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectSelector extends Component {
  constructor (props) {
    super(props)
    this.state = {
      project1name: this.getName(0),
      project2name: this.getName(1),
      project1data: this.getData(0),
      project2data: this.getData(1)
    }
  }

  getName = (num) => {
    return Object.keys(this.props.projectInfo.projects[num])
  }

  getData = (num) => {
    return Object.values(this.props.projectInfo.projects[num])
  }



  render () {
    return (
      <div>
        <h4>Welcome, {this.props.username}! </h4>
        <p>please select a project to visualize its data</p>
        <button onClick={() => this.props.selectProject(1)} data={this.state.project1data} >{this.state.project1name}</button>
        <button onClick={() => this.props.selectProject(2)} data={this.state.project2data} >{this.state.project2name}</button>
      </div>
    );
  }

}

export default ProjectSelector;