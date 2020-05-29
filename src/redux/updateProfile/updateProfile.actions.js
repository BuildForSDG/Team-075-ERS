import ConstantsActionTypes from './updateProfile.constants';

const updateUserProfileAsync = (
  name, phoneNo, emergencyName, emergencyPhone, id, token
) => (dispatch) => {
  dispatch({
    type: ConstantsActionTypes.UPDATE_USER_PROFILE_START
  });
  const bearer = `Bearer ${token}`;
  fetch(`https://emresys.herokuapp.com/api/auth/profile/${id}`, {
    method: 'post',
    headers: {
      Authorization: bearer,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      phoneNo,
      emergencyContact: {
        name: emergencyName,
        phoneNo: emergencyPhone
      }
    })
  })
    .then((response) => {
      dispatch({
        type: ConstantsActionTypes.UPDATE_USER_PROFILE_SUCCESS,
        payload: response.status
      });
      return response.json();
    })
    .catch((error) => {
      dispatch({
        type: ConstantsActionTypes.UPDATE_USER_PROFILE_FAILED,
        payload: error.message
      });
    });
};

export default updateUserProfileAsync;
