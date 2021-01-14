import React, { useState } from "react";
import { Create, FormTab, SimpleForm, TextInput, required } from "react-admin";
import { makeStyles } from "@material-ui/core/styles";
import { CloudinaryInput, CloudinaryAllowForm } from "../UI/Cloudinary";

export const styles = {
  price: { width: "7em" },
  width: { width: "7em" },
  height: { width: "7em" },
  stock: { width: "7em" },
  widthFormGroup: { display: "inline-block" },
  heightFormGroup: { display: "inline-block", marginLeft: 32 },
};

const useStyles = makeStyles(styles);

const ProductCreate = (props) => {
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

      <TextInput resettable label="Име" source="name" />
    </CloudinaryAllowForm>
  );
};

export default ProductCreate;
