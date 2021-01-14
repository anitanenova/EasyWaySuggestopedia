import React from "react";
import { Col, Row } from "react-bootstrap";

import { TypeCourse } from "./TypeCourse";
import data from "../../../data.json";
import { ScheduleType, ICourse } from "../../../declarations/interfaces";

interface ICourseProps {
  type: ScheduleType;
}

const typeCourses = (props: ICourseProps) => {
  const renderCourses = (data.courses as ICourse[])
    .filter((course) => course.type === props.type)
    .map((course) => <TypeCourse key={course.id} course={course} />);
  return (
    <Col md="12">
      <Row>{renderCourses}</Row>
    </Col>
  );
};
export default typeCourses;
