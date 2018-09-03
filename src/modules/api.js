import {
    getCommentsBegin,
    getCommentsSuccess,
    postCommentsSuccess,
    getError
} from './comments';
import {
    url,
    handleErrors
} from '../config';

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

export function postComment(comment) {
    return dispatch => {
        return fetch(`${url}/posts`, {
                method: 'POST',
                body: JSON.stringify({
                    name: comment.commentTitle,
                    email: comment.commentEmail,
                    body: comment.commentText,
                    id: Date.now()
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(postCommentsSuccess(json));
            })
            .catch(error => dispatch(getError(error)));
    };
}