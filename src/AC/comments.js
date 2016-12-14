import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE, START } from '../constants'
import { PAGE_SIZE_COMMENTS } from './../constants'

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId, comment
        },
        generateId: true
    }
}

export function checkAndLoadCommentsForArticle(articleId) {
    return (dispatch, getState) => {
        const { commentsLoaded, commentsLoading } = getState().articles.getIn(['entities', articleId])
        if (commentsLoaded || commentsLoading) return null
        dispatch({
            type: LOAD_COMMENTS_FOR_ARTICLE,
            payload: { articleId },
            callAPI: `/api/comment?article=${articleId}`
        })
    }
}

export function checkAndLoadCommentsForPage(page) {
    return (dispatch, getState) => {
        const loaded = getState().comments.getIn(['commentsForPages', page, 'loaded'])
        const loading = getState().comments.getIn(['commentsForPages', page, 'loading'])
        if (loaded || loading) return null

        const limit = PAGE_SIZE_COMMENTS
        const offset = (page - 1) * PAGE_SIZE_COMMENTS

        dispatch({
            type: LOAD_COMMENTS_FOR_PAGE,
            payload: { page },
            callAPI: `/api/comment?limit=${limit}&offset=${offset}`
        })
    }
}