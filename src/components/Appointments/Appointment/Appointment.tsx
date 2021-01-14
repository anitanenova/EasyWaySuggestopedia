import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import style from "./appointment.module.css";
import { IAppointment } from "../../../declarations/interfaces";
import moment from "moment";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface IAppointmentProp extends RouteComponentProps {
  schedule: IAppointment;
}

const Appointment = (props: IAppointmentProp) => {
  const schedule: IAppointment = props.schedule;

  const clickHendler = (e) => {
    props.history.push(
      `${props.match.url}/apply/signing-up/${props.schedule.id}`
    );
  };

  return (
    <Col onClick={clickHendler} lg="6" md="12">
      <div className={style["appointment-box"]}>
        <Row>
          <Col xs="3" md="4">
            <div className={style["date-info"]}>
              <span>
                {moment(schedule.dateFrom).format("DD")}.
                {moment(schedule.dateFrom).format("MM")}
              </span>
              <span>{moment(schedule.dateFrom).format("gggg")} </span>
            </div>
          </Col>
          <Col xs="9" md="8">
            <div className={style["appointment-details-box"]}>
              <p
                className={`${"txt-title-big"} ${"txt-medium-rem"} ${"txt-title-big-sm"} ${"txt-bold"}`}
              >
                {schedule.name} {schedule.levelSymbol}
              </p>
              <p
                className={`${"txt-big"}  ${"txt-medium-rem"} ${"txt-italic"}`}
              >
                {schedule.description}
              </p>
              <p
                className={`${"txt-big"}  ${"txt-medium-rem"} ${"txt-bold"} ${"position-bottom"} ${"txt-italic"}`}
              >
                <FontAwesomeIcon
                  className={style["appointment-details-icon"]}
                  icon={faCalendarAlt}
                  size="lg"
                />
                {moment(schedule.dateFrom).format("L")} -{" "}
                {moment(schedule.dateTo).format("L")}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
export default withRouter(Appointment);
