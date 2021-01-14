import React, { Fragment } from "react";
import { Container, Col } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";
import { EndTxtSymbol } from "../../../../components/EndTxtSymbol";

const coursesIndividual = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671614/CommonImages/courses-adults-bg_n1wbnv.jpg";

  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"Индивидуално обучение"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Container>
        <Col md="12">
          <p className={`${"txt-big"} ${"txt-justify"}`}>
            Методът Сугестопедия е обявен от ЮНЕСКО още през 70-те за най-лесен
            начин за учене без напрежение. С него учите не само над три пъти
            по-бързо, но помните по-дълготрайно и преодолявате езиковата
            бариера. Сугестопедията е дело на българският учен проф. д-р Георги
            Лозанов. Сугестопедията е метод, който е ефективен във всяка
            възраст.
          </p>
          <ul className={`${"txt-big"} ${"txt-justify"}`}>
            <li>
              Сугестопедията развива и много други качества: творческо мислене,
              говорене пред публика, общуване.
            </li>
            <li>
              Сугестопедията ни освобождава от бариерите и ни открива света по
              различен начин.
            </li>
            <li>
              Този курс е не просто учене на английски, а първата стъпка към
              новия ви живот!
            </li>
          </ul>
        </Col>
        <EndTxtSymbol />
        <div className={"margin-bottom-1rem"}></div>
        <Col md="12">
          <p className={`${"txt-title-big"} ${"txt-bold"}`}>
            Индивидуално обучение с метода Сугестопедия по английски език
            СЪОБРАЗЕНО С ВАШЕТО НИВО НА ВЛАДЕЕНЕ НА ЕЗИКА
          </p>
          <p className={`${"txt-big"} ${"txt-justify"}`}>
            Вместо да посещавате индивидуални уроци без крайна цел и неизвестен
            резултат подобрете английския си от 3 до 10 пъти по-бързо в удобно
            за Вас време!
          </p>
          <p className={`${"txt-big"} ${"txt-justify"} ${"txt-italic"}`}>
            Едно посещение е 45 min.
          </p>
          <p className={`${"txt-big"} ${"txt-justify"} ${"txt-red"}`}>
            Първо посещение - БЕЗПЛАТНО!
          </p>
          <p className={`${"txt-big"} ${"txt-justify"}`}>
            1 посещение – 40 лв.
          </p>
          <p className={`${"txt-big"} ${"txt-justify"}`}>
            5 посещения – 175 лв.
          </p>
          <p className={`${"txt-big"} ${"txt-justify"}`}>
            10 посещения – 300 лв.
          </p>
          <p className={`${"txt-big"} ${"txt-justify"}`}>
            *Обучението се провежда между 9.00 и 18.00 ч., от понеделник до
            петък.
          </p>
        </Col>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default coursesIndividual;
