import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {

    static propTypes = {
        articles: PropTypes.arrayOf(PropTypes.object).isRequired,
        openItemHandler: PropTypes.func.isRequired,
        openItemId: PropTypes.string
    }

    render() {
        const { articles, openItemId, openItemHandler } = this.props

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == openItemId}
                    toggleOpen = {this.openArticle(article.id, openItemHandler)}
                />
            </li>
        ));

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

    openArticle = (id, openItemHandler) => ev => {
        openItemHandler(id);
    }
}

export default accordion(ArticleList)