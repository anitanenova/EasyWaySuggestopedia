import React from "react";
import { Article } from "./Article";
import { Container, Row } from "react-bootstrap/";
import data from "../../data.json";

const articles = () => {
  const renderArticles = data.articles.map((article) => (
    <Article key={article.id} {...article} />
  ));

  return (
    <Container fluid="md">
      <Row>{renderArticles}</Row>
    </Container>
  );
};

export default articles;
