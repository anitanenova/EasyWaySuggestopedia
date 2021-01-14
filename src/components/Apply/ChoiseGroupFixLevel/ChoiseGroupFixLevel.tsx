import React from "react";

import { Modal } from "../../Ui/Modal";
import { Row, Col } from "react-bootstrap";

import style from "./ChoiseGroupFixLevel.module.css";

import ScheduleCardContainer from "../../../containers/Schedule/ScheduleCardContainer";

interface IChoiseGroupFixLevelProps {
  show: boolean;
  hideHendler: any;
}

const choiseGroupFixLevel = (props: IChoiseGroupFixLevelProps) => {
  return (
    <Modal
      onHide={() => {
        props.hideHendler();
      }}
      size={"lg"}
      header="избери група"
      {...props}
    >
      <Row className="txt-center">
        <p className={`${"txt-title-small"} ${"txt-bold"}`}>
          Препоръчваме Ви да изберете някое от следните нива:
        </p>
        <div className={style["choise-group-container"]}>
          <ScheduleCardContainer />
        </div>
      </Row>
    </Modal>
  );
};

export default choiseGroupFixLevel;
