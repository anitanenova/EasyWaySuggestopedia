import React, { Fragment } from "react";
import { BackgroundImage } from "../../Image/BackgroundImage";
import { EndTxtSymbol } from "../../EndTxtSymbol";

const successPayment = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/c_scale,w_1024/v1591982444/CommonImages/success-payment_oxhuse.png";

  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"Успешно плащане"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <p className={`${"txt-title-page-big"} ${"txt-center"}`}>
        Поздравления! Успешно се записахте за избрания от вас курс!
      </p>
      <EndTxtSymbol />
      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default successPayment;
