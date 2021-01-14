import React from "react";
import { Carousel } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import style from "./reviews.module.css";
import data from "../../data.json";
import { Review } from "./Review";
const renderReviews = data.reviews.map((review) => (
  <Carousel.Item key={review.id}>
    <Review review={review} />
  </Carousel.Item>
));
const reviews = () => {
  return (
    <Carousel
      className={style["carousel-indicators"]}
      nextIcon={
        <span aria-hidden="true" className={style["next-icon"]}>
          {" "}
          <FontAwesomeIcon icon={faChevronRight} size="3x" />
        </span>
      }
      prevIcon={
        <span aria-hidden="true" className={style["prev-icon"]}>
          {" "}
          <FontAwesomeIcon icon={faChevronLeft} size="3x" />
        </span>
      }
    >
      {renderReviews}
    </Carousel>
  );
};

export default reviews;
