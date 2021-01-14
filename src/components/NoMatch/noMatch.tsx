import React, { Fragment } from "react";
import { BackgroundImage } from "../Image/BackgroundImage";
import { EndTxtSymbol } from "../EndTxtSymbol";

const noMatch = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/c_scale,w_1024/v1591983059/CommonImages/dont-exist-this-page_mgcxzt.png";

  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"Не съществува тази страница"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <p className={`${"txt-title-page-big"} ${"txt-center"}`}>
        Съжаляваме! Търсената от Вас страница не съществува!
      </p>
      <EndTxtSymbol />
      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};

export default noMatch;
