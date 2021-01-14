import React, { useState } from "react";
import { Edit, TextInput } from "react-admin";
import { CloudinaryInput, CloudinaryAllowForm } from "../UI/Cloudinary";

const ProductTitle = ({ record }) => <span>Картинка</span>;

const ProductEdit = (props) => {
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

      <TextInput resettable label="Име" source="name" />
    </CloudinaryAllowForm>
  );
};

export default ProductEdit;
