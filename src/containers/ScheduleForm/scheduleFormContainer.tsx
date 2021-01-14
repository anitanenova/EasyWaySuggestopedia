import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import * as yup from "yup";
import {
  ISigningUpFormProps,
  ICustomer,
  ICustomerState,
} from "../../declarations/interfaces";
import { fetchAppointment } from "../../store/Actions/Schedule/schedule";
import { addCustomer } from "../../store/Actions/Customer";
import { SigningUpForm } from "../../components/Apply/SigningUp/SigningUpForm";
import { withFormValidation } from "../../Helpers/hoc/form";
import {
  IValidationForm,
  IState,
  IAppointment,
  PaymentType,
  PaymentStatus,
  PaymentMethod,
} from "../../declarations/interfaces";

interface IScheduleFormContainerProps extends IValidationForm {
  appointmentLoading: boolean;
  changeForm: any;
  appointment: IAppointment;
  appointmentId: string;
  getAppointment(id: string);
  addCustomer: any;
  customerLoading: boolean;
  addedCustomerSuccessful: boolean;
  paymentType: PaymentType;
  customer: ICustomer;
}

const ScheduleFormContainer = (props: IScheduleFormContainerProps) => {
  const initialState = {
    name: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    paymentType: null,
  };

  const [signingUpForm, setContactForm] = useState(initialState);

  useEffect(() => {
    props.getAppointment(props.appointmentId);
  }, []);

  const focusoutHandler = (e) => {
    const { name, value } = e.currentTarget;
    props.validateFiled(value, name);
  };

  const continueHandler = (type: PaymentType) => {
    props.validateAllFiled(signingUpForm, (errors, isValid) => {
      if (!isValid) {
        return;
      }
      const customer: ICustomer = {
        email: signingUpForm.email,
        firstName: signingUpForm.name,
        lastName: signingUpForm.lastName,
        phone: signingUpForm.phoneNumber,
        scheduleId: props.appointment.id,
        paymentType: type,
        paymentMethod:
          type == PaymentType.Cash ? PaymentMethod.Cash : PaymentMethod.Stripe,
        paymentStatus: PaymentStatus.NotConfirmed,
      };
      props.addCustomer(customer);
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    setContactForm((prevState) => {
      return {
        ...prevState,
        isFormEmpty: false,
        [name]: value,
      };
    });
  };

  const errors = (fieldName) => {
    return props.errors[fieldName]?.map((item) => {
      return <div className="error-container">{item}</div>;
    });
  };

  let SigningUpFormProps: ISigningUpFormProps = {
    isAppointmentLoading: props.appointmentLoading,
    focusoutHandler,
    signingUpForm,
    handleChange,
    errors,
    appointment: props.appointment,
    addedCustomerSuccessful: props.addedCustomerSuccessful,
    customerLoading: props.customerLoading,
    setContactForm,
    continueHandler,
    paymentType: props.paymentType,
    customer: props.customer,
  };

  return <SigningUpForm {...SigningUpFormProps} />;
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  name: yup
    .string("Моля въведете валидно име")
    .required("Полето е задължително"),
  lastName: yup
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
});

const mapStateToProps = (rsdusers: any) => {
  let scheduleReducer: IState<IAppointment> = rsdusers.scheduleReducer;
  let customerReducer: ICustomerState = rsdusers.customerReducer;
  return {
    appointmentLoading: scheduleReducer.isFetching,
    appointment: scheduleReducer.item,
    customerLoading: customerReducer.isFetching,
    addedCustomerSuccessful: customerReducer.addedSuccessful,
    paymentType: customerReducer.paymentType,
    customer: customerReducer.item,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAppointment: (id: string) => dispatch(fetchAppointment(id)),
    addCustomer: (customer: ICustomer) => dispatch(addCustomer(customer)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withFormValidation(ScheduleFormContainer, validationSchema));
