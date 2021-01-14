/*eslint-disable no-undef*/
import React, { useState } from "react";
import { Create, maxLength, TextInput, required } from "react-admin";
import { CloudinaryInput, CloudinaryAllowForm } from "../UI/Cloudinary";
import RichTextInput from "ra-input-rich-text";

const Ceate = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <CloudinaryAllowForm
      parentProps={props}
      imageUrl={imageUrl}
      setImageUrl={setImageUrl}
      Parent={Create}
      imageSource="image"
    >
      <CloudinaryInput
        source="image"
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        title="Качи снимка"
      />
      <TextInput
        resettable
        validate={required()}
        label="Име"
        source="firstName"
      />
      <TextInput
        resettable
        validate={required()}
        label="Фамилия"
        source="lastName"
      />
      <TextInput resettable label="Длъжност" source="position" />
      <TextInput
        multiline
        resettable
        validate={maxLength(110)}
        label="Кратко описание"
        source="description"
      />
      <RichTextInput resettable label="Описание" source="fullDescription" />
    </CloudinaryAllowForm>
  );
};

export default Ceate;
