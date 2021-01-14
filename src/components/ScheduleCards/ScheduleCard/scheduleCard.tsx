import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ScheduleSymbol } from "../ScheduleSymbol";
import { ScheduleDescription } from "../ScheduleDescription";

import { ApplyContext } from "../../../context/Apply";

import style from "./ScheduleDescription.module.css";
import { IAppointment } from "../../../declarations/interfaces";

import { configResult } from "../../../config";

interface IAppointmentProp {
  schedule: IAppointment;
}

const ScheduleCard = (props: IAppointmentProp) => {
  const schedule: IAppointment = props.schedule;
  const applyContext = useContext(ApplyContext);
  return (
    <Col md="12">
      <div className={style["schedule-card"]}>
        <Link
          to={`${applyContext.rootPath}/apply/signing-up/${props.schedule.id}`}
        >
          <Row>
            <ScheduleSymbol symbol={schedule.levelSymbol} />
            <ScheduleDescription
              name={schedule.name}
              description={schedule.description}
              price={configResult.stripe.fullPay.price}
              priceDescription={schedule.priceDescription}
              levelSymbol={schedule.levelSymbol}
              dateTo={schedule.dateTo}
              dateFrom={schedule.dateFrom}
            />
          </Row>
        </Link>
      </div>
    </Col>
  );
};
export default React.memo(ScheduleCard);
