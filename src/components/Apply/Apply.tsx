import React from "react";

import { withRouter, RouteComponentProps, Link } from "react-router-dom";

import style from "../Navbar/nav.module.css";

interface IApplyProps extends RouteComponentProps {
  smBtn: string[];
}

const apply = (props: IApplyProps) => {
  const btnApplyClasses = [
    ["nav-btn-menu"],
    style["btn-apply-special-width"],
    ["btn"],
    ["margin-bottom-big-sm"],
    ["margin-left-right-big"],
    ["btn-fit-width-content"],
    ["btn-fit-height-content"],
    ["btn-primary"],
  ];

  if (props.smBtn) {
    btnApplyClasses.push(style["btn-join-sm"]);
  }

  return (
    <Link
      className={btnApplyClasses.join(" ")}
      to={`${props.match.url}/apply/choise-type`}
    >
      запиши се
    </Link>
  );
};

export default withRouter(apply);
