import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";

import { TypeCourses } from "../../../Courses";
import { ScheduleType } from "../../../../declarations/interfaces";

import style from "./courseChildrens.module.css";

const courseChildrens = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671615/CommonImages/course-childrens-bg_a3k4e6.jpg";
  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="bottom"
        title={"Курсове за деца"}
        className={style["bg-childrens-courses"]}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Container>
        <Row>
          <TypeCourses type={ScheduleType.Child} />
        </Row>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default courseChildrens;
