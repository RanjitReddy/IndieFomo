import * as SessionAPIUtil from '../util/auth_api_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors: errors
  };
};


export const signUp = (user) => (dispatch) => {
  return SessionAPIUtil.signUp(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
      (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)),
    (err) => dispatch(receiveErrors(err.responseJSON)));
};

export const logout = (user) => (dispatch) => {
  return SessionAPIUtil.signOut()
  .then(user => dispatch(receiveCurrentUser(null)));
};