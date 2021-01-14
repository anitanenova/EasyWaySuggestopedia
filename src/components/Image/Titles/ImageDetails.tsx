import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./style.module.css";

interface IImageDetailsProps {
  title: string;
}
class ImageTitle extends Component<IImageDetailsProps> {
  render() {
    const { title } = this.props;

    return (
      <div className={style["image-params-cointainer"]}>
        <Container>
          <p className={"txt-big-image"}>{title}</p>
          <Link to="/contacts" className={"btn-info"}>
            пишете ни
          </Link>
          <p className={`${"txt-big-image"} ${style["phone-txt-image"]}`}>
            0899 521 504
          </p>
        </Container>
      </div>
    );
  }
}
export default ImageTitle;
