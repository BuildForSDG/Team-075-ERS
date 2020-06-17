import ConstantsActionTypes from './modal.constants';

export const showFeedbackSuccess = () => ({ type: ConstantsActionTypes.SHOW_FEEDBACK_SUCCESS });
export const showUserProfile = () => ({ type: ConstantsActionTypes.SHOW_USER_PROFILE });
export const showVictimsInfo = (index) => ({
  type: ConstantsActionTypes.SHOW_VICTIMS_INFO,
  payload: index
});
export const promptLogIn = () => ({ type: ConstantsActionTypes.PROMPT_LOGIN });
export const closeAllModal = () => ({ type: ConstantsActionTypes.CLOSE_ALL_MODAL });
export const eyeWitness = () => ({ type: ConstantsActionTypes.EYE_WITNESS });
export const showLogoutModal = () => ({ type: ConstantsActionTypes.SHOW_LOGOUT_MODAL });
export const toggleInput = () => ({ type: ConstantsActionTypes.UPDATE_PROFILE });
