import React from "react";
import { TextInput } from "react-admin";
import { Col } from "react-bootstrap";

import style from "./cloudinary.module.css";

const CloudinaryInput = (props) => {
  const { setImageUrl, imageUrl } = props;

  let win: any = window;
  const myWidget = win.cloudinary.createUploadWidget(
    {
      cloudName: "easy-way-suggestopedia",
      apiKey: "364963599974434",
      uploadPreset: "EasyWay",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        debugger;
        setImageUrl(result.info.url);
      }
    }
  );
  debugger;
  const { title } = props;
  let image = imageUrl;
  if (image && image != "") {
    image = <img src={image} alt="image" />;
  }

  return (
    <div>
      <div
        id="upload_widget"
        onClick={myWidget.open}
        className="cloudinary-button"
      >
        {title}
      </div>
      <TextInput hidden source="image" initialValue={imageUrl} />
      <Col md="3" className={style["img-box"]}>
        {image}
      </Col>
    </div>
  );
};

export default CloudinaryInput;
