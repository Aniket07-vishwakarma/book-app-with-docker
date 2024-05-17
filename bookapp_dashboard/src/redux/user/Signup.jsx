import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert2";
import {
  createUser,
  createUserFailure,
  createUserSuccess,
} from "../action/booksaction";
import { useNavigate, useParams } from "react-router-dom";
//import './addeditproduct.css'

export const Signup = () => {
  const params = useParams();
  console.log("MATCH OBJECT ADDEDIT PRODUCT is", params.usid);
  //const loading = useSelector(state => state.ProductReducer.loading)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSuccess = (data) => {
    console.log("IN ADD EDIT SUCCESS" + JSON.stringify(data));
    dispatch(createUserSuccess());
    swal.fire({
      position: "top",
      icon: "success",
      title: "User Added Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log("Hi");
    navigate("/login");
  };
  const onFailure = (data) => {
    console.log(data);
    dispatch(createUserFailure());
    navigate("/");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      name: "",
      password: "",
    },

    onSubmit: ({ email, name, password }) => {
      console.log("ADD/EDIT PRODUCT");
      dispatch(createUser({ email, name, password }, onSuccess, onFailure));
      navigate("/signup");
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div
        className="h-70 mt-3 w-30 ml-5 mt-5 rounded-3 border border-dark"
        style={{ padding: "35px 55px 35px 55px" }}
      >
        <form onSubmit={formik.handleSubmit} className="d-block">
          <h3>Register</h3>
          <div className="form-group ">
            <label>Email ID</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.id}
              className="form-control"
              placeholder="Enter Email ID"
              required
            />
          </div>

          <div className="form-group ">
            <label>User Name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              className="form-control"
              placeholder="Enter User Name"
              required
            />
          </div>

          <div className="form-group ">
            <label>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="form-control"
              placeholder="Enter Password"
              required
            />
          </div>
          <br />
          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Adduser
          </button>
        </form>
      </div>
    </div>
  );
};
