import React from "react";
import { Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import style from "./contactInfo.module.css";

const contactInfo = () => {
  return (
    <Row>
      <Col xs="12" sm="6" lg="4">
        <div className={style.box}>
          <div className={style.icon}>
            <div className={style.image}>
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </div>
            <div className={style.info}>
              <p className={`${"txt-big"} ${"txt-bold"} ${"txt-uppercase"}`}>
                имейл
              </p>
              <a
                className={"link-style"}
                href="mailto:office@suggestopediaen.com"
              >
                <p className={`${"txt-medium"} ${style["contact-info-data"]}`}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                  office@suggestopediaen.com
                </p>
              </a>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </Col>

      <Col xs="12" sm="6" lg="4">
        <div className={style.box}>
          <div className={style.icon}>
            <div className={style.image}>
              <FontAwesomeIcon icon={faMobileAlt} size="2x" />
            </div>
            <div className={style.info}>
              <p className={`${"txt-big"} ${"txt-bold"} ${"txt-uppercase"}`}>
                контакти
              </p>
              <a className={"link-style"} href="tel:+359899521504">
                <p className={`${"txt-medium"} ${style["contact-info-data"]}`}>
                  <FontAwesomeIcon icon={faMobileAlt} size="lg" />
                  (+359) 899 521 504
                </p>
              </a>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </Col>

      <Col xs="12" sm="6" lg="4">
        <div className={style.box}>
          <div className={style.icon}>
            <div className={style.image}>
              <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
            </div>
            <div className={style.info}>
              <p className={`${"txt-big"} ${"txt-bold"} ${"txt-uppercase"}`}>
                адрес
              </p>
              <a
                className={"link-style"}
                href="https://www.google.com/maps/place/ul.+%22Graf+Ignatiev%22+1,+1000+Sofia+Center,+Sofia/@42.6942785,23.3204718,17z/data=!3m1!4b1!4m5!3m4!1s0x40aa856dbb1a51e3:0xdd1d4c7519351676!8m2!3d42.6942746!4d23.3226605"
              >
                <p className={`${"txt-medium"} ${style["contact-info-data"]}`}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
                  гр. София, ул. Граф Игнатиев 1
                </p>
              </a>
            </div>
          </div>
          <div className="space"></div>
        </div>
      </Col>
    </Row>
  );
};

export default contactInfo;
