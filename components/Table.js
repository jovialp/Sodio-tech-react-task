import React, { Component } from "react";

const API_ADDRESS = "https://sodiotask.herokuapp.com/User/UserDetails";

class Table extends Component {
  state = { user : '' };
  viewDetails = id =>{
    fetch(`${API_ADDRESS}/${id}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.data);
        this.setState({ user : json.data });
        // console.log(this.state.user);
      })
      .catch(error => alert(console.error.message));
  }
  render() {
    const { jobseekers } = this.props;
    const {name, email, phone, skills, jobTitle,experience }= this.state.user;
    return (
      <div>
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
            {jobseekers.map(jobseeker => {
              const { _id, name, skills, experience, appliedDate } = jobseeker;
              // console.log(name);
              return (
                <tr key={_id}>
                  <td>{name}</td>
                  <td>{skills}</td>
                  <td>{experience}</td>
                  <td>{appliedDate}</td>
                  <td>
                    <a
                      type="button"
                      className="btn btn-info"
                      data-toggle="modal"
                      data-target="#myModal"
                      onClick={this.viewDetails.bind(this,_id)}
                    >
                      View Details
                    </a>
                  </td>
                  <td>
                    <button className="btn btn-success">Short list</button>
                  </td>
                  <td>
                    <button className="btn btn-danger">Reject</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="row">
                <div className="col-xs-12">
                  <div id="myModal" className="modal fade" role="dialog">
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
                          <h4 className="modal-title"> {name}  Profile</h4>
                        </div>
                        <div className="modal-body">
                          <div className="row">
                            <div className="col-xs-6">
                              <h5>Contact Number</h5>
                            </div>
                            <div className="col-xs-6">
                              <p> {phone} </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-6">
                              <h5>Email</h5>
                            </div>
                            <div className="col-xs-6">
                              <p> {email} </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-6">
                              <h5>Skills</h5>
                            </div>
                            <div className="col-xs-6">
                              <p> {skills} </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-xs-6">
                              <h5>Experience</h5>
                            </div>
                            <div className="col-xs-6">
                              <p> {experience} </p>
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
                </div>
              </div>
              
      </div>
    );
  }
}

export default Table;