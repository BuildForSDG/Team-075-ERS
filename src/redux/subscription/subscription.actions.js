import ConstantsActionTypes from './subscription.constants';

export const subscribeUnit = (
  endpoint='https://emresys.herokuapp.com/api/report/',
  userId,
  token
) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SUBSCRIBE_USER_START
  });
  const bearer = `Bearer ${token}`;
  fetch('http://localhost:3001/api/subscribe', {
    method: 'post',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      endpoint,
      userId,
      token
    })
  })
  .then((response) => {
    dispatch({
      type: ConstantsActionTypes.SUBSCRIBE_USER_SUCCESS,
      payload: response.status
    });
    return;
  })
  .catch((error) => {
    dispatch({
      type: ConstantsActionTypes.SUBSCRIBE_USER_FAILED,
      payload: error.message
    });
  })
}

export const getSubscription = (userId) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.GET_SUBSCRIPTION_START
  });
  fetch(`http://localhost:3001/api/subscribe/${userId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    dispatch({
      type: ConstantsActionTypes.SUBSCRIBE_USER_SUCCESS,
      payload: response
    });
    return;
  })
  .catch((error) => {
    dispatch({
      type: ConstantsActionTypes.SUBSCRIBE_USER_FAILED,
      payload: error.message
    });
  })
}

export const updateSubscription = (endpoint, userId, token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SUBSCRIBE_USER_START
  });
  const bearer = `Bearer ${token}`;
  fetch(`http://localhost:3001/api/subscribe/${userId}`, {
    method: 'put',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      endpoint,
      userId,
      token
    })
  })
  .then((response) => {
    dispatch({
      type: ConstantsActionTypes.SUBSCRIBE_USER_SUCCESS,
      payload: response
    });
    return;
  })
  .catch((error) => {
    dispatch({
      type: ConstantsActionTypes.SUBSCRIBE_USER_FAILED,
      payload: error.message
    });
  })
}
