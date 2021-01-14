import React, { useContext, useEffect } from "react";

import { Modal } from "../../../Ui/Modal";
import { Row, Col } from "react-bootstrap";

import { ApplyContext } from "../../../../context/Apply";

import { ScoreForm } from "../Score";

import style from "./Game.module.css";

interface IDetermineLevelGameProps {
  show: boolean;
  hideHendler: any;
}

const DetermineLevelGame = (props: IDetermineLevelGameProps) => {
  const applyContext = useContext(ApplyContext);

  return (
    <Modal
      show={props.show}
      onHide={() => {
        props.hideHendler();
      }}
      size={"xl"}
      header="Определи ниво"
      className={style["game-modal-fix"]}
    >
      <Row className="txt-center">
        <Col className={style["game-box"]} sm="12" md="12">
          <iframe
            scrolling="no"
            className={style["game-content"]}
            id="game"
            width="100%"
            height="850px;"
            src="https://www.gamestolearnenglish.com/past-tense-game/"
          ></iframe>
        </Col>
        <ScoreForm />
      </Row>
    </Modal>
  );
};

export default DetermineLevelGame;
