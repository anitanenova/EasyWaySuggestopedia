import React from "react";
import { Col } from "react-bootstrap";
import style from "./reason.module.css";
import { IReason } from "../../declarations/interfaces";

interface IReasonProps {
  reason: IReason;
}

const Reason = (props: IReasonProps) => {
  return (
    <Col md="12">
      <input type="hidden" id={props.reason.id} />
      <div className={`${style["title-bg"]} ${"margin-bottom-medium-md"} `}>
        <p className={style["txt-title-reason"]}>{props.reason.title}</p>
      </div>
      <div className={`${"txt-center"} ${"margin-bottom-medium-md"}`}>
        <img src={props.reason.iconImage} alt={props.reason.iconImageAlt} />
      </div>
      <p className={`${["txt-big"]} ${["txt-justify"]}`}>
        {props.reason.description}
      </p>
    </Col>
  );
};

export default Reason;
