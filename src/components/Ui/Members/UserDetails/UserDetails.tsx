import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";

import { BackgroundImage } from "../../../Image/BackgroundImage";
import { UserDetailsContainer } from "../../../../containers/User";

const userDetail = (props) => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671617/CommonImages/users-bg_aqeicu.jpg";

  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"ЕКИП И ПРЕПОДАВАТЕЛИ"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Container>
        <Row>
          <UserDetailsContainer userId={props.match.params.id} />
        </Row>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default userDetail;
