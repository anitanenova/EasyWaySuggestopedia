import React from "react";

import styles from "./Button.module.css";

interface IButtonProps {
  btnType: string;
  clicked: any;
  children: any;
}

const button = (props: IButtonProps) => {
  return (
    <button
      className={[props.btnType, styles["btn"]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default button;
