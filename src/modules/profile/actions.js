import types from './types';

export const saveProfileData = (userName, userEmail, userAvatar) => ({
    type: types.SAVE_PROFILE_SUCCESS,
    payload: {
        userName,
        userEmail,
        userAvatar
    }
});
