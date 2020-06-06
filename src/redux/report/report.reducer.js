import ConstantsActionTypes from './report.constants';

const INITIAL_STATE = {
  reportMessage: null,
  isPending: false,
  errorMessage: null
};

const reportReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case ConstantsActionTypes.SEND_REPORT_START:
      return ({
        ...state,
        isPending: true
      });
    case ConstantsActionTypes.SEND_REPORT_SUCCESS:
      return ({
        ...state,
        isPending: false,
        errorMessage: null,
        reportMessage: action.payload
      });
    case ConstantsActionTypes.SEND_REPORT_FAILED:
      return ({
        ...state,
        isPending: false,
        errorMessage: action.payload
      });
    case ConstantsActionTypes.RESET_ERROR_MESSAGE:
      return ({
        ...state,
        errorMessage: null,
        reportMessage: null
      });
    default:
      return state;
  }
};

export default reportReducer;
