import React, { Fragment } from "react";
import { BackgroundImage } from "../../Image/BackgroundImage";
import { EndTxtSymbol } from "../../EndTxtSymbol";

const cancelPayment = () => {
  let backgroundImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/c_scale,w_1024/v1591983059/CommonImages/cancel-payment_awsnjn.png";

  return (
    <Fragment>
      <BackgroundImage
        image={backgroundImage}
        size="medium"
        position="center"
        title={"Неуспешно плащане"}
      />
      <div className={"margin-bottom-big-lg"}></div>
      <p className={`${"txt-title-page-big"} ${"txt-center"}`}>
        Съжаляваме! Нещо се обърка и не успяхте да се запишете за избрания от
        вас курс!
      </p>
      <EndTxtSymbol />
      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};
export default cancelPayment;
