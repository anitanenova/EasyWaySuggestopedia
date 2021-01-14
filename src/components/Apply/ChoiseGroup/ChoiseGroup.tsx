import React from "react";

import { Modal } from "../../Ui/Modal";
import { Row, Col } from "react-bootstrap";

import style from "./ChoiseGroup.module.css";

import ScheduleCardContainer from "../../../containers/Schedule/ScheduleCardContainer";

interface IChoiseGroupProps {
  show: boolean;
  hideHendler: any;
}

const choiseGroup = (props: IChoiseGroupProps) => {
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
        <div className={style["choise-group-container"]}>
          <ScheduleCardContainer />
        </div>
      </Row>
    </Modal>
  );
};

export default choiseGroup;
