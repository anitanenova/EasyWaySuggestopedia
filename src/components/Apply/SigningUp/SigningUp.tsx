import React from "react";

import { Modal } from "../../Ui/Modal";
import { Row, Col } from "react-bootstrap";

import { RouteComponentProps, withRouter } from "react-router-dom";

import { ScheduleFormContainer } from "../../../containers/ScheduleForm";

interface ISigningUpProps extends RouteComponentProps {
  show: boolean;
  hideHendler: any;
}

const SigningUp = (props: ISigningUpProps) => {
  return (
    <Modal
      onHide={() => {
        props.hideHendler();
      }}
      size={"lg"}
      header="Записване"
      {...props}
    >
      <Row className="txt-center">
        <Col md="12">
          <ScheduleFormContainer appointmentId={props.match.params["id"]} />
        </Col>
      </Row>
    </Modal>
  );
};

export default withRouter(SigningUp);
