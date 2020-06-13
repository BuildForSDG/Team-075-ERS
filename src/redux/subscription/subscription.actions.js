import ConstantsActionTypes from './subscription.constants';

/**
 * Create a subscripotion in the database
 *
 * @param {Subscription Object} subscription
 * @param {String} token
 */
export const createSubscription = (
  subscription,
  token
) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SUBSCRIBE_USER_START
  });
  const bearer = `Bearer ${token}`;
  fetch(`${process.env.REACT_APP_API_URL}/subscribe`, {
    method: 'post',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      subscription
    })
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: ConstantsActionTypes.SUBSCRIBE_USER_SUCCESS,
        payload: response.status
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ConstantsActionTypes.SUBSCRIBE_USER_FAILED,
        payload: error.message
      });
    });
};

/**
 * Get a subscription
 *
 * @param {Subscription Object} subscription
 */
export const getSubscription = (subscription) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.GET_SUBSCRIPTION_START
  });
  fetch(`${process.env.REACT_APP_API_URL}/subscribe/${subscription.endpoint}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: ConstantsActionTypes.SUBSCRIBE_USER_SUCCESS,
        payload: response
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ConstantsActionTypes.SUBSCRIBE_USER_FAILED,
        payload: error.message
      });
    });
};

/**
 * Get all subscriptions for a userId
 *
 * @param {Subscription Object} subscription
 */
export const getAllUsersSubscription = (userId) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.GET_SUBSCRIPTION_START
  });
  fetch(`${process.env.REACT_APP_API_URL}/subscribe/${userId}`, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((subscriptions) => {
      console.log(subscriptions);
      dispatch({
        type: ConstantsActionTypes.SUBSCRIBE_USER_SUCCESS,
        payload: subscriptions
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ConstantsActionTypes.SUBSCRIBE_USER_FAILED,
        payload: error.message
      });
    });
};

/**
 * Update a Subscription
 *
 * @param {Subscription Object} subscription
 * @param {String} token
 */
export const updateSubscription = (subscription, token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SUBSCRIBE_USER_START
  });
  const bearer = `Bearer ${token}`;
  fetch(`${process.env.REACT_APP_API_URL}/${subscription.endpoint}`, {
    method: 'put',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({
      subscription
    })
  })
    .then((response) => {
      console.log(response);
      dispatch({
        type: ConstantsActionTypes.SUBSCRIBE_USER_SUCCESS,
        payload: response
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ConstantsActionTypes.SUBSCRIBE_USER_FAILED,
        payload: error.message
      });
    });
};
