import React, { Fragment } from "react";

export const TourDescription = ({ tour }) => {
  const reviewStar = [1, 2, 3, 4, 5];
  return (
    <Fragment>
      <section className="section-description">
        <div className="overview-box">
          <div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-calendar" />
                </svg>
                <span className="overview-box__label">Next date</span>
                <span className="overview-box__text">
                  {tour?.startDates[0]?.toLocaleString("en-us", {
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-trending-up" />
                </svg>
                <span className="overview-box__label">Difficulty</span>
                <span className="overview-box__text">{tour?.difficulty}</span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-user" />
                </svg>
                <span className="overview-box__label">Participants</span>
                <span className="overview-box__text">
                  {tour?.maxGroupSize} people
                </span>
              </div>
              <div className="overview-box__detail">
                <svg className="overview-box__icon">
                  <use xlinkHref="/img/icons.svg#icon-star" />
                </svg>
                <span className="overview-box__label">Rating</span>
                <span className="overview-box__text">
                  {tour?.ratingsAverage} / 5
                </span>
              </div>
            </div>
            <div className="overview-box__group">
              <h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
              {tour?.guides.map((el) => (
                <div className="overview-box__detail" key={el.name}>
                  <img
                    src={`/img/users/${el.photo}`}
                    alt={el.name}
                    className="overview-box__img"
                  />
                  <span className="overview-box__label">
                    {el.role === "lead-guide"
                      ? `${el.role}`
                      : `TOUR ${el.role}`}
                  </span>
                  <span className="overview-box__text">{el.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="description-box">
          <h2 className="heading-secondary ma-bt-lg">
            About {tour?.name} tour
          </h2>
          {tour?.description.split("\n").map((el, index) => (
            <p className="description__text" key={index}>
              {el}
            </p>
          ))}
        </div>
      </section>
      <section className="section-pictures">
        {tour?.images.map((el, index) => (
          <div className="picture-box" key={el}>
            <img
              className={`picture-box__img picture-box__img--${index + 1}`}
              src={`/img/tours/${el}`}
              alt="The Park Camper Tour 1"
            />
          </div>
        ))}
      </section>
      <section className="section-reviews">
        <div className="reviews">
          {tour?.reviews?.map((el) => (
            <div className="reviews__card" key={el._id}>
              <div className="reviews__avatar">
                <img
                  src={`/img/users/${el?.user?.photo}`}
                  alt={el?.user?.name}
                  className="reviews__avatar-img"
                />
                <h6 className="reviews__user">{el?.user?.name}</h6>
              </div>
              <p className="reviews__text">{el?.review}.</p>
              <div className="reviews__rating">
                {reviewStar.map((r) => (
                  <svg
                    className={`reviews__star reviews__star--${
                      r < el?.rating ? "active" : "inactive"
                    }`}
                    key={r}
                  >
                    <use xlinkHref="/img/icons.svg#icon-star" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section-cta">
        <div className="cta">
          <div className="cta__img cta__img--logo">
            <img src="/img/logo-white.png" alt="Natours logo" />
          </div>
          <img
            src="/img/tours/tour-5-2.jpg"
            alt=""
            className="cta__img cta__img--1"
          />
          <img
            src="/img/tours/tour-5-1.jpg"
            alt=""
            className="cta__img cta__img--2"
          />
          <div className="cta__content">
            <h2 className="heading-secondary">What are you waiting for?</h2>
            <p className="cta__text">
              {tour?.duration} days. 1 adventure. Infinite memories. Make it
              yours today!
            </p>
            <button className="btn btn--green span-all-rows">
              Book tour now!
            </button>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
