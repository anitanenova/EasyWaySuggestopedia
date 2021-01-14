import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import {
  ScheduleType,
  IAppointment,
  IState,
} from "../../declarations/interfaces";
import { Appointments } from "../../components/Appointments";
import { fetchSchedule } from "../../store/Actions/Schedule/schedule";

interface IScheduleProps {
  scheduleType: ScheduleType;
  loadSchedules: any;
  schedules: IAppointment[];
  isLoading: boolean;
  levelSymbol: string;
}

const Schedule = (props: IScheduleProps) => {
  useEffect(() => {
    props.loadSchedules(props.scheduleType, props.levelSymbol);
  }, []);

  return (
    <Appointments schedules={props.schedules} isLoading={props.isLoading} />
  );
};

const mapStateToProps = (rsdusers: any) => {
  let state: IState<IAppointment[]> = rsdusers.scheduleReducer;
  return {
    schedules: state.data,
    isLoading: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadSchedules: (type: ScheduleType, levelSymbol: string) =>
      dispatch(fetchSchedule(type, levelSymbol)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
