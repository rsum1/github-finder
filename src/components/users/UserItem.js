import React from "react";
import Card from "@material-ui/core/Card";
import PropTypes from 'prop-types'

const UserItem = ({user:{ login, avatar_url, html_url }}) => {
  return (
    <div className="text-center">
      <Card>
        <img
          className="round-img"
          src={avatar_url}
          alt=""
          style={{ width: "60px" }}
        />
        <h3>{login}</h3>
        <a href={html_url} className="btn btn-dark btm-sm my-1">
          More
        </a>
      </Card>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
