import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import "../../../../extensions/cloudinary/cloudinaryUrl";

import style from "./typeCourse.module.css";
import { ICourse } from "../../../../declarations/interfaces";

interface ICourseProps {
  course: ICourse;
}

const typeCourse = (props: ICourseProps) => {
  const { id, title, description, image, levelSymbol } = props.course;

  const img = {
    backgroundImage: `url(${image.addCloudinaryProps("h_250")})`,
  };

  return (
    <Col lg="6" md="12">
      <div className={style["type-course-box"]}>
        <input hidden={true} id={id} />
        <Row>
          <Col md="6" sm="6" xs="12">
            <div style={img} className={style["course-bg-image"]}></div>
          </Col>
          <Col md="6" sm="6" xs="12">
            <div className={style["course-details-box"]}>
              <p className={`${"txt-title-medium"} ${"txt-bold"}`}>
                {title} {levelSymbol}
              </p>
              <p className={`${"txt-big"} ${"txt-italic"}`}>{description}</p>
              <Link to={`/course/${id}`} className={"btn-primary-long"}>
                виж още <FontAwesomeIcon icon={faCaretRight} size="sm" />
              </Link>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default typeCourse;
