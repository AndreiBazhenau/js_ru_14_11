import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { updateFilter } from '../AC/filters'
import DateFilter from './DateFilter'
import SelectFilter from './SelectFilter'

class FilterContainer extends Component {

    static propTypes = {
        filter: PropTypes.object.isRequired,
        articles: PropTypes.array.isRequired,
        updateFilter: PropTypes.func
    }

    render() {
        const { articles, filter } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <SelectFilter items = {options} selected = { filter.articles } handleChange = { this.handleArticleFilterChange } />
                <DateFilter selected = { filter.dateRange } handleChange = { this.handleDateFilterChange } />
            </div>
        )
    }

    handleArticleFilterChange = selectedArticles => {
        const { filter, updateFilter } = this.props
        const newFilter = { articles: selectedArticles, dateRange: filter.dateRange }
        updateFilter(newFilter)
    }

    handleDateFilterChange = selectedRange => {
        const { filter, updateFilter } = this.props
        const newFilter = { articles: filter.articles, dateRange: selectedRange }
        updateFilter(newFilter)
    }
}

export default connect(state => ({
    filter: state.filter,
    articles: state.articles
}), {
    updateFilter
})(FilterContainer)
