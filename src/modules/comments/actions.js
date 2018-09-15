import types from './types';

export  const getCommentsBegin = () => ({type: types.GET_COMMENTS_BEGIN});
export  const getCommentsSuccess = data => ({type: types.GET_COMMENTS_SUCCESS, payload: {
        data
    }});
export const postCommentsSuccess = comment => ({type: types.POST_COMMENTS_SUCCESS, payload: {
        comment
    }});
export const getError = error => ({type: types.GET_ERROR, payload: {
        error
    }});
export const CommentsSearch = search => ({type: types.COMMENTS_SEARCH, payload: {
        search
    }});