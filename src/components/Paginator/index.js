import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './style.css'

class Paginator extends Component {
    static propTypes = {
        buildUrl: PropTypes.func.isRequired,
        total: PropTypes.number.isRequired,
        pageSize: PropTypes.number.isRequired,
        currentPage: PropTypes.number.isRequired
    };

    render() {
        const { total, pageSize, currentPage, buildUrl } = this.props

        const numberOfPages = Math.ceil(total / pageSize)
        const pagesLinks = []
        for (var page = 1; page < numberOfPages + 1; page++) {
            pagesLinks.push(<Link to = {buildUrl(page)} activeClassName="active" key={page}>{page}</Link>)
        }

        return (
            <div>
                { pagesLinks }
            </div>
        )
    }
}

export default Paginator
