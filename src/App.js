import React, { Component } from "react";
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert"
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async text => {
    this.setState({alert:null})
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  // Clear Users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    
    // setTimeout(() => this.setState({alert: null}), 2000)
  };

  //Clear Alert
  clearAlert = () => {
    this.setState({ alert: null });
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar title="Github Finder" />
        <div className="container">
          <Alert alert={this.state.alert}/>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
            clearAlert={this.clearAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
