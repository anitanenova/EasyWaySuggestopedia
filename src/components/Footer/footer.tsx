import React from "react";

import { Row, Col, Container } from "react-bootstrap";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faHome,
  faUserLock,
} from "@fortawesome/free-solid-svg-icons";

import style from "../Footer/style.module.css";

interface IFooterProp extends RouteComponentProps {}

const Footer = React.memo((props: IFooterProp) => {
  const clickHendler = (e) => {
    props.history.push(`${props.match.path}/apply/choise-type`);
  };

  return (
    <div className={style["main-footer"]}>
      <Container>
        <Row>
          <Col xl={4} lg={6} md={6} sm={10}>
            <p
              className={` ${"txt-title-small"} ${
                style["courses-title"]
              } ${"txt-bold"} ${"txt-uppercase"}`}
            >
              курсове
            </p>
            <Link
              to="/schedule-adults"
              className={` ${style["link-style"]} ${
                style["courses-options"]
              } ${"txt-big"}`}
            >
              Курсове за възрастни
            </Link>
            <Link
              to="/schedule-childrens"
              className={`${"txt-big"}  ${style["link-style"]} ${
                style["courses-options"]
              }`}
            >
              Курсове за деца
            </Link>
            <Link
              to="/course-individual"
              className={`${"txt-big"} ${style["link-style"]} ${
                style["courses-options"]
              }`}
            >
              Индивидуални курсове
            </Link>
            <Link
              to="/course-online"
              className={`${"txt-big"} ${style["link-style"]} ${
                style["courses-options"]
              }`}
            >
              Онлайн обучение
            </Link>
            <button
              onClick={clickHendler}
              className={` ${"btn-primary-large"} ${style["footer-btn-apply"]}`}
            >
              запиши се
            </button>
          </Col>
          <Col xl={4} lg={6} md={6} sm={10}>
            <p
              className={`${"txt-title-small"} ${"txt-bold"} ${"txt-uppercase"}`}
            >
              свържете се с нас
            </p>
            <a className={style["link-style"]} href="tel:+359899521504">
              <p className={`${"txt-big"}`}>
                <FontAwesomeIcon
                  className={style["contact-us-icons"]}
                  icon={faPhoneAlt}
                  size="lg"
                />
                0899 521 504
              </p>
            </a>
            <a
              className={style["link-style"]}
              href="mailto:office@suggestopediaen.com"
            >
              <p className={`${"txt-big"}`}>
                <FontAwesomeIcon
                  className={style["contact-us-icons"]}
                  icon={faEnvelope}
                  size="lg"
                />
                office@suggestopediaen.com
              </p>
            </a>
            <a
              className={style["link-style"]}
              href="https://www.google.com/maps/place/ul.+%22Graf+Ignatiev%22+1,+1000+Sofia+Center,+Sofia/@42.6942785,23.3204718,17z/data=!3m1!4b1!4m5!3m4!1s0x40aa856dbb1a51e3:0xdd1d4c7519351676!8m2!3d42.6942746!4d23.3226605"
            >
              <p className={`${"txt-big"}`}>
                <FontAwesomeIcon
                  className={style["contact-us-icons"]}
                  icon={faHome}
                  size="lg"
                />
                гр. София, ул. Граф Игнатиев №1
              </p>
            </a>
            <Link
              to={`${props.match.path}/terms-and-conditions`}
              className={`${"link-style"} ${"txt-big"} ${style["link-style"]} ${
                style["courses-options"]
              }`}
            >
              <FontAwesomeIcon
                className={style["contact-us-icons"]}
                icon={faUserLock}
                size="lg"
              />
              Правила и условия
            </Link>
          </Col>
          <Col xl={4} lg={6} md={6} sm={10} className={style["fb-plugin-box"]}>
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Feasywaysuggestopedia%2F&tabs&width=340&height=214&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="214"
              scrolling="no"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default withRouter(Footer);
