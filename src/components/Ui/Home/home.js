import React, { Fragment } from "react";

import style from "./home.module.css";

import { BackgroundImage } from "../../Image/BackgroundImage";
import { Courses } from "../../Courses/Dashboard";
import { Reviews } from "../../Reviews";
import ArticleList from "../../Articles/Articles";
import InterviewPart from "../../Interview/interview-part";
import { LocationMap } from "../../LocationMap";

const Home = () => {
  let backgrounImage =
    "https://res.cloudinary.com/easy-way-suggestopedia/image/upload/v1590671614/CommonImages/home-bg_ml14cr.jpg";

  return (
    <Fragment>
      <BackgroundImage
        image={backgrounImage}
        size="big"
        position="center"
        title={"център по класическа сугестопедия в софия"}
      />
      <Courses />
      <div className={"margin-bottom-big-lg"}></div>
      <InterviewPart />
      <div className={"margin-bottom-big-lg"}></div>
      <Reviews />
      <div className={"margin-bottom-big-lg"}></div>
      <ArticleList />
      <div className={"margin-bottom-big-lg"}></div>
      <div className={style.locationMapContainer}>
        <LocationMap />
      </div>

      <div className={"margin-bottom-big-lg"}></div>
    </Fragment>
  );
};

export default Home;
