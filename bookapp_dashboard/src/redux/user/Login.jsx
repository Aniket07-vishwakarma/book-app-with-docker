import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUser,
  loginUser,
  loginUserFailure,
  loginUserSuccess,
  LOGIN_USER,
} from "../action/booksaction";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
export const LoginUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let login = useSelector((state) => {
    return state.BookReducer.login;
  });
  console.log();
  if (login) {
    navigate("/books");
  }
  console.log(login, "login value");
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) => {
      dispatch(loginUser({ password, email }));
      navigate("/login");
    },
  });

  return (
    <div className="d-flex justify-content-center align-items-center container">
      <div className="h-70 mt-3 w-20 ml-5 mt-5 ">
        <div
          className="rounded-3 border border-dark"
          style={{ padding: "35px" }}
        >
          <form onSubmit={formik.handleSubmit} className="d-block ">
            <h3>Login</h3>

            <div className="form-group ">
              <label>Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.id}
                className="form-control"
                placeholder="Enter Email"
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
                placeholder="Password"
                required
              />
            </div>
            <br />
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
