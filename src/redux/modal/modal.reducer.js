import ConstantsActionTypes from './modal.constants';

const INITIAL_STATE = {
  showFeedback: false,
  showProfile: false,
  showVictims: false
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
        showVictims: !state.showVictims
      });
    default:
      return state;
  }
};

export default modalReducer;
