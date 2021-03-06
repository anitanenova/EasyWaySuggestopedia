import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";

import { ScheduleType } from "../../../../declarations/interfaces";
import Schedule from "../../../../containers/Schedule/Schedule";

const scheduleAdults = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671616/CommonImages/schedule-bg_l3j4wy.png";

  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"График на курсовете за възрастни"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <p className={`${"txt-title-page-big"} ${"txt-center"}`}>
        График на курсовете за възрастни
      </p>
      <Container>
        <Row>
          <Schedule scheduleType={ScheduleType.Adult} />
        </Row>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default scheduleAdults;
