import ConstantsActionTypes from './sendHelp.constants'

export const sendHelp = location => ({
    type: ConstantsActionTypes.SET_USER_LOCATION,
    payload: location
});

export const helpSent = () => ({
    type: ConstantsActionTypes.SENT_USER_LOCATION
});

export const postUserDetailsStart = () => ({ type: ConstantsActionTypes.POST_USER_DETAILS_START});

export const postUserDetailsStartSuccess = (response) => ({
    type: ConstantsActionTypes.POST_USER_DETAILS_SUCCESS,
    payload: response
})

export const postUserDetailsFailed = (message) => ({
    type: ConstantsActionTypes.POST_USER_DETAILS_FAILED,
    payload: message
})

export const postUserDetailsStartAsync = (lat, lng, phoneNo, userId) => {
    return dispatch => {
        dispatch(postUserDetailsStart())
        fetch('http://localhost:3001/api/report', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                location:{
                latitude: lat.toString(),
                longitude: lng.toString()
                },
                reporter:{
                phoneNo,
                userId
                }
            })
        })
      .then((data) => {
          dispatch(postUserDetailsStartSuccess(data));
      })
      .catch((error) => {
          dispatch(postUserDetailsFailed(error.message));
      });
    }
}

