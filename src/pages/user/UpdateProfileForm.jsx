import { useFormik } from "formik";
import { profileUpdate } from "pages/auth/schema";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUpdateProfileMutation } from "store/apiSlice";
import {
  selectCurrentToken,
  selectCurrentUser,
  setCredential,
} from "store/authSlice";
import LoadingSpinner from "utils/Spinner";
import { showToast } from "utils/tools";

export const UpdateProfileForm = () => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [updateUserProfile, { isLoading, isError, error, isSuccess }] =
    useUpdateProfileMutation();
  const formik = useFormik({
    initialValues: {
      email: user?.user ? user?.user?.email : "",
      name: user?.user?.name,
    },
    validationSchema: profileUpdate,
    onSubmit: (values) => {
      console.log(values);
      submitForm(values);
    },
  });

  const canSave = !!formik.values.name && !!formik.values.email && !isLoading;

  const submitForm = async (values) => {
    if (canSave) {
      try {
        const res = await updateUserProfile({ ...values }).unwrap();
        // formik.values.email = "";
        // formik.values.name = "";

        dispatch(setCredential({ user: res?.data, accesstoken: token }));
        // localStorage.setItem("token", res?.token);
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
  if (isSuccess) {
    showToast("SUCCESS", "Welcome");
  }
  return (
    <div className="user-view__form-container">
      <h2 className="heading-secondary ma-bt-md">Your account settings</h2>
      {isLoading && <LoadingSpinner />}

      <form className="form form-user-data" onSubmit={formik.handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            type="text"
            {...formik.getFieldProps("name")}
          />

          {formik.touched.name && formik.errors.name ? (
            <div
              style={{
                color: "#ff7730",
                fontSize: "1.4rem",
              }}
            >
              {formik.errors.name}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="form__group ma-bt-md">
          <label htmlFor="password" className="form__label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="you@example.com"
            {...formik.getFieldProps("email")}
            // {...errorHelper(formik, "password")}
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

        <div className="form__group form__photo-upload">
          <img
            src={`/img/users/${
              user?.user?.photo ? user?.user?.photo : "default.jpg"
            }`}
            alt=""
            className="nav__user-img"
          />
          <button className="btn-text">Choose new photo</button>
        </div>
        <div className="form__group right">
          <button
            className="btn btn--small btn--green"
            type="submit"
            disabled={!canSave}
          >
            Save settings
          </button>
        </div>
      </form>
    </div>
  );
};
