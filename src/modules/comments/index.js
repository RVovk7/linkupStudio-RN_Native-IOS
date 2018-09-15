import types from './types';
const initialState = {
    data: [],
    error: null,
    loading: false,
    searchText: '',
};

export default function commentsReducer(state = initialState, action) {
    const {payload, type} = action;
    switch (type) {
        case types.GET_COMMENTS_BEGIN:
            return {
                ...state,
                loading: true
            };
        case types.GET_COMMENTS_SUCCESS:
            const {data} = payload;
            return {
                ...state,
                data,
                loading: false
            };
            case types.POST_COMMENTS_SUCCESS:
            const {comment} = payload;
            return {
                data: [
                    comment, ...state.data
                ],
                loading: false
            };
        case types.COMMENTS_SEARCH:
            const {search} = payload;
            return {
                ...state,
                searchText: search,
                dataFilt: state
                    .data
                    .filter(e => e.name.slice(0, search.length).toLowerCase() === search)
            };
        case types.GET_ERROR:
            const {error} = payload;
            return {
                ...state,
                error,
                loading: false
            };

        default:
            return state;
    }
};
