import ConstantsActionTypes from './response.constants';
import subscribeUser from '../../pushSubscription';

export const getAllVictims = (token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.GET_VICTIMS_START
  });
  const bearer = `Bearer ${token}`;
  fetch('https://emresys.herokuapp.com/api/report/', {
    method: 'get',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    dispatch({
      type: ConstantsActionTypes.GET_VICTIMS_SUCCESS,
      payload: response.message
    });
    return response.json();
  })
  .then((data) => {
    dispatch({
      type: ConstantsActionTypes.LOAD_VICTIMS,
      payload: data
    });
  })
  .catch((error) => {
    dispatch({
      type: ConstantsActionTypes.GET_VICTIMS_FAILED,
      payload: error.message
    });
  })
};

export const getAllUnits = (token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.GET_RESPONSE_UNITS_START
  });
  const bearer = `Bearer ${token}`;
  fetch('https://emresys.herokuapp.com/api/response-unit/location', {
    method: 'get',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    dispatch({
        type: ConstantsActionTypes.GET_RESPONSE_UNITS_SUCCESS,
        payload: response.message
    });
    return response.json();
  })
  .then((data) => {
    dispatch({
        type: ConstantsActionTypes.LOAD_ALL_UNITS,
        payload: data
    });
  })
  .catch((error) => {
    dispatch({
        type: ConstantsActionTypes.GET_RESPONSE_UNITS_FAILED,
        payload: error.message
    });
  })
};

export const logoutResponseUnit = () => ({ type: ConstantsActionTypes.LOGOUT_RESPONSE_UNIT });

export const loginResponseUnitAsync = (email, password, api) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.LOGIN_RESPONSE_UNIT_START,
    payload: true
  });
  fetch(`https://emresys.herokuapp.com/${api}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.LOGIN_RESPONSE_UNIT_SUCCESS,
        payload: response.status
      });
      return response.json();
    }).then((data) => {
      dispatch({
        type: ConstantsActionTypes.LOAD_RESPONSE_UNIT,
        payload: data
      });
      subscribeUser();
      return data;
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.LOGIN_RESPONSE_UNIT_FAILED,
        payload: error.message
      });
    });
};

export const signupResponseUnit = (
  name,
  email,
  password,
  primaryPhoneNo,
  secondaryPhoneNo,
  primaryAddress,
  SecondaryAddress,
  website,
  api,
  token
) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SIGNUP_RESPONSE_UNIT_START,
    payload: true
  });
  const bearer = `Bearer ${token}`;
  fetch(`https://emresys.herokuapp.com/${api}`, {
    method: 'post',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email,
      primaryPhoneNo,
      secondaryPhoneNo,
      primaryAddress,
      SecondaryAddress,
      website,
      password
    })
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.SIGNUP_RESPONSE_UNIT_SUCCESS,
        payload: response.status
      });
      return response.json();
    }).then((data) => {
      dispatch({
        type: ConstantsActionTypes.RESPONSE_UNIT_MESSAGE,
        payload: data
      });
      return data;
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.SIGNUP_RESPONSE_UNIT_FAILED,
        payload: error.message
      });
    });
};
