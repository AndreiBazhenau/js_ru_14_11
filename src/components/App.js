import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import ArticleList from './ArticleList'
import Chart from './Chart'
import SelectFilter from './SelectFilter'
import DateFilter from './DateFilter'


class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const { articles } = this.props

        const articleFilterItems = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const defaultArticleFilterValue = articleFilterItems[0]

        const defaultDateFilterFrom = moment().toDate()
        const defaultDateFilterTo = moment().add(1, 'w').toDate()

        return (
            <div>
                <Chart />
                <ArticleList articles={articles} />
                <SelectFilter items = {articleFilterItems} defaultSelected = {defaultArticleFilterValue} />
                <DateFilter defaultFrom = { defaultDateFilterFrom } defaultTo = { defaultDateFilterTo } />
            </div>
        )
    }
}

export default App