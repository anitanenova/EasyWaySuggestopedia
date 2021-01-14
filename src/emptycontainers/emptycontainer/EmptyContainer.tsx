import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./EmptyContainer.module.css";

const EmptyContainer = () => {
  return (
    <Col lg="6" md="12">
      <div className={style["appointment-box"]}>
        <Row>
          <Col xs="3" md="4">
            <div className={style["date-info"]}></div>
          </Col>
          <Col xs="9" md="8">
            <div className={style["appointment-details-box"]}></div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
export default EmptyContainer;
