import React, { Component, PropTypes }  from 'react'
import moment from 'moment';
import Article from './Article'
import accordion from '../decorators/accordion'
import { connect } from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion decorator
        isOpen: PropTypes.func.isRequired,
        toggleOpenItem: PropTypes.func.isRequired
    }

    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted', this.containerRef)
        console.log('---', this.refs)
    }

    componentWillReceiveProps(nexProps) {
        //console.log('isEqual', Object.keys(nexProps).every(key => nexProps[key] == this.props[key]))
        //console.log('---', 'AL receiving props')
    }

    componentWillUpdate() {
        //console.log('---', 'AL will update')
    }

    getContainerRef = ref => {
        this.containerRef = ref
    }


    render() {
        const { articles, isOpen, toggleOpenItem } = this.props

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {isOpen(article.id)}
                    toggleOpen = {toggleOpenItem(article.id)}
                />
            </li>
        ))

        return (
            <ul ref = {this.getContainerRef}>
                {articleItems}
            </ul>
        )
    }
}

function filterArticles(articles, filter) {
    const selectedArticleIds = filter.articles.map(article => {
        return article.value;
    })

    const dateFrom = filter.dateRange.from ? moment(filter.dateRange.from).startOf('day') : null
    const dateTo = filter.dateRange.to ? moment(filter.dateRange.to).endOf('day') : null

    return articles.filter(article => {
        if (selectedArticleIds.length !== 0 && !selectedArticleIds.includes(article.id)) {
            return false;
        }

        const articleDate = moment(article.date)
        if (dateFrom && dateTo && (dateFrom > articleDate || dateTo < articleDate)) {
            return false;
        }

        return true;
    })
}

export default connect(state => ({
    articles: filterArticles(state.articles, state.filter)
}))(accordion(ArticleList))