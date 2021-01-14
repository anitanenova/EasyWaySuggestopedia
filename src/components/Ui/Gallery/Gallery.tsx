import React, { Fragment } from "react";
import { Container, Col } from "react-bootstrap";
import { BackgroundImage } from "../../Image/BackgroundImage";
import { GalleryImages } from "../../../containers/Gallery";

const Gallery = () => {
  let backgrounImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671614/CommonImages/home-bg_ml14cr.jpg";

  return (
    <Fragment>
      <BackgroundImage
        image={backgrounImage}
        size="medium"
        position="center"
        title={"Галерия"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <Container>
        <Col md="12">
          <div
            style={{
              display: "block",
              minHeight: "1px",
              width: "100%",
              border: "1px solid #ddd",
              overflow: "auto",
            }}
          >
            <GalleryImages />
          </div>
        </Col>
      </Container>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};

export default Gallery;
