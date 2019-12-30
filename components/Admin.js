import React, { Component } from "react";

import Table from './Table';
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
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Technical Skill</th>
                        <th>Experience</th>
                        <th>Applied Date</th>
                        <th>View Details</th>
                        <th colSpan="2">Update Application Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Rajesh</td>
                        <td>HTML, CSS</td>
                        <td>2 years</td>
                        <td>"10/08/2019"</td>
                        <td>
                          <button
                            type="button"
                            className="btn btn-info"
                            data-toggle="modal"
                            data-target="#myModal1"
                          >
                            View Details
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-success">
                            Short list
                          </button>
                        </td>
                        <td>
                          <button className="btn btn-danger">Reject</button>
                        </td>
                        <div id="myModal1" className="modal fade" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <button
                                  type="button"
                                  className="close"
                                  data-dismiss="modal"
                                >
                                  &times;
                                </button>
                                <h4 className="modal-title">Rajesh Profile</h4>
                              </div>
                              <div className="modal-body">
                                <div className="row">
                                  <div className="col-xs-6">
                                    <h5>Contact Number</h5>
                                  </div>
                                  <div className="col-xs-6">
                                    <p>+91 9987675644</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-xs-6">
                                    <h5>Email</h5>
                                  </div>
                                  <div className="col-xs-6">
                                    <p>"rajesh@sodio.tech"</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-xs-6">
                                    <h5>Skills</h5>
                                  </div>
                                  <div className="col-xs-6">
                                    <p>HTML</p>
                                    <p>CSS</p>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-xs-6">
                                    <h5>Experience</h5>
                                  </div>
                                  <div className="col-xs-6">
                                    <p>2 years</p>
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer">
                                <button
                                  type="button"
                                  className="btn btn-default"
                                  data-dismiss="modal"
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
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
