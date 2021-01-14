import React from "react";
import { Col, Row } from "react-bootstrap";

import { EmptyContainer } from "./emptycontainer";

const EmptyContainers = () => {
  return (
    <Col md="12">
      <Row>
        <EmptyContainer />
      </Row>
    </Col>
  );
};
export default EmptyContainers;
