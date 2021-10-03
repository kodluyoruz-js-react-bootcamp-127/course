import React from "react";

import PropTypes from "prop-types";

import "./Card.css";

export default function Card({ user, date, text, userImgUrl, imgUrl }) {
  return (
    <div className="card-container">
      <div className="header">
        <img src={user.imgUrl} />
        <div className="header-texts">
          <span>{user.name}</span>
          <span>{date}</span>
        </div>
        <button>More</button>
      </div>
      <div className="content">
        <img src={imgUrl} />
        <p>{text}</p>
      </div>
      <div className="footer">
        <div>
          <button>Like</button>
          <button>Share</button>
        </div>
        <button>More</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string,
  }),
  date: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  userImgUrl: PropTypes.string,
  text: PropTypes.string,
  imgUrl: PropTypes.string,
};

Card.defaultProps = {
  userImgUrl: "https://via.placeholder.com/150",
  imgUrl: "https://via.placeholder.com/150",
};
