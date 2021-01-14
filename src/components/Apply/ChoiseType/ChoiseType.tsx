import React, { useContext } from "react";

import { Modal } from "../../../components/Ui/Modal";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList, faGamepad } from "@fortawesome/free-solid-svg-icons";

import style from "./ChoiseType.module.css";
import { Link } from "react-router-dom";

import { ApplyContext } from "../../../context/Apply";

interface IChoiseTypeProps {
  show: boolean;
  hideHendler: any;
}

const ChoiseType = (props: IChoiseTypeProps) => {
  const applyContext = useContext(ApplyContext);

  return (
    <Modal
      show={props.show}
      onHide={() => {
        props.hideHendler();
      }}
      size={"lg"}
      header="Записване"
    >
      <Row className="txt-center">
        <Col className={style["choise-type-container"]} sm="12" md="12" lg="4">
          <Link to={`${applyContext.rootPath}/apply/determine-level`}>
            <div className={style["choise-type-box"]}>
              <FontAwesomeIcon
                className={`${"txt-secondary"} ${"margin-bottom-big"}`}
                icon={faGamepad}
                size="6x"
              />
              <p
                className={`${"txt-title-big"}  ${"txt-secondary"} ${"txt-bold"} ${"txt-uppercase"}`}
              >
                определи нивото си
              </p>
            </div>
          </Link>
        </Col>
        <Col className={style["choise-type-container"]} sm="12" md="12" lg="4">
          <Link to={`${applyContext.rootPath}/apply/choise-group`}>
            <div className={style["choise-type-box"]}>
              <FontAwesomeIcon
                className={`${"txt-secondary"} ${"margin-bottom-big"}`}
                icon={faClipboardList}
                size="6x"
              />
              <p
                className={`${"txt-title-big"}  ${"txt-secondary"}  ${"txt-bold"} ${"txt-uppercase"}`}
              >
                избери курс
              </p>
            </div>
          </Link>
        </Col>
      </Row>
    </Modal>
  );
};

export default ChoiseType;
