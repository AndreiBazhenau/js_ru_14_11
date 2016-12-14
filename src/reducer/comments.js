import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS_FOR_PAGE, START, SUCCESS } from '../constants'
import { arrayToMap } from '../utils'
import { Record, Map, List } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})
const defaultState = new Map({
    commentsForArticles: new Map({}),
    commentsForPages: new Map({})
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})

        case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
            return comments.mergeIn(['commentsForArticles'], arrayToMap(response, CommentModel))

        case LOAD_COMMENTS_FOR_PAGE + START:
            return comments.setIn(['commentsForPages', payload.page, 'loading'], true)

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return comments
                //Вот здесь не очень хорошо хранить на одном уровне и доступ по номерам страниц и 'total', 'pagerLoaded'
                //+ я б предпочел хранить сами комменты в comments.entities, а по номеру страницы только их id
                .setIn(['commentsForPages', payload.page, 'loading'], false)
                .setIn(['commentsForPages', payload.page, 'loaded'], true)
                .setIn(['commentsForPages', 'total'], response.total)
                .setIn(['commentsForPages', 'pagerLoaded'], true)
                .setIn(['commentsForPages', payload.page, 'entities'], response.records)
    }

    return comments
}
