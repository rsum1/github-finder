import React, { Component } from 'react';
import Card from '@material-ui/core/Card';

class UserItem extends Component {
  state = {
    id: 'id',
    login: 'rsum1',
    avatar_url: 'https://avatars0.githubusercontent.com/u/48501208?v=4',
    html_url: 'https://github.com/rsum1'
  }

  render() {
    const { login, avatar_url, html_url } = this.state
    return (
      <div className='text-center'>
        <Card>
          <img
            className='round-img'
            src={avatar_url}
            alt=""
            style={{ width: '60px' }}
          />
          <h3>{login}</h3>
          <a href={html_url} className='btn btn-dark btm-sm my-1'>
            More</a>
        </Card>
      </div>
    )
  }
}

export default UserItem
