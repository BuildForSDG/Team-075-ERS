import ConstantsActionTypes from './subscription.constants';

const INITIAL_STATE = {
  isPending: false,
  message: null,
  errorMessage: null
};


const subcriptionReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantsActionTypes.SUBSCRIBE_USER_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.SUBSCRIBE_USER_SUCCESS:
      return ({
        ...state,
        isPending: false,
        errorMessage: null,
        message: action.payload
      });
    case ConstantsActionTypes.SUBSCRIBE_USER_FAILED:
      return ({
        ...state,
        isPending: false,
        message: null,
        errorMessage: action.payload
      });
    default:
      return state;
  }
}

export default subcriptionReducer;
