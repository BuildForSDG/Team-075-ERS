import ConstantsActionTypes from './response.constants';
import subscribeUser from '../../pushSubscription';

export const getAllVictims = (token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.GET_VICTIMS_START
  });
  const bearer = `Bearer ${token}`;
  fetch(`${process.env.REACT_APP_API_URL}/report/`, {
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
    });
};

export const getAllUnits = (token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.GET_RESPONSE_UNITS_START
  });
  const bearer = `Bearer ${token}`;
  fetch(`${process.env.REACT_APP_API_URL}/response-unit/location`, {
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
    });
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
      // eslint-disable-next-line no-underscore-dangle
      subscribeUser(data.responseUnit._id, data.token);
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

export const updateVictimStatus = (
  id,
  userId,
  phoneNo,
  lat,
  lng,
  status,
  token
) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.UPDATE_VICTIM_PROFILE_START
  });
  const bearer = `Bearer ${token}`;
  fetch(`${process.env.REACT_APP_API_URL}/report/id/${id}`, {
    method: 'put',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      reporter: {
        userId,
        phoneNo
      },
      location: {
        latitude: lat.toString(),
        longitude: lng.toString()
      },
      response: {
        status
      }
    })
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.UPDATE_VICTIM_PROFILE_SUCCESS,
        payload: response.status
      });
      if (response.status === 201) {
        return getAllVictims(token);
      }
      return response.json();
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.UPDATE_VICTIM_PROFILE_FAILED,
        payload: error.message
      });
    });
};

export const resetVictimupdate = () => ({ type: ConstantsActionTypes.RESET_VICTIM_UPDATE });

export const sendResponseUnitLocation = (name, location, token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SEND_RESPONSE_UNIT_LOCATION_START
  });
  const bearer = `Bearer ${token}`;
  fetch(`${process.env.REACT_APP_API_URL}/response-unit/location`, {
    method: 'post',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      location: {
        latitude: location.lat.toString(),
        longitude: location.lng.toString()
      }
    })
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.SEND_RESPONSE_UNIT_LOCATION_SUCCESS,
        payload: response.status
      });
      return response.json();
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.SEND_RESPONSE_UNIT_LOCATION_FAILED,
        payload: error.message
      });
    });
};
