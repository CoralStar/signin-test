import React from "react";
import "./style.css";

function Login() {
  return (
    <div className="loginColors login template d-flex vh-100">
      <div className="form_container p-5 rounded text-white">
        <form>
          <h3 className="text-center">Sign In</h3>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remember Me
            </label>
          </div>
          <div className="d-grid mt-2">
            <button className="btn btn-primary">Sign In</button>
          </div>
          <p className="text-end mt-2">
            <a href="/signup">Forgot Password?</a>
            <a href="/signup" className="ms-2">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
