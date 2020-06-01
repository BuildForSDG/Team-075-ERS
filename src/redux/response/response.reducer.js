import ConstantsActionTypes from './response.constants';

const INITIAL_STATE = {
    victims: [],
    isPending: false,
    errorMessage: null,
    message: null
}

const responseReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
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
    default:
      return state;
  }
}

export default responseReducer;
