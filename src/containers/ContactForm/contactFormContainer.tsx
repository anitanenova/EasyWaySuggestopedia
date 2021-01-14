import React, { useState, useRef } from "react";

import { connect } from "react-redux";
import * as yup from "yup";
import {
  IContactUsState,
  IMessage,
  IContactUsProps,
} from "../../declarations/interfaces";
import { sendMessage, contactFormChanged } from "../../store/Actions/ContactUs";
import { ContactForm } from "../../components/Contacts/ContactForm";

interface IContactFormContainerProps {
  isLoading: boolean;
  sendFinished: boolean;
  sendFailed: boolean;
  sendMessage: any;
  changeForm: any;
}

const ContactFormContainer = (props: IContactFormContainerProps) => {
  const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
    errors: {},
    isFormEmpty: true,
  };

  const formEl: any = useRef(null);

  const [contactForm, setContactForm] = useState(initialState);

  const validateFiled = (value, field, callBack) => {
    yup
      .reach(validationSchema, field)
      .validate(value, { abortEarly: false })
      .then(() => {
        callBack([]);
      })
      .catch((err) => {
        const errors = err.inner.reduce((acc: string[], { message }) => {
          acc.push(message);
          return acc;
        }, []);
        callBack(errors);
      });
  };

  const validateAllFiled = (callBack) => {
    validationSchema
      .validate(contactForm, { abortEarly: false })
      .then(() => {
        return callBack({
          errors: {},
          isValid: true,
        });
      })
      .catch((err) => {
        const errors = err.inner.reduce((acc, { path, message }) => {
          acc[path] = (acc[path] || []).concat(message);
          return acc;
        }, {});
        return callBack({
          errors,
        });
      });
  };

  const focusoutHandler = (e) => {
    const { name, value } = e.currentTarget;

    validateFiled(value, name, (errors: []) => {
      setContactForm((prevState) => {
        let oldErrors = { ...prevState.errors };

        if (errors.length == 0) {
          delete oldErrors[name];
        } else {
          oldErrors[name] = errors;
        }
        return {
          ...prevState,
          [name]: value,
          errors: oldErrors,
        };
      });
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    props.changeForm();

    setContactForm((prevState) => {
      return {
        ...prevState,
        isFormEmpty: false,
        [name]: value,
      };
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    validateAllFiled((result) => {
      if (result.isValid) {
        props.sendMessage({
          from: contactForm.email,
          to: "iuli.iuli17@gmail.com",
          subject: `[САЙТ] въпрос от ${contactForm.name}`,
          text: `
          name: ${contactForm.name}
          <br />
          email: ${contactForm.email}
          <br />
          phone: ${contactForm.phoneNumber}
          <br />
          message: 
          <hr />
          ${contactForm.message}
          `,
        } as IMessage);
      } else {
        setContactForm((prevState) => ({
          ...prevState,
          errors: result.errors,
        }));
      }
    });
  };

  const errors = (fieldName) => {
    return contactForm.errors[fieldName]?.map((item) => {
      return <div className="error-container">{item}</div>;
    });
  };

  let finishSendMsg;
  if (props.sendFinished) {
    if (props.sendFailed) {
      finishSendMsg = (
        <div className="error-container">
          Възникна грешка моя опитайте отново
        </div>
      );
    } else {
      if (!contactForm.isFormEmpty) {
        setContactForm({ ...initialState });
      }

      finishSendMsg = (
        <div className="success-container">
          Вашето запитване е изпратено успевно. Ще се свържем с вас възможно
          най-скоро
        </div>
      );
    }
  }

  let ContactFormProps: IContactUsProps = {
    isLoading: props.isLoading,
    submitHandle,
    focusoutHandler,
    handleChange,
    contactForm,
    errors,
    finishSendMsg,
    formEl,
  };

  return <ContactForm {...ContactFormProps} />;
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string("Моля въведете валидно име")
    .required("Полето е задължително"),
  email: yup
    .string()
    .email("Моля въведете валиден Email")
    .required("Полето е задължително"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Моля въведете валиден телефонен номер")
    .required("Полето е задължително"),
  message: yup
    .string("Моля въведете валидно съобщение")
    .required("Полето е задължително"),
});

const mapStateToProps = (rsdusers: any) => {
  let state: IContactUsState = rsdusers.contactUsReducer;
  return {
    isLoading: state.isFetching,
    sendFinished: state.sendFinished,
    sendFailed: state.sendFailed,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendMessage: (message: IMessage) => dispatch(sendMessage(message)),
    changeForm: () => dispatch(contactFormChanged()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactFormContainer);
