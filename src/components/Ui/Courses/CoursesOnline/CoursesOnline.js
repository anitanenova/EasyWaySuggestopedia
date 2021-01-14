import React, { Fragment } from "react";
import { Container, Col } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";
import { EndTxtSymbol } from "../../../../components/EndTxtSymbol";

const coursesOnline = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1596199951/CommonImages/online-course_aomj1p.jpg";

  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"Онлайн обучение"}
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
            Вече можете да се запишете на курс по метода сугестопедия без
            значение в коя точка на България или света се намирате!
          </p>
          <p className={`${"txt-big"} ${"txt-justify"}`}>
            Нашите интензивни модули са достоен заместител на присъствените
            курсове. Запазваме елемента на интензитета за най-ефективно
            обучение, но го съобразяваме със спецификите на онлайн формата.{" "}
            <br></br>
            От понеделник до петък имате онлайн часове с преподавател и в
            допълнение самостоятелна работа в онлайн класна стая за оптимални
            резултати. <br></br>
            Обучението е подходящо за курсисти, които имат основни познания по
            английски език.
          </p>
          <p className={`${"txt-big"} ${"txt-justify"} ${"txt-red"}`}>
            Ниво на онлайн обучението: А1-А2
          </p>
          <p
            className={`${"txt-title-big"} ${"txt-bold"} ${"txt-justify"} ${"txt-green"}`}
          >
            График:
          </p>
          <p className={`${"txt-big"} ${"txt-bold"} ${"txt-justify"}`}>
            За групи:
          </p>
          <ul className={`${"txt-big"} ${"txt-justify"}`}>
            <li>всеки делничен ден по 4 учебни часа;</li>
            <li>2 учебни часа онлайн с преподавател;</li>
            <li>2 учебни часа самостоятелна работа в онлайн класна стая;</li>
            <li className={`${"txt-big"} ${"txt-justify"} ${"txt-red"}`}>
              4 модула по две седмици за 190 лв.
            </li>
          </ul>
          <p className={`${"txt-big"} ${"txt-bold"} ${"txt-justify"}`}>
            Индивидуално обучение:
          </p>
          <ul className={`${"txt-big"} ${"txt-justify"}`}>
            <li>по индивидуален график;</li>
            <li className={`${"txt-big"} ${"txt-justify"} ${"txt-red"}`}>
              25 лв за един учебен час.
            </li>
          </ul>
          <p className={`${"txt-big"} ${"txt-justify"} ${"txt-italic"}`}>
            *един учебен час е 45 минути
          </p>
        </Col>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default coursesOnline;
