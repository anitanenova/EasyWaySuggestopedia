import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch } from "react-router-dom";
import AdminPanel from "./admin-panel/admin-panel";
import Home from "./components/Ui/Home/home";
import { Layout } from "./Helpers/hoc/layout";
import { LayoutAdmin } from "./Helpers/hoc/layout/layoutAdmin";
import { ScheduleAdults } from "./components/Ui/Schedule/ScheduleAdults";
import { ScheduleChildrens } from "./components/Ui/Schedule/ScheduleChildrens";
import { CourseAdults } from "./components/Ui/Courses/CoursesAdults";
import { CourseChildrens } from "./components/Ui/Courses/CoursesChildrens";
import { Contacts } from "./components/Ui/Contacts";
import { Members } from "./components/Ui/Members";
import { UserDetails } from "./components/Ui/Members/UserDetails";
import { Description } from "./components/Ui/Suggestopedia/WhatIsThis";
import { History } from "./components/Ui/Suggestopedia/History";
import { TheSevenLaws } from "./components/Ui/Suggestopedia/TheSevenLaws";
import { Gallery } from "./components/Ui/Gallery";
import { CourseDetails } from "./components/Ui/Courses/CourseDetails";
import { CoursesIndividual } from "./components/Ui/Courses/CoursesIndividual";
import { CoursesOnline } from "./components/Ui/Courses/CoursesOnline";
import { Questions } from "./components/Ui/Suggestopedia/Questions";
import { SuccessPayment } from "./components/Ui/SuccessPayment";
import { CancelPayment } from "./components/Ui/CancelPayment";
import { InterviewMimi } from "./components/Ui/Articles/MimiSuggestopedia";
import { Interview } from "./components/Ui/Articles/Interview";
import { SevenReason } from "./components/Ui/Articles/SevenReason";

import { BrowserRouter as Router, Redirect } from "react-router-dom";

import { AppRoute } from "./Helpers/hoc/appRoute";
import "moment/locale/bg";
import moment from "moment";

import { ScrollToTop } from "./Helpers/hoc/scroll";

import { NoMatch } from "./components/NoMatch";

function App(props) {
  moment().locale("bg");
  return (
    <Fragment>
      <Router basename="/">
        <ScrollToTop>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <AppRoute path="/home" component={Home} layout={Layout} />
            <AppRoute
              path="/description"
              component={Description}
              layout={Layout}
            />

            <AppRoute path="/history" component={History} layout={Layout} />
            <AppRoute
              path="/the-seven-laws"
              component={TheSevenLaws}
              layout={Layout}
            />
            <AppRoute path="/questions" component={Questions} layout={Layout} />
            <AppRoute path="/gallery" component={Gallery} layout={Layout} />
            <AppRoute path="/history" component={History} layout={Layout} />
            <AppRoute path="/members" component={Members} layout={Layout} />
            <AppRoute
              path="/user/:id"
              component={UserDetails}
              layout={Layout}
            />
            <AppRoute
              path="/schedule-adults"
              component={ScheduleAdults}
              layout={Layout}
            />
            <AppRoute
              path="/schedule-childrens"
              component={ScheduleChildrens}
              layout={Layout}
            />
            <AppRoute
              path="/course-childrens"
              component={CourseChildrens}
              layout={Layout}
            />
            <AppRoute
              path="/course-adults"
              component={CourseAdults}
              layout={Layout}
            />
            <AppRoute
              path="/course-individual"
              component={CoursesIndividual}
              layout={Layout}
            />
            <AppRoute
              path="/course-online"
              component={CoursesOnline}
              layout={Layout}
            />
            <AppRoute
              path="/course/:id"
              component={CourseDetails}
              layout={Layout}
            />
            <AppRoute path="/contacts" component={Contacts} layout={Layout} />
            <AppRoute
              path="/success"
              component={SuccessPayment}
              layout={Layout}
            />
            <AppRoute
              path="/cancel"
              component={CancelPayment}
              layout={Layout}
            />
            <AppRoute
              path="/article/mimi-and-suggestopedia"
              component={InterviewMimi}
              layout={Layout}
            />
            <AppRoute
              path="/article/interview"
              component={Interview}
              layout={Layout}
            />
            <AppRoute
              path="/article/seven-reason"
              component={SevenReason}
              layout={Layout}
            />

            <AppRoute
              path="/Admin"
              component={AdminPanel}
              layout={LayoutAdmin}
            />

            <AppRoute component={NoMatch} layout={Layout} />
          </Switch>
        </ScrollToTop>
      </Router>
    </Fragment>
  );
}

export default App;
