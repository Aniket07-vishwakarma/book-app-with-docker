import React from "react";

const Signup = () => {
  return (
    <>
      {/* Button trigger modal  */}
      <button
        type="button"
        className="btn btn-autline-primary fw-bold"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Signup
      </button>

      {/* SignUp Page */}

      <div className="container col-md-6">
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" className="form-control" id="signUpEmail" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="signUpPassword"
            />
          </div>
          <div className="mb-3 form-check"></div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
