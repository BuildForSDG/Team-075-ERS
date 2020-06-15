import ConstantsActionTypes from './user.constants';

const INITIAL_STATE = {
  currentUser: null,
  login: null,
  signup: null,
  isLoading: false,
  getError: null,
  subscriptionStatus: null
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
        pending: true,
        isLoading: action.payload
      });
    case ConstantsActionTypes.LOGIN_USER_SUCCESS:
      return ({
        ...state,
        login: action.payload,
        pending: false,
        isLoading: false
      });
    case ConstantsActionTypes.LOGIN_USER_FAILED:
      return ({
        ...state,
        login: action.payload,
        pending: false,
        isLoading: false
      });
    case ConstantsActionTypes.SIGN_UP_USER_START:
      return ({
        ...state,
        pending: true,
        login: null,
        currentUser: null,
        isLoading: action.payload
      });
    case ConstantsActionTypes.SIGN_UP_USER_SUCCESS:
      return ({
        ...state,
        signup: action.payload,
        pending: false,
        login: null,
        isLoading: false,
        subscriptionStatus: true
      });
    case ConstantsActionTypes.SIGN_UP_USER_FAILED:
      return ({
        ...state,
        signup: action.payload,
        pending: false,
        isLoading: false
      });
    case ConstantsActionTypes.GET_USER_PROFILE_START:
      return ({
        ...state,
        isLoading: true
      });
    case ConstantsActionTypes.GET_USER_PROFILE_SUCCESS:
      return ({
        ...state,
        isLoading: false,
        currentUser: action.payload
      });
    case ConstantsActionTypes.GET_USER_PROFILE_FAILED:
      return ({
        ...state,
        isLoading: false,
        getError: action.payload
      });
    case ConstantsActionTypes.LOGOUT_USER:
      return ({
        ...state,
        currentUser: null,
        login: null,
        signup: null,
        isLoading: false,
        getError: null
      });
    case ConstantsActionTypes.LOAD_USER:
      return ({
        ...state,
        pending: false,
        currentUser: action.payload
      });
    case ConstantsActionTypes.SUBSCRIPTION_STATUS:
      return ({
        ...state,
        subscriptionStatus: null
      });
    default:
      return state;
  }
};

export default userReducer;
