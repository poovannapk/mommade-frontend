import React from 'react';
import './Signup.css'

const Signup = () => {
    return (
        <div>
             <>
        <form>
                <h3>Sign Up</h3>

                 <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label>Phone Number </label>
                    <input type="text" className="form-control" placeholder="Enter phone number" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group-password">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group-password">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter confirm password" />
                </div>

                <div className="form-group">
                    <button type="submit" className="btnPrimary">Submit</button>
                </div>

                {/* <button type="submit" className="btnPrimary">Submit</button> */}
            </form>
            </>
        </div>
    );
};

export default Signup;