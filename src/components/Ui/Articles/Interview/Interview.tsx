import React, { Fragment } from "react";

import { Container, Row, Col } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";

import { IArticle } from "../../../../declarations/interfaces";
import "../../../../extensions/cloudinary/cloudinaryUrl";
import data from "../../../../data.json";
import { Question } from "../../../Question";

const interviewDetails = (props) => {
  const article = data.articles.find(
    (article) => article.url === "interview"
  ) as IArticle;
  let backgroundImage = article.backgroundImage.addCloudinaryProps();
  const renderQuestions = data.questionsInterview.map((question) => (
    <div key={question.id}>
      <Question question={question} />
      <div className={"margin-bottom-big-lg"}></div>
    </div>
  ));
  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={article.title}
      />
      <div className={"margin-bottom-big-lg"}></div>

      <Container>
        <p className={`${"txt-title-page-big"} ${"txt-center"}`}>
          Историята на Мисис Мортън...
        </p>
        {renderQuestions}
        <Col md="12">
          <p className={`${"txt-title-medium"} ${"txt-bold"} ${"txt-right"}`}>
            Д. Димитровa
          </p>
        </Col>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};

export default interviewDetails;
