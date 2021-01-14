import React, { Fragment } from "react";
import { Col } from "react-bootstrap";
import style from "./SigningUpForm.module.css";
import { Link } from "react-router-dom";
import { PaymentType } from "../../../../declarations/interfaces";

interface IContinueBtnsProps {
  continueHandler: any;
  price: number;
  appointmentLoading: any;
}

const ContinueBtns = (props: IContinueBtnsProps) => {
  const { continueHandler, price, appointmentLoading } = props;

  return (
    <Fragment>
      <Col xs="12" sm="6" lg="4">
        <div className={style["price-box"]}>
          <Link
            onClick={() => {
              continueHandler(PaymentType.Cash);
            }}
            to="#"
          >
            <div className={style["price-title"]}>Безплатно</div>
            <div
              className={`${style["price-description"]} ${style["margin-top-27"]}`}
            >
              <p className={`${"txt-title-small"} ${"txt-bold"}`}>0лв.</p>

              <p className={`${"txt-big"} ${"txt-italic"} ${"txt-gray"}`}>
                запиши се
              </p>
              <p className={`${"txt-big"} ${"txt-italic"} ${"txt-gray"}`}>
                БЕЗ сигурно място
              </p>
            </div>
          </Link>
        </div>
      </Col>
      <Col xs="12" sm="6" lg="4">
        <div className={style["price-box"]}>
          <Link
            onClick={() => {
              continueHandler(PaymentType.Deposit);
            }}
            to="#"
          >
            <div className={style["price-title"]}>Капаро</div>
            <div
              className={`${style["price-description"]} ${style["margin-top-27"]}`}
            >
              <p className={`${"txt-title-small"} ${"txt-bold"}`}>100лв.</p>

              <p className={`${"txt-big"} ${"txt-italic"} ${"txt-gray"}`}>
                капаро
              </p>
              <p className={`${"txt-big"} ${"txt-italic"} ${"txt-gray"}`}>
                сигурно място
              </p>
              <p className={`${"txt-big"} ${"txt-italic"} ${"txt-gray"}`}>
                игри за поддържане на ниво
              </p>
            </div>
          </Link>
        </div>
      </Col>
      <Col xs="12" sm="6" lg="4">
        <div className={style["price-box"]}>
          <Link
            onClick={() => {
              continueHandler(PaymentType.FullPaid);
            }}
            to="#"
          >
            <div className={style["price-title"]}>Плати</div>
            <div className={style["price-description"]}>
              <p
                className={`${"txt-big"} ${"txt-italic"} ${"txt-red"} ${
                  style["discount-price"]
                } ${"txt-line-trough"}`}
              >
                {Math.floor(Number(price) / 0.9016)}лв.
              </p>
              <p className={`${"txt-title-small"} ${"txt-bold"}`}>
                {appointmentLoading}
                {price}
              </p>
              <p className={`${"txt-big"} ${"txt-italic"} ${"txt-gray"}`}>
                спести 10%
              </p>
              <p className={`${"txt-big"} ${"txt-italic"} ${"txt-gray"}`}>
                сигурно място
              </p>
              <p className={`${"txt-big"} ${"txt-italic"} ${"txt-gray"}`}>
                игри за поддържане на ниво
              </p>
            </div>
          </Link>
        </div>
      </Col>
    </Fragment>
  );
};

export default ContinueBtns;
