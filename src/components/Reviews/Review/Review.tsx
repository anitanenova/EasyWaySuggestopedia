import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";

import style from "./review.module.css";
import { IReview } from "../../../declarations/interfaces";

interface IReviewProps {
  review: IReview;
}

const Review = (props: IReviewProps) => {
  return (
    <div className={style["carousel-bg"]}>
      <Carousel.Caption>
        <Row>
          <Col xl="2" lg="2" md="3">
            <input id={props.review.id} type="hidden" />
            <img
              className={style["img-circle"]}
              alt="profile-pic.png"
              src={props.review.image}
            />
            <p className={`${"txt-big"} ${"txt-bold"}`}>{props.review.name}</p>
            <p
              className={` ${"txt-big"}  ${"txt-italic"} ${
                style["txt-profession"]
              }`}
            >
              {props.review.position}
            </p>
          </Col>
          <Col xl="10" lg="10" md="9">
            <p
              className={`${"txt-title-medium"} ${
                style["txt-review"]
              } ${"txt-justify"} ${"txt-italic"}`}
            >
              {props.review.description}
            </p>
          </Col>
        </Row>
      </Carousel.Caption>
    </div>
  );
};

export default Review;
