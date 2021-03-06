import ConstantsActionTypes from './modal.constants';

const INITIAL_STATE = {
  showFeedback: false,
  showProfile: false,
  showVictims: false,
  promptLogIn: false,
  eyeWitness: false,
  showLogout: false,
  updateProfile: false,
  index: undefined
};

const modalReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantsActionTypes.SHOW_FEEDBACK_SUCCESS:
      return ({
        ...state,
        showFeedback: !state.showFeedback
      });
    case ConstantsActionTypes.SHOW_USER_PROFILE:
      return ({
        ...state,
        showProfile: !state.showProfile
      });
    case ConstantsActionTypes.SHOW_VICTIMS_INFO:
      return ({
        ...state,
        showVictims: !state.showVictims,
        index: action.payload
      });
    case ConstantsActionTypes.PROMPT_LOGIN:
      return ({
        ...state,
        promptLogIn: !state.promptLogIn
      });
    case ConstantsActionTypes.EYE_WITNESS:
      return ({
        ...state,
        eyeWitness: !state.eyeWitness
      });
    case ConstantsActionTypes.SHOW_LOGOUT_MODAL:
      return ({
        ...state,
        showLogout: !state.showLogout
      });
    case ConstantsActionTypes.CLOSE_ALL_MODAL:
      return ({
        ...state,
        showFeedback: false,
        showProfile: false,
        showVictims: false,
        promptLogIn: false,
        eyeWitness: false,
        showLogout: false,
        index: undefined
      });
    case ConstantsActionTypes.UPDATE_PROFILE:
      return ({
        ...state,
        updateProfile: !state.updateProfile
      });
    default:
      return state;
  }
};

export default modalReducer;
