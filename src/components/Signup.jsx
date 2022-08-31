import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="FullName" name="fullname" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          required
        />
        <button type="submit">Signup</button>
      </form>
      <span>
        Already have an account?{" "}
        <Link className="underline" to="/login">
          login
        </Link>
      </span>
    </div>
  );
};

export default Signup;
