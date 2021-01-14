import React from "react";
import { Col, Row } from "react-bootstrap";

import { Appointment } from "./Appointment";
import { IAppointment } from "../../declarations/interfaces";

interface IAppointmentsProps {
  schedules: IAppointment[];
  isLoading: boolean;
}

const Appointments = (props: IAppointmentsProps) => {
  let schedules: JSX.Element[] = props.schedules.map((item) => {
    return <Appointment key={item.id} schedule={item} />;
  });

  if (props.isLoading) {
    schedules = [
      <Col md="12">
        <p className={"txt-title-medium"}>Зареждане...</p>
      </Col>,
    ];
  } else if (schedules.length == 0) {
    schedules = [
      <Col md="12">
        <p className={"txt-title-medium"}>Няма наличен график!</p>
      </Col>,
    ];
  }

  return (
    <Col md="12">
      <Row>{schedules}</Row>
    </Col>
  );
};
export default Appointments;
