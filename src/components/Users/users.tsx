import React from "react";
import { Col, Row } from "react-bootstrap";

import { User } from "./User";
import { IUser } from "../../declarations/interfaces";
import { Link } from "react-router-dom";

import style from "./Users.module.css";

interface IUsersProps {
  users: IUser[];
  loading: boolean;
  history: string[];
}

const users = (props: any) => {
  let usersResult: JSX.Element[] = [<div>Зареждане...</div>];

  if (!props.loading) {
    usersResult = props.users.map((user, index) => {
      return (
        <Col lg="6" md="12">
          <Link
            className={style["user-box-link"]}
            key={user.id}
            to={`/user/${user.id}`}
          >
            <User user={user} />
          </Link>
        </Col>
      );
    });
  }

  return (
    <Col md="12">
      <Row>{usersResult}</Row>
    </Col>
  );
};
export default users;
