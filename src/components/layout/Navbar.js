import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import PropTypes from 'prop-types'


const Navbar = ({title}) => {

    return (
      <nav className="navbar bg-primary">
        <h1>
          <GitHubIcon style={{marginRight:'10px'}}/>
          {title}
          </h1>
      </nav>
    )
  
}
 Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Navbar
