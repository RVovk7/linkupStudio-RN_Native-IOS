const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

const initialState = {
    userName: 'Add some information about you ',
    userEmail: '',
    userAvatar: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
};

export default function profileReducer(state = initialState, action) {
    const {
        payload
    } = action;
    switch (action.type) {
        case SAVE_PROFILE_SUCCESS:
            const {
                userName,
                userEmail,
                userAvatar
            } = payload;
            return {
                ...state,
                userName,
                userEmail,
                userAvatar,
            };
        default:
            return state;
    }
};

export const saveProfileData = (userName, userEmail, userAvatar) => ({
    type: SAVE_PROFILE_SUCCESS,
    payload: {
        userName,
        userEmail,
        userAvatar
    }
});