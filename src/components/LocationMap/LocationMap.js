import React from "react";
import Iframe from "react-iframe";
import style from "./style.module.css";
const locationMap = () => {
  return (
    <Iframe
      className={style.locationMap}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.445891876372!2d23.320471815772205!3d42.69427852192127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa856dbb1a51e3%3A0xdd1d4c7519351676!2sul.%20%22Graf%20Ignatiev%22%201%2C%201000%20Sofia%20Center%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1589994923510!5m2!1sen!2sbg"
      frameborder="0"
      width="100%"
      height="100%"
      style="border:0;"
      allowfullscreen=""
      aria-hidden="false"
      tabindex="0"
    ></Iframe>
  );
};

export default locationMap;
