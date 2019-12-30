import React, { Component } from "react";

class Table extends Component {
  render() {
    const { jobseekers } = this.props;
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
                    <button
                      type="button"
                      className="btn btn-info"
                      data-toggle="modal"
                      data-target="#myModal"
                    >
                      View Details
                    </button>
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
      </div>
    );
  }
}
export default Table;