import types from './types';
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
        case types.SAVE_PROFILE_SUCCESS:
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

