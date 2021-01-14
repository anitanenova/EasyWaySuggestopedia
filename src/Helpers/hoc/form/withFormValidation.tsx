import React from "react";
import * as yup from "yup";
import { IValidationForm } from "../../../declarations/interfaces";

interface IWithFormValidationState {
  errors: any;
  isFormTouched: boolean;
  isValid: boolean;
}

export const withFormValidation = (WrappedComponent, validationSchema) => {
  class WithFormValidation extends React.Component<
    any,
    IWithFormValidationState
  > {
    constructor(props) {
      super(props);
      this.state = {
        errors: {},
        isFormTouched: false,
        isValid: false,
      };
    }

    validateFiled = (value, field) => {
      this.setState({ isFormTouched: true });
      yup
        .reach(validationSchema, field)
        .validate(value, { abortEarly: false })
        .then(() => {
          let oldErrors = {
            ...this.state.errors,
          };
          delete oldErrors[field];
          this.setState({ errors: oldErrors });
        })
        .catch((err) => {
          const errors = err.inner.reduce((acc: string[], { message }) => {
            acc.push(message);
            return acc;
          }, []);

          let oldErrors = {
            ...this.state.errors,
          };
          oldErrors[field] = errors;
          this.setState({ errors: oldErrors });
        });
    };

    validateAllFiled = (signingUpForm, callBack) => {
      this.setState({ isFormTouched: true });

      validationSchema
        .validate(signingUpForm, { abortEarly: false })
        .then(() => {
          this.setState({ errors: {}, isValid: true });
          callBack({}, true);
        })
        .catch((err) => {
          const errors = err.inner.reduce((acc, { path, message }) => {
            acc[path] = (acc[path] || []).concat(message);
            return acc;
          }, {});
          this.setState({ errors: errors, isValid: false });
          callBack(errors, false);
        });
    };

    render() {
      const newProps: IValidationForm = {
        validateFiled: this.validateFiled,
        validateAllFiled: this.validateAllFiled,
        errors: this.state.errors,
        isValid: this.state.isValid,
      };

      return <WrappedComponent {...this.props} {...newProps} />;
    }
  }

  return WithFormValidation;
};
