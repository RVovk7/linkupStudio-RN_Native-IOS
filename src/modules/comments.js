// types
const GET_COMMENTS_BEGIN = 'GET_COMMENTS_BEGIN';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const POST_COMMENTS_SUCCESS = 'POST_COMMENTS_SUCCESS';
const COMMENTS_SEARCH = 'COMMENTS_SEARCH';
const GET_ERROR = 'GET_ERROR';

// reducer
const initialState = {
    data: [],
    error: null,
    loading: false
};

export default function commentsReducer(state = initialState, action) {
    const {payload, type} = action;
    switch (type) {
        case GET_COMMENTS_BEGIN:
            return {
                ...state,
                loading: true
            };
        case GET_COMMENTS_SUCCESS:
            const {data} = payload;
            return {
                ...state,
                data,
                loading: false
            };
            case POST_COMMENTS_SUCCESS:
            const {comment} = payload;
            return {
                data: [
                    comment, ...state.data
                ],
                loading: false
            };
        case COMMENTS_SEARCH:
            const {search} = payload;
            return {
                ...state,
                dataFilt: state
                    .data
                    .filter(e => e.name.slice(0, search.length).toLowerCase() === search)
            };

        case GET_ERROR:
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

// actions
export const getCommentsBegin = () => ({type: GET_COMMENTS_BEGIN});
export const getCommentsSuccess = data => ({type: GET_COMMENTS_SUCCESS, payload: {
        data
    }});
export const postCommentsSuccess = comment => ({type: POST_COMMENTS_SUCCESS, payload: {
        comment
    }});
export const getError = error => ({type: GET_ERROR, payload: {
        error
    }});
export const CommentsSearch = search => ({type: COMMENTS_SEARCH, payload: {
        search
    }});
