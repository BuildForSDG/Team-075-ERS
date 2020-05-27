import ConstantsActionTypes from './updateProfile.constants';

const INITIAL_STATE = {
  isPending: false,
  updateMessage: null,
  errorMessage: null
};


const updateReducer = (state = INITIAL_STATE,  action = {}) => {
  switch (action.type) {
    case ConstantsActionTypes.UPDATE_USER_PROFILE_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.UPDATE_USER_PROFILE_SUCCESS:
      return ({
        ...state,
        isPending: false,
        updateMessage: action.payload
      });
    case ConstantsActionTypes.UPDATE_USER_PROFILE_FAILED:
      return ({
        ...state,
        isPending: false,
        errorMessage: action.payload
      });
    default:
      return state;
  }
};

export default updateReducer;