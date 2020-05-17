import ConstantsActionTypes from './user.constants';

export const setCurrentUser = (user) => ({
  type: ConstantsActionTypes.SET_CURRENT_USER,
  payload: user
});

export const loginUserStart = () => ({ type: ConstantsActionTypes.LOGIN_USER_SUCCESS });
export const loginUserFailed = (error) => ({
  type: ConstantsActionTypes.LOGIN_USER_FAILED,
  payload: error.message
});
export const loginUserSuccess = (message) => ({
  type: ConstantsActionTypes.LOGIN_USER_SUCCESS,
  payload: message
});
export const loginUserStartAsync = (email, password) => (dispatch) => {
  dispatch(loginUserStart());
  fetch('http://localhost:3001/api/auth/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((data) => {
      dispatch(loginUserSuccess(data.status));
    })
    .catch((error) => {
      dispatch(loginUserFailed(error.message));
    });
};

export const logoutUser = () => ({
  type: ConstantsActionTypes.LOGOUT_USER,
  payload: true
});

export const signUpUserStart = () => ({ type: ConstantsActionTypes.SIGN_UP_USER_START });
export const signUpUserFailed = (error) => ({
  type: ConstantsActionTypes.SIGN_UP_USER_FAILED,
  payload: error.message
});
export const signUpUserSuccess = (message) => ({
  type: ConstantsActionTypes.SIGN_UP_USER_SUCCESS,
  payload: message
});
export const signUpUserStartAsync = (name, email, phoneNo, emergencyContactName,
  emergencyContactPhoneNo, password) => (dispatch) => {
  dispatch(signUpUserStart);
  fetch('http://localhost:3001/api/auth/signup', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name,
      email,
      phoneNo,
      emergencyContact: {
        name: emergencyContactName,
        phoneNo: emergencyContactPhoneNo
      },
      password
    })
  })
    .then((data) => {
      dispatch(signUpUserSuccess(data.status));
    })
    .catch((error) => {
      dispatch(signUpUserFailed(error.message));
    });
};
