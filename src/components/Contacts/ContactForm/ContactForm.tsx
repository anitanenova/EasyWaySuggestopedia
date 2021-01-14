import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import style from "./contactForm.module.css";
import { IContactUsProps } from "../../../declarations/interfaces";
import { CircularProgress } from "@material-ui/core";

const ContactForm = (props: IContactUsProps) => {
  const {
    submitHandle,
    focusoutHandler,
    contactForm,
    handleChange,
    errors,
    finishSendMsg,
    isLoading,
    formEl,
  } = props;

  return (
    <form
      ref={formEl}
      id="contactForm"
      onSubmit={submitHandle}
      className={style["contact-form"]}
    >
      <div className={style["form-group"]}>
        <input
          type="text"
          className={style["form-control"]}
          placeholder="Име"
          name="name"
          onBlur={focusoutHandler}
          value={contactForm.name}
          onChange={handleChange}
        />
      </div>
      {errors("name")}
      <div className={`${style["form-group"]} ${style["form_left"]}`}>
        <input
          type="email"
          className={style["form-control"]}
          placeholder="Имейл"
          name="email"
          onBlur={focusoutHandler}
          onChange={handleChange}
          value={contactForm.email}
        />
      </div>
      {errors("email")}
      <div className={style["form-group"]}>
        <input
          type="text"
          className={style["form-control"]}
          placeholder="Мобилен телефон"
          name="phoneNumber"
          onBlur={focusoutHandler}
          onChange={handleChange}
          value={contactForm.phoneNumber}
        />
      </div>
      {errors("phoneNumber")}
      <div className={style["form-group"]}>
        <textarea
          className={` ${style["form-control"]} ${style["textarea-contact"]}`}
          placeholder="Въведете съобщението си тук..."
          name="message"
          onBlur={focusoutHandler}
          onChange={handleChange}
          value={contactForm.message}
        ></textarea>
        {errors("message")}

        {finishSendMsg}
      </div>
      <button type="submit" className={`${"btn-primary"} ${style["btn-send"]}`}>
        <FontAwesomeIcon
          className={style["send-email-icon"]}
          icon={faPaperPlane}
          size="lg"
        />
        Изпрати
        {isLoading && (
          <CircularProgress className={style["btn-send-loading"]} size={25} />
        )}
      </button>
    </form>
  );
};

export default ContactForm;
