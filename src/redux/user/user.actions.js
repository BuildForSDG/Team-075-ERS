import ConstantsActionTypes from './user.constants';

export const setCurrentUser = (user) => ({
  type: ConstantsActionTypes.SET_CURRENT_USER,
  payload: user
});

export const loginUserStartAsync = (email, password) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.LOGIN_USER_START,
    payload: true
  });

  fetch('http://localhost:3001/api/auth/login', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.LOGIN_USER_SUCCESS,
        payload: response.status
      });
      return response.json();
    }).then((data) => {
      dispatch({
        type: ConstantsActionTypes.LOAD_USER,
        payload: data
      });
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.LOGIN_USER_FAILED,
        payload: error.message
      });
    });
};

export const logoutUser = () => ({
  type: ConstantsActionTypes.LOGOUT_USER,
  payload: true
});


export const signUpUserStartAsync = (
  name, email, phoneNo, emergencyContactName, emergencyContactPhoneNo, password
) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SIGN_UP_USER_START,
    payload: true
  });

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
      dispatch({
        type: ConstantsActionTypes.SIGN_UP_USER_SUCCESS,
        payload: data.status
      });
      return data.json();
    }).then((user) => {
      dispatch({
        type: ConstantsActionTypes.LOAD_USER,
        payload: user
      });
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.SIGN_UP_USER_FAILED,
        payload: error.message
      });
    });
};
