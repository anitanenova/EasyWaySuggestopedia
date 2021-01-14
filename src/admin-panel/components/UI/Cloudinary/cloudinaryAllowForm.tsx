import React from "react";
import { SimpleForm } from "react-admin";

interface ICloudinaryAllowFormProps {
  setImageUrl: any;
  imageUrl: any;
  children: any;
  imageSource: string;
  parentProps: any;
  Parent: any;
}

const CloudinaryAllowForm = (props: ICloudinaryAllowFormProps) => {
  const { setImageUrl, imageUrl, imageSource, parentProps, Parent } = props;

  let formInitValues;
  return (
    <Parent {...parentProps}>
      <SimpleForm
        defaultValue={(formValues) => {
          if (formValues) {
            if (formValues[imageSource] != "") {
              formInitValues = { ...formValues };
              setImageUrl(formInitValues.image);
            }
            formValues.image = imageUrl;
          }
        }}
      >
        {props.children}
      </SimpleForm>
    </Parent>
  );
};

export default CloudinaryAllowForm;
