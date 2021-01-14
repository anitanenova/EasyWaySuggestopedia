import React, { useRef } from "react";

import { Row, Col } from "react-bootstrap";

import style from "./SigningUpForm.module.css";

import {
  ISigningUpFormProps,
  PaymentType,
} from "../../../../declarations/interfaces";

import { configResult } from "../../../../config";

import moment from "moment";
import { CircularProgress } from "@material-ui/core";
import { ContinueBtns } from "./";
import { loadStripe } from "@stripe/stripe-js";

const SigningUpForm = (props: ISigningUpFormProps) => {
  const stripePromise = loadStripe(configResult.stripe.publicKey);

  const redirectToStripe = async (priceId) => {
    const stripe: any = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "payment",
      customerEmail: props.customer.email,
      clientReferenceId: props.customer.id,
      successUrl: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/success`,
      cancelUrl: `${window.location.protocol}//${window.location.hostname}:${window.location.port}/cancel`,
    });
  };

  const getResult = (type) => {
    switch (type) {
      case PaymentType.Cash:
        return (
          <div className="col-md-12">
            <p className={"txt-title-medium txt-justify"}>
              Вие се записахте за курса успешно! Ще се свържем с вас възможно
              най-скоро!
            </p>
          </div>
        );
      case PaymentType.Deposit:
        redirectToStripe(configResult.stripe.deposit.priceKey);
        return <CircularProgress />;
      case PaymentType.FullPaid:
        redirectToStripe(configResult.stripe.fullPay.priceKey);
        return (
          <div className="col-md-12">
            <CircularProgress />
          </div>
        );
      default:
        throw Error(`payment type: ${type} is not implemented`);
    }
  };

  const {
    focusoutHandler,
    signingUpForm,
    handleChange,
    errors,
    isAppointmentLoading,
    continueHandler,
  } = props;

  let formRef: any = useRef(null);
  let paymentTypeInputRef: any = useRef(null);

  let appointmentLoading: any = "";
  if (isAppointmentLoading) {
    appointmentLoading = <CircularProgress />;
  }
  let disableForm: boolean = false;

  let footer: any = null;
  if (!props.customerLoading && !props.addedCustomerSuccessful) {
    footer = (
      <ContinueBtns
        continueHandler={continueHandler}
        price={configResult.stripe.fullPay.price}
        appointmentLoading={appointmentLoading}
      />
    );
  } else if (props.customerLoading) {
    footer = (
      <div className="col-md-12">
        <CircularProgress />
      </div>
    );
  } else if (props.addedCustomerSuccessful) {
    footer = getResult(props.paymentType);
    disableForm = true;
  }

  return (
    <form
      ref={(ref) => {
        formRef = ref;
      }}
      id="signingUpForm"
      className={style["signing-up-form"]}
    >
      <input
        type="hidden"
        name="paymentType"
        ref={paymentTypeInputRef}
        value={signingUpForm.paymentType}
        onChange={handleChange}
      />
      <Row>
        <Col md="6">
          <input
            disabled={disableForm}
            type="text"
            className={style["form-control"]}
            placeholder="Име"
            name="name"
            onBlur={focusoutHandler}
            value={signingUpForm.name}
            onChange={handleChange}
          />
          {errors("name")}
        </Col>
        <Col md="6">
          <input
            disabled={disableForm}
            type="text"
            className={style["form-control"]}
            placeholder="Фамилия"
            name="lastName"
            onBlur={focusoutHandler}
            value={signingUpForm.lastName}
            onChange={handleChange}
          />
          {errors("lastName")}
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <input
            disabled={disableForm}
            type="email"
            className={style["form-control"]}
            placeholder="Имейл"
            name="email"
            onBlur={focusoutHandler}
            onChange={handleChange}
            value={signingUpForm.email}
          />
          {errors("email")}
        </Col>
        <Col md="6">
          <input
            disabled={disableForm}
            type="text"
            className={style["form-control"]}
            placeholder="Мобилен телефон"
            name="phoneNumber"
            onBlur={focusoutHandler}
            onChange={handleChange}
            value={signingUpForm.phoneNumber}
          />
          {errors("phoneNumber")}
        </Col>
      </Row>
      <Col md="12">
        <div className={style["choise-course-box"]}>
          <Row>
            <Col xs="12" sm="3" md="3" lg="2">
              <div className={style["course-symbol"]}>
                <span>
                  {appointmentLoading}
                  {props.appointment.levelSymbol}
                </span>
              </div>
            </Col>
            <Col xs="12" sm="9" md="9" lg="10">
              <div className={style["course-details-box"]}>
                <p
                  className={`${"txt-title-medium"} ${"txt-title-big-sm"}  ${"txt-bold"}`}
                >
                  {appointmentLoading}
                  {props.appointment.name}{" "}
                  {moment(props.appointment.dateFrom).format("L")} -{" "}
                  {moment(props.appointment.dateTo).format("L")}
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Col>
      <Row>{footer}</Row>
    </form>
  );
};

export default SigningUpForm;
