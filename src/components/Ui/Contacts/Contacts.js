import React, { Fragment } from "react";

import { BackgroundImage } from "../../Image/BackgroundImage";
import { Col, Row } from "react-bootstrap";
import { LocationMap } from "../../LocationMap";
import { ContactFormContainer } from "../../../containers/ContactForm";
import { ContactInfo } from "../../Contacts/ContactInfo";

import style from "./style.module.css";

const contacts = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671613/CommonImages/contacts-bg_z1svv0.jpg";
  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"контакти"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Col md={{ span: 10, offset: 1 }}>
        <p
          className={`${"txt-title-page-big"} ${
            style["contacts-title"]
          } ${"txt-center"}`}
        >
          Свържете се с нас
        </p>
        <Row>
          <Col md="6" className={style["location-map-container"]}>
            <LocationMap />
          </Col>
          <Col md="6">
            <ContactFormContainer />
          </Col>
        </Row>

        <div className={"margin-bottom-big-lg"}></div>
        <ContactInfo />
      </Col>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};

export default contacts;
