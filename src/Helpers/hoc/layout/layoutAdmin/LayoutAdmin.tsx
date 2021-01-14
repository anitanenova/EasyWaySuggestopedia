import React, { Fragment } from "react";
import style from "./LayoutAdmin.module.css";

const lyoutAdmin = (props: any) => {
  return (
    <Fragment>
      <main className={style.Content}>{props.children}</main>
    </Fragment>
  );
};

export default lyoutAdmin;
