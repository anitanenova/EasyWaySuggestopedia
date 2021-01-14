import React from "react";
import { Col } from "react-bootstrap";
import { ICourse } from "../../../declarations/interfaces";

interface ICourseDetailsProps {
  course: ICourse;
}

const courseDetails = (props: ICourseDetailsProps) => {
  return (
    <Col md="12">
      <p className={`${"txt-title-big"} ${"txt-bold"}`}>
        {props.course.title} {props.course.levelSymbol}
      </p>
      <p className={`${"txt-big"} ${"txt-justify"}`}>
        <div
          dangerouslySetInnerHTML={{ __html: props.course.description }}
        ></div>
      </p>
    </Col>
  );
};
export default courseDetails;
