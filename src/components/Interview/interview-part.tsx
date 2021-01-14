import React from "react";
import { Col } from "react-bootstrap";

import { Video } from "../Video";

import style from "../Interview/style.module.css";

const InterviewPart = () => {
  return (
    <Col md={{ span: 10, offset: 1 }} className={style["interview-box"]}>
      <Col lg="6" md="12" className={style["interview-description"]}>
        <p className={`${"txt-title-big"} ${"txt-bold"}`}>
          Център Easy Way в Медиите
        </p>
        <p className={`${"txt-title-medium"} ${"txt-justify"} `}>
          EASY WAY център е създаден през 2012 г. и е един от първите
          Сугестопедични центрове в страната. Създаден е от преки ученици на
          създателя на метода Сугестопедия, Проф. Д-р Лозанов и следва стриктно
          идеите и принципите, заложени в науката и делото му.
        </p>
      </Col>
      <Col lg="6" md="12" className={style["video-interview"]}>
        <div className={style["containing-block"]}>
          <div className={style["video-holder"]}>
            <Video src="https://www.youtube.com/embed/cdYfvDVX6QQ" />
          </div>
        </div>
      </Col>
      <div className={style["clear-both"]}></div>
    </Col>
  );
};

export default InterviewPart;
