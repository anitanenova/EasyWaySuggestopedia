import React, { Fragment } from "react";
import { Container } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";
import data from "../../../../data.json";
import { Question } from "../../../Question";
import { EndTxtSymbol } from "../../../EndTxtSymbol";

const questionsPage = (props) => {
  const renderQuestions = data.questions.map((question) => (
    <div key={question.id}>
      <Question question={question} />
      <EndTxtSymbol />
      <div className={"margin-bottom-big-lg"}></div>
    </div>
  ));
  let backgrounImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1591891618/CommonImages/questions_uzro6l.jpg";

  return (
    <Fragment>
      <BackgroundImage
        image={backgrounImage}
        size="medium"
        position="center"
        title={"Въпроси относно сугестопедичния курс:"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Container>{renderQuestions}</Container>
    </Fragment>
  );
};

export default questionsPage;
