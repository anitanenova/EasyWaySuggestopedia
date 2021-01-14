import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";

import { TypeCourses } from "../../../Courses";
import { ScheduleType } from "../../../../declarations/interfaces";
const courseAdults = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671614/CommonImages/courses-adults-bg_n1wbnv.jpg";

  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"Курсове за възрастни"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Container>
        <Row>
          <TypeCourses type={ScheduleType.Adult} />
        </Row>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default courseAdults;
