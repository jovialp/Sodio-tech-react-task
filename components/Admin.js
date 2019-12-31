import React, { Component } from "react";

import Table from "./Table";
const API_ADDRESS = "https://sodiotask.herokuapp.com/User/UsersDetails";

const currentTitle = "Frond End Developer";

class Admin extends Component {
  state = { jobseekers: [] };
  componentDidMount() {
    this.frondend();
  }
  frondend = () => {
    fetch(`${API_ADDRESS}`)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({ jobseekers: json.data });
        console.log(this.state.jobseekers);
      })
      .catch(error => alert(console.error.message));
  };
  render() {
    return (
      <div className="admin-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="row">
                <div className="col-xs-12">
                  <h3>Admin Dashboard</h3>
                </div>
              </div>
              <div className="row">
                <nav className="navbar navbar-default">
                  <ul className="nav navbar-nav">
                    <li className="active">
                      <a href="/" onClick={this.frondend}>
                        Frond End Developer
                      </a>
                    </li>
                    <li>
                      <a href="/">Node.js Developer</a>
                    </li>
                    <li>
                      <a href="/">MEAN Stack Developer</a>
                    </li>
                    <li>
                      <a href="/">FULL Stack Developer</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="row">
                <h4>{currentTitle}</h4>
              </div>
              <div className="row">
                <div className="col-xs-12">
                  <Table jobseekers={this.state.jobseekers} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;
