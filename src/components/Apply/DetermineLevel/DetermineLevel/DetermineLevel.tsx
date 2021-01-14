import React, { useContext } from "react";

import { Modal } from "../../../Ui/Modal";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import style from "./DetermineLevel.module.css";
import { Link } from "react-router-dom";

import { ApplyContext } from "../../../../context/Apply";

interface IDetermineLevelProps {
  show: boolean;
  hideHendler: any;
}

const DetermineLevel = (props: IDetermineLevelProps) => {
  const applyContext = useContext(ApplyContext);

  return (
    <Modal
      show={props.show}
      onHide={() => {
        props.hideHendler();
      }}
      size={"lg"}
      header="Определи ниво"
    >
      <Row className="txt-center">
        <Col sm="12" md="12">
          <p className={`${"txt-title-small"} ${"txt-bold"}`}>
            Сега ще определим вашето ниво по Английски език. За целта е
            необходимо да изграете една бърза игра!
          </p>
          <div className={style["determine-level-container"]}>
            <Link to={`${applyContext.rootPath}/apply/determine-level-game`}>
              <div className={style["determine-level-box"]}>
                <FontAwesomeIcon
                  className={`${"txt-secondary"} ${"margin-bottom-big"}`}
                  icon={faPlay}
                  size="6x"
                />
                <p
                  className={`${"txt-title-big"}  ${"txt-secondary"} ${"txt-bold"} ${"txt-uppercase"}`}
                >
                  започни
                </p>
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </Modal>
  );
};

export default DetermineLevel;
