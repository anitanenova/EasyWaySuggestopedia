import React from "react";
import { Col, Row } from "react-bootstrap";

import { ScheduleCard } from "./ScheduleCard";
import { IAppointment } from "../../declarations/interfaces";

interface IAppointmentsProps {
  schedules: IAppointment[];
  isLoading: boolean;
}

const ScheduleCards = (props: IAppointmentsProps) => {
  let schedules: JSX.Element[] = props.schedules.map((item) => {
    return <ScheduleCard key={item.id} schedule={item} />;
  });

  if (props.isLoading) {
    schedules = [
      <Col md="12">
        <p className={"txt-title-medium"}></p>
        <p>Зареждане...</p>
      </Col>,
    ];
  } else if (schedules.length == 0) {
    schedules = [
      <Col md="12">
        <p className={"txt-title-medium"}></p>
        <p>Няма налични курсове!</p>
      </Col>,
    ];
  }

  return (
    <Col md="12">
      <Row>{schedules}</Row>
    </Col>
  );
};
export default ScheduleCards;
