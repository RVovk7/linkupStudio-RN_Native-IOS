import {url , handleErrors } from '../config';

// types
const GET_COMMENTS_BEGIN = 'GET_COMMENTS_BEGIN';
const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
const COMMENTS_SEARCH = 'COMMENTS_SEARCH';
const SEARCH_CLEAR = 'SEARCH_CLEAR';
const GET_ERROR = 'GET_ERROR';

const initialState = {
    data: [],
    error: null,
    loading: false,
    clear: false
};

// reducer
export default function commentsReducer(state = initialState, action) {
    const { payload } = action;
    switch (action.type) {
        case GET_COMMENTS_BEGIN:
        return {
            ...state,
            loading: true,
        };
        case SEARCH_CLEAR:
        return {
            ...state,
            clear: true
        };
        case GET_COMMENTS_SUCCESS:
        const { data } = payload;
        return {
            ...state,
            data,
            loading: false,
            clear: false
        };
        case COMMENTS_SEARCH:
        const { search } = payload;
        return {
            ...state,
            clear: false,
            dataFilt: state.data.filter(e => e.name.slice(0,search.length) === search),
        };

        case GET_ERROR:
        const { error } = payload;
            return {
                ...state,
                error,
                loading:false,     
            };

        default:
            return state;
    }
};


// actions
const getCommentsSuccess = data => ({type: GET_COMMENTS_SUCCESS,  payload: { data }});
const getCommentsBegin = () => ({type: GET_COMMENTS_BEGIN});
const getError = error => ({type: GET_ERROR, payload: { error }});

export function getComments() {
    return dispatch => {
        dispatch(getCommentsBegin());
        return fetch(`${url}/comments`)   
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(getCommentsSuccess(json))
            })
            .catch(error => dispatch(getError(error)));
    };
};

export const CommentsSearch = search => ({type: COMMENTS_SEARCH,  payload: { search }});
export const SearchClear = () => ({type: SEARCH_CLEAR});

