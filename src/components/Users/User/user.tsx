import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./user.module.css";
import { IUser } from "../../../declarations/interfaces";

interface IUserProps {
  user: IUser;
}

const user = (props: IUserProps) => {
  const { user } = props;

  const img = {
    backgroundImage: `url(${user.image})`,
  };

  return (
    <div className={style["user-box"]}>
      <Row>
        <Col md="6" sm="6" xs="12">
          <div style={img} className={style["user-image"]}></div>
        </Col>
        <Col md="6" sm="6" xs="12">
          <div className={style["user-details-box"]}>
            <p className={`${"txt-title-big"} ${"txt-bold"}`}>
              {user.firstName} {user.lastName}
            </p>
            <p
              className={`${"txt-big"} ${
                style["user-position"]
              } ${"txt-bold"} ${"txt-italic"}`}
            >
              {user.position}
            </p>
            <p className={`${"txt-big"} ${"txt-italic"} ${"txt-justify"}`}>
              {user.description}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default user;
