import React from "react";
import { Col, Row } from "react-bootstrap";
import style from "./userDetails.module.css";
import { IUser } from "../../../declarations/interfaces";

interface IUserDetailsProps {
  user: IUser;
  loading: boolean;
}

const userDetails = (props: IUserDetailsProps) => {
  const { user, loading } = props;

  const img = {
    backgroundImage: `url(${user.image})`,
  };

  let userResult = <div>Зареждане...</div>;

  if (!loading) {
    userResult = (
      <Col md="12">
        <div style={img} className={style["user-image"]}></div>
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
          <p className={`${"txt-big"} ${"txt-justify"}`}>
            <div dangerouslySetInnerHTML={{ __html: user.fullDescription }} />
          </p>
        </div>
      </Col>
    );
  }

  return userResult;
};

export default userDetails;
