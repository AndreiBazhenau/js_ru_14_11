import React, { Component, PropTypes } from 'react'
import CommentsContainer from './../components/CommentsContainer'

class CommentsRoot extends Component {
    static propTypes = {

    };

    render() {
        const currentPage = Number(this.props.params.page) || 1

        return (
            <CommentsContainer currentPage = { currentPage } />
        )
    }
}

export default CommentsRoot
