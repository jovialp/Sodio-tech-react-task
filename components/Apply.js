import React, { Component } from 'react';
// const API_ADDRESS = 'https://sodiotask.herokuapp.com/User/Registration';

class Apply extends Component {

    render() {
        return (
          <div className="form-bg">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <h3>Apply for job</h3>
                        <div className="apply-form">
                            <form action="https://sodiotask.herokuapp.com/User/Registration" method="post">
                                <div className="button-form">
                                    <div className="col-xs-12 col-md-3">
                                        <label>Full Name</label>
                                    </div>
                                    <div className="col-xs-12 col-md-9">
                                        <input type="text" name="name" className="form-control" required />
                                    </div>
                                </div>
                                <div className="col-xs-12"><div className="line-h"></div></div>
                                <div className="button-form">
                                    <div className="col-xs-12 col-md-3">
                                        <label>Email address</label>
                                    </div>
                                    <div className="col-xs-12 col-md-9">
                                        <input type="email" name="email" className="form-control" placeholder="example@email.com" required />
                                    </div>
                                </div>

                                <div className="col-xs-12"><div className="line-h"></div></div>
                                <div className="button-form">
                                    <div className="col-xs-12 col-md-3">
                                        <label>Contacting number</label>
                                    </div>
                                    <div className="col-xs-12 col-md-9">
                                        <input type="tel" name="phone" className="form-control" placeholder="+91 9988554344" required />
                                    </div>
                                </div>
                                <div className="col-xs-12"><div className="line-h"></div></div>
                                <div className="button-form">
                                    <div className="col-xs-12 col-md-3">
                                        <label>Applying for job</label>
                                    </div>
                                    <div className="col-xs-12 col-md-9">
                                        <select name="jobTitle" id="jobTitle" className="form-control">
                                            <option value="none" defaultValue>--- Select  ---</option>
                                            <option value="node">Node.js Developer</option>
                                            <option value="mean">MEAN Stack Developer</option>
                                            <option value="full">FULL Stack Developer</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xs-12"><div className="line-h"></div></div>
                                <div className="button-form">
                                    <div className="col-xs-12 col-md-3">
                                        <label>Experience</label>
                                    </div>
                                    <div className="col-xs-12 col-md-9">
                                        <input type="text" name="experience" className="form-control" placeholder="Experience (2 years, 3 months)" required />
                                    </div>
                                </div>
                                <div className="col-xs-12"><div className="line-h"></div></div>

                                <div className="button-form">
                                    <div className="col-xs-12 col-md-3">
                                        <label>Technical Skills</label>
                                    </div>
                                    <div className="col-xs-12 col-md-9">
                                        <textarea name="skills" id="skills" className="form-control" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="col-xs-12"><div className="line-h"></div></div>

                                <div className="button-submitform">
                                    <div className="">
                                        <input type="submit" value="Send Application" className="btn btn-info" />
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Apply;