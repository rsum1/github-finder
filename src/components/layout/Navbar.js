import React, { Component } from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types'


export class Navbar extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <GitHubIcon style={{marginRight:'10px'}}/>
          {this.props.title}
          </h1>
      </nav>
    )
  }
}

export default Navbar
