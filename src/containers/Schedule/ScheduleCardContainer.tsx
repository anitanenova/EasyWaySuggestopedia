import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IAppointment, IState } from "../../declarations/interfaces";
import { ScheduleCards } from "../../components/ScheduleCards";
import { fetchSchedule } from "../../store/Actions/Schedule/schedule";

interface IScheduleProps {
  loadSchedules: any;
  schedules: IAppointment[];
  isLoading: boolean;
}

const ScheduleCardContainer = (props: IScheduleProps) => {
  useEffect(() => {
    props.loadSchedules();
  }, []);

  return (
    <ScheduleCards schedules={props.schedules} isLoading={props.isLoading} />
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
    loadSchedules: () => dispatch(fetchSchedule()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ScheduleCardContainer));
