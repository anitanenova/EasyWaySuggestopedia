import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";

import { ICourse } from "../../../../declarations/interfaces";
import "../../../../extensions/cloudinary/cloudinaryUrl";
import { CourseDetails } from "../../../Courses/CourseDetails";
import { EndTxtSymbol } from "../../../../components/EndTxtSymbol";
import Schedule from "../../../../containers/Schedule/Schedule";
import data from "../../../../data.json";
const courseDetails = (props) => {
  const course = data.courses.find(
    (course) => course.id === props.match.params.id
  ) as ICourse;

  let backgroundImage = course.image.addCloudinaryProps("h_650");
  let fullTitle = course.title + " " + course.levelSymbol;
  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={fullTitle}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Container>
        <p className={`${"txt-big"} ${"txt-justify"}`}>
          Методът Сугестопедия е обявен от ЮНЕСКО още през 70-те за най-лесен
          начин за учене без напрежение. С него учите не само над три пъти
          по-бързо, но помните по-дълготрайно и преодолявате езиковата бариера.
          Сугестопедията е дело на българският учен проф. д-р Георги Лозанов.
          Сугестопедията е метод, който е ефективен във всяка възраст.
        </p>
        <ul className={`${"txt-big"} ${"txt-justify"}`}>
          <li>
            Сугестопедията развива и много други качества: творческо мислене,
            говорене пред публика, общуване.
          </li>
          <li>
            Сугестопедията ни освобождава от бариерите и ни открива света по
            различен начин.
          </li>
          <li>
            Този курс е не просто учене на английски, а първата стъпка към новия
            ви живот!
          </li>
        </ul>
        <EndTxtSymbol />
        <div className={"margin-bottom-1rem"}></div>
        <Row>
          <CourseDetails course={course} />
        </Row>

        <div className={"margin-bottom-big-lg"}></div>
        <p className={`${"txt-title-page-big"} ${"txt-center"}`}>
          График на курса {course.title} {course.levelSymbol}
        </p>
        <Row>
          <Schedule
            levelSymbol={course.levelSymbol}
            scheduleType={course.type}
          />
        </Row>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default courseDetails;
