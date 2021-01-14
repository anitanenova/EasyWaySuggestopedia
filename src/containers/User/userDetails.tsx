import React, { useEffect } from "react";
import { connect } from "react-redux";
import { IUser, IState } from "../../declarations/interfaces";
import { UserDetails } from "../../components/Users/UserDetails";
import { fetchUser } from "../../store/Actions/User";

interface IUserProps {
  loadUser: any;
  user: IUser;
  isLoading: boolean;
  userId: string;
}

const UserDetailsContainers = (props: IUserProps) => {
  useEffect(() => {
    props.loadUser(props.userId);
  }, []);

  return <UserDetails user={props.user} loading={props.isLoading} />;
};

const mapStateToProps = (rsdusers: any) => {
  let state: IState<IUser> = rsdusers.userReducer;
  return {
    user: state.item,
    isLoading: state.isFetching,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadUser: (id: string) => dispatch(fetchUser(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailsContainers);
