import React from "react";

export const TourDescription = ({ tour }) => {
  return (
    <section className="section-description">
      <div className="overview-box">
        <div>
          <div className="overview-box__group">
            <h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="img/icons.svg#icon-calendar" />
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
                <use xlinkHref="img/icons.svg#icon-trending-up" />
              </svg>
              <span className="overview-box__label">Difficulty</span>
              <span className="overview-box__text">{tour?.difficulty}</span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="img/icons.svg#icon-user" />
              </svg>
              <span className="overview-box__label">Participants</span>
              <span className="overview-box__text">
                {tour?.maxGroupSize} people
              </span>
            </div>
            <div className="overview-box__detail">
              <svg className="overview-box__icon">
                <use xlinkHref="img/icons.svg#icon-star" />
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
              <div className="overview-box__detail">
                <img
                  src={`/img/users/${el.photo}`}
                  alt="Lead guide"
                  className="overview-box__img"
                />
                <span className="overview-box__label">{el.role}</span>
                <span className="overview-box__text">{el.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="description-box">
        <h2 className="heading-secondary ma-bt-lg">About {tour?.name} tour</h2>
        <p className="description__text">{tour?.description}</p>
      </div>
    </section>
  );
};
