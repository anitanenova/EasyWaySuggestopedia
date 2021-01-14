import React from "react";
import { Col } from "react-bootstrap";
import style from "./question.module.css";
import { IQuestion } from "../../declarations/interfaces";

interface IQuestionProps {
  question: IQuestion;
}

const Question = (props: IQuestionProps) => {
  return (
    <Col md="12">
      <input type="hidden" id={props.question.id} />
      <div className={`${style["title-bg"]} ${"margin-bottom-medium-md"} `}>
        <p className={style["txt-title-questions"]}>{props.question.title}</p>
      </div>

      <p
        className={`${["txt-big"]} ${["txt-justify"]}`}
        dangerouslySetInnerHTML={{
          __html: props.question.description,
        }}
      ></p>
    </Col>
  );
};

export default Question;
