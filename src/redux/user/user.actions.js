import ConstantsActionTypes from './user.constants';

export const setCurrentUser = user => ({
    type: ConstantsActionTypes.SET_CURRENT_USER,
    payload: user
});