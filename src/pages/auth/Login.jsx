import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "store/apiSlice";
import { setCredential } from "store/authSlice";
import LoadingSpinner from "utils/Spinner";
import { showAlert, showToast } from "utils/tools";
import { signin } from "./schema";

export const Login = (props) => {
  const dispatch = useDispatch();
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "test@mail.com",
      password: "test1234",
    },
    validationSchema: signin,
    onSubmit: (values) => {
      console.log(values);
      submitForm(values);
    },
  });
  const canSave =
    !!formik.values.password && !!formik.values.email && !isLoading;

  const submitForm = async (values) => {
    if (canSave) {
      try {
        const res = await loginUser({ ...values }).unwrap();
        formik.values.email = "";
        formik.values.password = "";

        dispatch(setCredential({ user: res?.data, accesstoken: res?.token }));
        localStorage.setItem("token", res?.token);
        navigate("/");
        // props.onLogin();
      } catch (error) {
        console.log("Failed to save post");
        console.log(error);
        const msg =
          error?.data?.error?.message ||
          error?.data?.message ||
          "Something went wrong! Try again";
        showToast("ERROR", msg);
      } finally {
        // setReqStatus('idle')
      }
    }
  };

  if (isError) {
    // props.show();
  }
  if (isSuccess) {
    showToast("SUCCESS", "Welcome");
    showAlert("success", "welcome");
  }

  return (
    <div className="login-form">
      <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <form className="form" onSubmit={formik.handleSubmit}>
          <div className="form__group">
            <label htmlFor="email" className="form__label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="you@example.com"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <div
                style={{
                  color: "#ff7730",
                  fontSize: "1.4rem",
                }}
              >
                {formik.errors.email}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form__group ma-bt-md">
            <label htmlFor="password" className="form__label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form__input"
              placeholder="********"
              {...formik.getFieldProps("password")}
              // {...errorHelper(formik, "password")}
            />
            {formik.touched.password && formik.errors.password ? (
              <div
                style={{
                  color: "#ff7730",
                  fontSize: "1.4rem",
                }}
              >
                {formik.errors.password}
              </div>
            ) : (
              ""
            )}
          </div>

          <button type="submit" className="btn btn--green" disabled={!canSave}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};
