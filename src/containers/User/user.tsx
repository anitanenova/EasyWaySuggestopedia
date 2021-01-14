import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IUser, IState } from "../../declarations/interfaces";
import { Users } from "../../components/Users";
import { fetchUsers } from "../../store/Actions/User";

interface IUserProps {
  loadUsers: any;
  users: IUser[];
  isLoading: boolean;
}

const User = (props: IUserProps) => {
  useEffect(() => {
    props.loadUsers();
  }, []);

  return <Users users={props.users} loading={props.isLoading} />;
};

const mapStateToProps = (rsdusers: any) => {
  let state: IState<IUser[]> = rsdusers.userReducer;
  return {
    users: state.data,
    isLoading: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
