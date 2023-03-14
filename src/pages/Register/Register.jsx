import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const navigate = useNavigate()
  return (
    <div class="container">
      <div class="form_box">
        <h1 id="title"> Sing Up</h1>
        <form>
          <div class="input_group">
            <div class="input_filed" id="nameFiled">
              <input type="password" placeholder="Password" />
            </div>

            <div class="input_filed">
              <input type="email" placeholder="Email" />
            </div>

            <div class="input_filed">
              <input type="confirm_password" placeholder="Confirm password" />
            </div>
            <Link to='/login'>
             <p>
              Have an Account 
            </p>
            </Link>
           
          </div>

          <div class="btn_filed">
            <button id="signupBtn" type="button">
              {" "}
              Create Account
            </button>
            <button id="signinBtn" type="button" class="disable" onClick={()=>navigate('/login')}>
              {" "}
              Sing in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
