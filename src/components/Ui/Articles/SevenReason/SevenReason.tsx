import React, { Fragment } from "react";

import { Container, Col } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";

import { IArticle } from "../../../../declarations/interfaces";
import { Reason } from "../../../Reason";
import "../../../../extensions/cloudinary/cloudinaryUrl";
import data from "../../../../data.json";
import { EndTxtSymbol } from "../../../EndTxtSymbol";

const sevenReason = (props) => {
  const article = data.articles.find(
    (article) => article.url === "seven-reason"
  ) as IArticle;
  let backgroundImage = article.backgroundImage.addCloudinaryProps();
  const renderReasons = data.reasonsArticle.map((reason) => (
    <div key={reason.id}>
      <Reason reason={reason} />
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
        <Col md="12">
          <p className={"txt-title-small"}>Здравейте,</p>
          <p className={`${"txt-title-small"} ${"txt-justify"}`}>
            Казвам се Галя и преподавам английски език над 10 години. Изучавала
            съм английски език точно 16 години. Преминала съм обучение при
            създателя на метода д-р Георги Лозанов. Работила съм с хора на
            възраст от 4 до 70 години. Имам 8 години стаж по метода
            Сугестопедия. Провела съм над 50 сугестопедични курса по английски
            език. Давам Ви точно 7 причини защо Сугестопедията е най-добрият
            метод Вие да научите английски.
          </p>
          <div className={"margin-bottom-big-lg"}></div>
        </Col>
        {renderReasons}
        <Col md="12">
          <EndTxtSymbol />
          <p className={`${"txt-title-small"} ${"txt-justify"}`}>
            И най-вече забавно е! Актьорстваме, пеем, смеем се, шегуваме се
            ЗАЕДНО, в група, най-естествената среда на човека. Създават се
            приятелства за цял живот.
          </p>
          <div className={"margin-bottom-big-lg"}></div>
        </Col>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};

export default sevenReason;
