import React from "react";
import Iframe from "react-iframe";

const video = (props) => {
  return (
    <Iframe
      width="560"
      height="315"
      src={props.src}
      frameborder="none"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
};

export default video;
