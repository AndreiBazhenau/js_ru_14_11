import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { arrayToMap } from '../utils'
import { Record, Map } from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

export const CommentsListModel = Record({
    entities: arrayToMap([], CommentModel),
    loading: false
})

export const defaultState = new Map({})

export default (commentsState = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.updateIn([payload.articleId, 'entities'], comments => comments.set(generatedId, {...payload.comment, id: generatedId }))

        case LOAD_COMMENTS + START:
            return commentsState.setIn([payload.articleId], new CommentsListModel({ loading: true }))

        case LOAD_COMMENTS + SUCCESS:
            return commentsState.setIn([payload.articleId],
                new CommentsListModel({ entities: arrayToMap(payload.comments, CommentModel), loading: false }))
    }

    return commentsState
}