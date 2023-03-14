import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div class="container">
      <div class="form_box">
        <h1 id="title"> Login</h1>
        <form>
          <div class="input_group">
            <div class="input_filed" id="nameFiled">
              <input type="password" placeholder="Password" />
            </div>

            <div class="input_filed">
              <input type="email" placeholder="Email" />
            </div>

            <p>
              Lost password <a href="#">Click Here!</a>
            </p>
          </div>

          <div class="btn_filed">
            <button
              id="signupBtn"
              type="button"
              className="disable"
              onClick={() => navigate("/register")}
            >
              {" "}
              Sing Up
            </button>

            <button id="signinBtn" type="button" class="disable2">
              {" "}
              Sing in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
