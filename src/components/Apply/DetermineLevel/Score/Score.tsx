import React, { useState } from "react";
import * as yup from "yup";
import { Col, Button } from "react-bootstrap";

import style from "./Score.module.css";

const ScoreForm = () => {
  // const [scoreForm, setScoreForm] = useState();
  // const validationSchema = yup.object({
  //   score: yup
  //     .number("Моля въведете валидно число")
  //     .required("Полето е задължително"),
  // });

  // const handleChange = (e) => {
  //   debugger;
  //   const { score, value } = e.currentTarget;

  //   // setScoreForm((prevState) => {
  //   //   return {
  //   //     /*  ...prevState,*/
  //   //     isFormEmpty: false,
  //   //     [score]: value,
  //   //   };
  //   // });
  // };

  // const focusoutHandler = (e) => {
  //   const { name, value } = e.currentTarget;
  //   /*props.validateFiled(value, name);*/
  // };
  return (
    <Col className={style["game-score-box"]}>
      <input
        className={style["game-score"]}
        placeholder="Въведете вашият резултат(score)"
        name="score"
        // value={scoreForm}
        // onBlur={focusoutHandler}
        // onChange={handleChange}
      />
      <Button className={`${"btn-primary-long"} ${style["game-score-btn"]}`}>
        Продължи
      </Button>
    </Col>
  );
};

export default ScoreForm;
