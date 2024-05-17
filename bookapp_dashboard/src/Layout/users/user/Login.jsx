import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  LOGIN_USER,
} from "../action/useraction";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let passvalidate = useSelector((state) => {
    return state.UserReducer.user;
  });
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: "",
      password: "",
    },
    onSubmit: ({ id, password }) => {
      dispatch(loginUser({ password, id }));
      navigate("/");
    },
  });

  return (
    <div className="h-50 w-50 ml-5 mt-5">
      <form onSubmit={formik.handleSubmit} className="d-block">
        <h3>Login</h3>

        <div className="form-group ">
          <label>UserId</label>
          <input
            id="id"
            name="id"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.id}
            className="form-control"
            placeholder="Enter User ID"
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
            placeholder="Password"
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>
      </form>
    </div>
  );
};
