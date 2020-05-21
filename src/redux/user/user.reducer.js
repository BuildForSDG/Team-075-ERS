import ConstantsActionTypes from './user.constants';

const INITIAL_STATE = {
  currentUser: null,
  login: null,
  signup: null,
  pending: true,
};


const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ConstantsActionTypes.SET_CURRENT_USER:
      return ({
        ...state,
        currentUser: action.payload
      });
    case ConstantsActionTypes.LOGIN_USER_START:
      return ({
        ...state,
        currentUser: null,
        login: null,
        signup: null,
        pending: true
      });
    case ConstantsActionTypes.LOGIN_USER_SUCCESS:
      return ({
        ...state,
        login: action.payload,
        pending: false
      });
    case ConstantsActionTypes.LOGIN_USER_FAILED:
      return ({
        ...state,
        login: action.payload,
        pending: false
      });
    case ConstantsActionTypes.SIGN_UP_USER_START:
      return ({
        ...state,
        pending: true,
        login: null,
        currentUser: null
      });
    case ConstantsActionTypes.SIGN_UP_USER_SUCCESS:
      return ({
        ...state,
        signup: action.payload,
        pending: false,
        login: null
      });
    case ConstantsActionTypes.SIGN_UP_USER_FAILED:
      return ({
        ...state,
        signup: action.payload,
        pending: false
      });
    case ConstantsActionTypes.LOGOUT_USER:
      return ({
        ...state,
        pending: action.payload,
        login: null,
        signup: null,
        currentUser: null
      });
    case ConstantsActionTypes.LOAD_USER:
      return ({
        ...state,
        pending: false,
        currentUser: action.payload
      });
    default:
      return state;
  }
};

export default userReducer;
