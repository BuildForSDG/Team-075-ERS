import ConstantsActionTypes from './report.constants';

export const resetError = () => ({ type: ConstantsActionTypes.RESET_ERROR_MESSAGE });

export const sendReportAsync = (userId, phoneNo, latitude, longitude, token) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.SEND_REPORT_START,
    payload: true
  });
  const bearer = `Bearer ${token}`;
  fetch('https://emresys.herokuapp.com/api/report', {
    method: 'post',
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
        latitude: latitude.toString(),
        longitude: longitude.toString()
      },
      imageUrl: 'https://jkjuurrr.com'
    })
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: ConstantsActionTypes.SEND_REPORT_SUCCESS,
          payload: response.status
        });
      }
      if (response.status === 422) {
        dispatch({
          type: ConstantsActionTypes.SEND_REPORT_FAILED,
          payload: response.status
        });
      }
      return response.json();
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.SEND_REPORT_FAILED,
        payload: error.message
      });
    });
};

export const reportAccident = (//action
  userId, phoneNo, latitude, longitude, type, personsInvolved, description, imageUrl, token
) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.REPORT_ACCIDENT_START,
    payload: true
  });
  console.log(token)
  const bearer = `Bearer ${token}`;
  fetch('http://localhost:3001/api/report/eye-witness', {
    method: 'post',
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
        latitude: latitude.toString(),
        longitude: longitude.toString()
      },
      type,
      personsInvolved,
      description,
      imageUrl: imageUrl.toString()
    })
  })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: ConstantsActionTypes.REPORT_ACCIDENT_SUCCESS,
          payload: response.status
        });
        return;
      }
        dispatch({
          type: ConstantsActionTypes.REPORT_ACCIDENT_FAILED,
          payload: response.status
        });
      return response.json();
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.REPORT_ACCIDENT_FAILED,
        payload: error.message
      });
    });
};
