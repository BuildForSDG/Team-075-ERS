import ConstantsActionTypes from './user.constants';

const setCurrentUser = (user) => ({
  type: ConstantsActionTypes.SET_CURRENT_USER,
  payload: user
});

export default setCurrentUser;
