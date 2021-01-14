import React from "react";
import { Col } from "react-bootstrap";
import style from "./ScheduleSymbol.module.css";

const scheduleSymbol = (props) => {
  const { symbol } = props;

  return (
    <Col xs="3" md="3">
      <div className={style["schedule-symbol"]}>
        <span>{symbol}</span>
      </div>
    </Col>
  );
};
export default scheduleSymbol;
