import React, { useState, useEffect } from "react";
import { Edit, TextInput, required, maxLength } from "react-admin";
import { CloudinaryInput, CloudinaryAllowForm } from "../UI/Cloudinary";
import RichTextInput from "ra-input-rich-text";

const PostTitle: any = ({ record }) => {
  return <span>График: {record ? `"${record.name}"` : ""}</span>;
};

const EditUser = (props) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <CloudinaryAllowForm
      parentProps={props}
      imageUrl={imageUrl}
      imageSource="image"
      setImageUrl={setImageUrl}
      Parent={Edit}
    >
      <CloudinaryInput
        source="image"
        imageUrl={imageUrl}
        setImageUrl={setImageUrl}
        title="Качи снимка"
      />

      <TextInput hidden disabled source="id" />
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

export default EditUser;
