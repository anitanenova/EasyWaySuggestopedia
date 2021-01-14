import React from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { ICourse } from "../../../../declarations/interfaces";
import style from "../style.module.css";

interface ICourseProps extends RouteComponentProps {
  courses: ICourse[];
  header: string;
  direction: string;
}

const Course = ({ history, courses, header, direction }: ICourseProps) => {
  let courseResult = courses.map((item) => {
    return (
      <Link key={item.id} to={`/course/${item.id}`}>
        <p className={`${"txt-title-medium"} ${style["course-title-link"]}`}>
          {item.title} {item.levelSymbol}
        </p>
      </Link>
    );
  });

  const clickHandler = (event) => {
    history.push(direction);
  };

  return (
    <Col md="6">
      <div className={style["course-info"]}>
        <p className={`${"txt-title-big"} ${"txt-uppercase"} ${"txt-bold"}`}>
          {header}
        </p>

        {courseResult}
      </div>
      <button onClick={clickHandler} className={"btn-primary-long"}>
        виж още <FontAwesomeIcon icon={faCaretRight} size="sm" />
      </button>
    </Col>
  );
};

export default withRouter(Course);
