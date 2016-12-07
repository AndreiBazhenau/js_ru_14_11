import { normalizedArticles } from '../fixtures'
import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { Map } from 'immutable'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return acc.set(article.id, article)
}, new Map({}))

export default (articlesState = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articlesState.delete(payload.articleId)
        case ADD_COMMENT:
            return articlesState.updateIn([payload.articleId], article => ({...article, comments: [...article.comments, action.generatedId ] }));
    }

    return articlesState
}