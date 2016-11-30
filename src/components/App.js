import React, { Component, PropTypes } from 'react'

import ArticleList from './ArticleList'
import Chart from './Chart'
import Counter from './Counter'
import FilterContainer from './FilterContainer'

class App extends Component {

    render() {
        return (
            <div>
                <Counter />
                <Chart />
                <FilterContainer />
                <ArticleList />
            </div>
        )
    }
}

export default App