import ConstantsActionTypes from './response.constants';

const INITIAL_STATE = {
    victims: [],
    isPending: false,
    errorMessage: null,
    message: null,
    currentUser: null
}

const responseReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantsActionTypes.LOGIN_RESPONSE_UNIT_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.LOGIN_RESPONSE_UNIT_SUCCESS:
      return ({
        ...state,
        isPending: false
      });
    case ConstantsActionTypes.LOAD_RESPONSE_UNIT:
      return ({
        ...state,
        currentUser: action.payload
      });
    case ConstantsActionTypes.LOGIN_RESPONSE_UNIT_FAILED:
      return ({
        ...state,
        errorMessage: action.payload
      });
    case ConstantsActionTypes.GET_VICTIMS_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.GET_VICTIMS_SUCCESS:
      return ({
        ...state,
        isPending: false,
        message: action.payload
      });
    case ConstantsActionTypes.LOAD_VICTIMS:
      return ({
        ...state,
        isPending: false,
        victims: action.payload
      });
    case ConstantsActionTypes.GET_VICTIMS_FAILED:
      return ({
        ...state,
        isPending: false,
        errorMessage: action.payload
      });
    case ConstantsActionTypes.LOGOUT_RESPONSE_UNIT:
      return ({
        ...state,
        victims: [],
        isPending: false,
        errorMessage: null,
        message: null,
        currentUser: null
      });
    default:
      return state;
  }
}

export default responseReducer;
