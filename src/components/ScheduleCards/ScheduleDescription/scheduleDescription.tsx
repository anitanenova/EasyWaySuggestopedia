import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

import style from "./ScheduleDescription.module.css";
import moment from "moment";

const scheduleDescription = (props) => {
  const {
    dateFrom,
    dateTo,
    name,
    levelSymbol,
    priceDescription,
    price,
    description,
  } = props;
  return (
    <Col xs="9" md="9">
      <div className={style["schedule-details-box"]}>
        <p
          className={`${"txt-title-big"} ${"txt-title-big-sm"}  ${"txt-bold"}`}
        >
          {name} {levelSymbol}
        </p>
        <p
          className={`${"txt-title-small"} ${"txt-title-small-sm"}  ${"txt-bold"} ${"txt-italic"}`}
        >
          <FontAwesomeIcon
            className={style["schedule-details-icon"]}
            icon={faCalendarAlt}
            size="lg"
          />
          {moment(dateFrom).format("L")} - {moment(dateTo).format("L")}
        </p>
        <p
          className={`${"txt-title-small"} ${"txt-title-small-sm"}  ${"txt-italic"}`}
        >
          {description}
        </p>
        <p
          className={`${"txt-title-medium"} ${"txt-title-medium-sm"}  ${"txt-bold"} ${"txt-italic"}`}
        >
          Цена: {price}
        </p>
        <p
          className={`${"txt-title-medium"} ${"txt-title-medium-sm"} ${"txt-bold"} ${"txt-italic"}`}
        >
          {priceDescription}
        </p>
      </div>
    </Col>
  );
};
export default scheduleDescription;
