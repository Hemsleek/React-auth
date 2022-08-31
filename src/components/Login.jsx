import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <span className="signupOption">
        Don't have an Account?{" "}
        <Link className="underline" to="/signup">
          sign up instead
        </Link>
      </span>
    </div>
  );
};
export default Login;
