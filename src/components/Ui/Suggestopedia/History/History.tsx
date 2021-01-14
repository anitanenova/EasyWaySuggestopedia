import React, { Fragment } from "react";
import { Container, Col } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";

import style from "./history.module.css";

const history = () => {
  let backgrounImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671614/CommonImages/history-bg_ee6r7m.jpg";

  return (
    <Fragment>
      <BackgroundImage
        image={backgrounImage}
        size="medium"
        position="center"
        title={"История за проф. д-р Лозанов"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Container>
        <Col md="12">
          <img
            className={style["image-in-text"]}
            src="https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590676421/CommonImages/lozanov_ojmrwc.jpg"
            alt="georgi-lozanov.jpg"
          />
          <p className={`${["txt-big"]} ${["txt-justify"]}`}>
            <strong>ГЕОРГИ ЛОЗАНОВ</strong> (1926-2012) е роден в София.
            Завършва гимназия като първи по успех, учи шест години медицина в
            Софийския университет и три години специализира психиатрия и
            неврология, като се насочва главно към психотерапията. Подготвя
            дисертация в БАН и получава специализация по физиология на мозъка.
            Едновременно с това следва в Софийския университет второ висше
            образование по педагогика и психология. Междувременно завършва
            първите си експерименти по <strong>сугестопедия </strong> и в тази
            област защитава дисертация за доктор на науките през 1972 г.
            Присъдена му е титла старши научен сътрудник I ст., което за научен
            институт е равно на професор.
          </p>

          <p className={`${["txt-big"]} ${["txt-justify"]}`}>
            Д-р Лозанов е най-известен е с откритата и разработена от него
            сугестопедия – десугестивно обучение. Тя се прилага от негови
            ученици в целия свят и е оценена високо от международна група
            експерти на ЮНЕСКО и учени от редица страни (Франция, Русия, САЩ и
            др.). В някои държави като Норвегия, Великобритания и др.
            сугестопедията се прилага като държавна инициатива.
          </p>
          <p className={`${["txt-big"]} ${["txt-justify"]}`}>
            Освен че ускорява многократно резултата от обучението,
            сугестопедията – десугестивно обучение подобрява здравето и повишава
            културата на човешките взаимоотношения.
          </p>
          <p className={`${["txt-big"]} ${["txt-bold"]} ${["txt-justify"]}`}>
            Д-р Георги Лозанов е създател на науката сугестология, а
            сугестопедията е нейното приложение в педагогиката.
          </p>
          <p className={`${["txt-big"]} ${["txt-justify"]}`}>Ръководил е: </p>
          <ul className={style["history-ul"]}>
            <li>20 години Научно-изследователски институт по Сугестология</li>
            <li>
              10 години факултет по Сугестология и развитие на личността към
              Софийския университет
            </li>
            <li>6 години в Австрия научен институт за изследване на ученето</li>
            <li>
              създал и ръководил методически десетки институти и учебни
              материали на петте континента
            </li>
          </ul>
        </Col>
      </Container>
      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};

export default history;
