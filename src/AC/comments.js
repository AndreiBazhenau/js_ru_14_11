import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import jquery from 'jquery'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function loadComments(articleId) {
    return (dispatch) => {
        dispatch({
            type: LOAD_COMMENTS + START,
            payload: { articleId }
        })

        // NOTE: only for tests, not for production
        setTimeout(() => {
            jquery.get(`/api/comment`, { article: articleId })
                .done(response => dispatch({
                    type: LOAD_COMMENTS + SUCCESS,
                    payload: { articleId, comments: response }
                }))
                .fail(error => dispatch({
                    type: LOAD_COMMENTS + FAIL,
                    payload: { articleId, error}
                }))
        }, 3000)
    }
}