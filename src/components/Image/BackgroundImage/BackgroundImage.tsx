import React, { Component } from "react";
import ImageTitle from "../Titles/ImageDetails";
import "../../../extensions/cloudinary/cloudinaryUrl";
import style from "./style.module.css";

interface IBackgroundImgaveProps {
  size: string;
  title: string;
  image: string;
  position: string;
}

class BackgroundImage extends Component<IBackgroundImgaveProps> {
  render() {
    const { size, title, position } = this.props;

    const img = {
      backgroundImage: `url(${this.props.image.addCloudinaryProps("h_750")})`,
    };
    return (
      <div
        style={img}
        className={`${style["background-image"]} ${style[size]} ${style[position]}`}
      >
        <div className={style["overlay"]}></div>
        <ImageTitle title={title} />
      </div>
    );
  }
}
export default BackgroundImage;
