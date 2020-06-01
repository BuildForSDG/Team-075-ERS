import ConstantsActionTypes from './response.constants';

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
