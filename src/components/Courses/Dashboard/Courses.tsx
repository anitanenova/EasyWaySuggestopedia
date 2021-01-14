import React from "react";
import style from "./style.module.css";
import { Container, Row, Col } from "react-bootstrap";
import { Course } from "./Course";
import { ICourse, ScheduleType } from "../../../declarations/interfaces";
import data from "../../../data.json";

const courses = (props) => {
  const coursesByType = (type: ScheduleType): ICourse[] => {
    return (data.courses as ICourse[]).filter((x) => x.type === type);
  };

  return (
    <div className={style["home-courses-container"]}>
      <Container fluid="md">
        <Row>
          <Col xl="1"></Col>
          <Col xl="10" lg="12">
            <div className={style["courses-box"]}>
              <Row>
                <Course
                  header="курсове за възрастни"
                  direction="/course-adults"
                  courses={coursesByType(ScheduleType.Adult)}
                />
                <Course
                  header="курсове за деца"
                  direction="/course-childrens"
                  courses={coursesByType(ScheduleType.Child)}
                />
              </Row>
            </div>
          </Col>
          <Col xl="1"></Col>
        </Row>
      </Container>
    </div>
  );
};
export default courses;
