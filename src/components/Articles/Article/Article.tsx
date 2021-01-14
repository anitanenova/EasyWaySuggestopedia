import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Col } from "react-bootstrap/";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

import style from "./article.module.css";

interface IArticleProps extends RouteComponentProps {
  id: string;
  image: string;
  title: string;
  url: string;
}

const Article = ({ id, image, title, url, history }: IArticleProps) => {
  const clickHandler = (event) => {
    debugger;
    history.push(`/article/${url}`);
  };

  return (
    <Col md="4">
      <div className={style["article-box"]}>
        <input hidden={true} id={id} />
        <div className={style["article-img-conatainer"]}>
          <img
            className={style["article-img-top"]}
            src={image}
            alt="article.jpg"
          />
        </div>
        <Col md="12">
          <p className={`${"txt-bold"} ${style["article-title"]} ${"txt-big"}`}>
            {title}
          </p>
        </Col>
        <button onClick={clickHandler} className={"btn-primary-long"}>
          виж още <FontAwesomeIcon icon={faCaretRight} size="sm" />
        </button>
      </div>
    </Col>
  );
};

export default withRouter(Article);
