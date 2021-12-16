import axios from "../../util/axiosInstance";
import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import FormWrapper from '../../components/Common/Wrapper';
import ErrorMessage from '../../components/Common/ErrorMessage';

export default function Register(){

    const navigate = useNavigate();
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")


    const handleSubmit = async (event) => {
        console.log("Submit the form");
    }


    return (
        <FormWrapper>
        <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
              <div className="form-group">
                  <label>First name</label>
                  <input type="text" name="firstname"  className="form-control" placeholder="First name" />
              </div>
  
              <div className="form-group">
                  <label>Last name</label>
                  <input type="text" name="lastname"   className="form-control" placeholder="Last name" />
              </div>
  
              <div className="form-group">
                  <label>Username</label>
                  <input type="text"  name="username"  className="form-control" placeholder="Username" />
              </div>
  
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email"  className="form-control" placeholder="Enter email" />
              </div>
  
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password" />
              </div>
  
              <div className="form-group">
                  <label>Re-Password</label>
                  <input type="password" name="repassword" className="form-control" placeholder="Enter password" />
              </div>
              <ErrorMessage isVisible={isError} errorMessage={errorMessage} />
              <button className="btn btn-primary btn-block">Sign Up</button>
              <p className="forgot-password text-right">
                  Already registered <Link to="/login">sign in?</Link>
              </p>
  
        </form>
        </FormWrapper>
    )
}