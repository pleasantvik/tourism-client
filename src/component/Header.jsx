import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, selectCurrentToken, selectCurrentUser } from "store/authSlice";
import { showToast } from "utils/tools";

export const Header = (props) => {
  const user = useSelector(selectCurrentUser);
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await axios.get("/api/v1/users/logout");
    localStorage.removeItem("token");
    dispatch(logout());
    console.log("log out");
    navigate("/");
    showToast("SUCCESS", "Logout successfully! See you later");
  };

  // const user = localStorage.getItem("currentUser");
  // const { data: user, isSuccess, isLoading } = useGetAuthQuery();

  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        {/* <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use xlinkHref="img/icons.svg#icon-search" />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form> */}
      </nav>
      <div className="header__logo">
        <img src="/img/logo-white.png" alt="Natours logo" />
      </div>
      <nav className="nav nav--user">
        {token && (
          <button className="nav__el" onClick={handleLogout}>
            Log out
          </button>
        )}

        <Link to="/" className="nav__el">
          <img
            src={`/img/users/${
              user?.user?.photo ? user?.user?.photo : "default.jpg"
            }`}
            alt=""
            className="nav__user-img"
          />
          <span>{user?.user?.name?.split(" ")[0]}</span>
        </Link>
        {!token && (
          <Link to="/login">
            <button className="nav__el">Log in</button>
          </Link>
        )}
        {!token && (
          <Link to="/signup">
            <button className="nav__el nav__el--cta">Sign up</button>
          </Link>
        )}
      </nav>
    </header>
  );
};
