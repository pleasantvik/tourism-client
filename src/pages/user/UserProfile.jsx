import React from "react";
import { Link } from "react-router-dom";
import { UpdateProfileForm } from "./UpdateProfileForm";

export const UserProfile = () => {
  return (
    <div className="user-view">
      <nav className="user-view__menu">
        <ul className="side-nav">
          <li className="side-nav--active">
            <Link to="/settings">
              <svg>
                <use xlinkHref="img/icons.svg#icon-settings" />
              </svg>
              Settings
            </Link>
          </li>
          <li>
            <Link to="/bookings">
              <svg>
                <use xlinkHref="img/icons.svg#icon-briefcase" />
              </svg>
              My bookings
            </Link>
          </li>
          <li>
            <Link to="/reviews">
              <svg>
                <use xlinkHref="img/icons.svg#icon-star" />
              </svg>
              My reviews
            </Link>
          </li>
          <li>
            <Link to="billing">
              <svg>
                <use xlinkHref="img/icons.svg#icon-credit-card" />
              </svg>
              Billing
            </Link>
          </li>
        </ul>
        <div className="admin-nav">
          <h5 className="admin-nav__heading">Admin</h5>
          <ul className="side-nav">
            <li>
              <Link to="/">
                <svg>
                  <use xlinkHref="img/icons.svg#icon-map" />
                </svg>
                Manage tours
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg>
                  <use xlinkHref="img/icons.svg#icon-users" />
                </svg>
                Manage users
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg>
                  <use xlinkHref="img/icons.svg#icon-star" />
                </svg>
                Manage reviews
              </Link>
            </li>
            <li>
              <Link to="/">
                <svg>
                  <use xlinkHref="img/icons.svg#icon-briefcase" />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="user-view__content">
        <UpdateProfileForm />
        <div className="line">&nbsp;</div>
        <div className="user-view__form-container">
          <h2 className="heading-secondary ma-bt-md">Password change</h2>
          <form className="form form-user-settings">
            <div className="form__group">
              <label className="form__label" htmlFor="password-current">
                Current password
              </label>
              <input
                className="form__input"
                id="password-current"
                type="password"
                placeholder="••••••••"
                required="required"
                minLength={8}
              />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="password">
                New password
              </label>
              <input
                className="form__input"
                id="password"
                type="password"
                placeholder="••••••••"
                required="required"
                minLength={8}
              />
            </div>
            <div className="form__group ma-bt-lg">
              <label className="form__label" htmlFor="password-confirm">
                Confirm password
              </label>
              <input
                className="form__input"
                id="password-confirm"
                type="password"
                placeholder="••••••••"
                required="required"
                minLength={8}
              />
            </div>
            <div className="form__group right">
              <button className="btn btn--small btn--green">
                Save password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
