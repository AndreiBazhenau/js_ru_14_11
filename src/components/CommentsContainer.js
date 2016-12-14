import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { checkAndLoadCommentsForPage } from '../AC/comments'
import Paginator from './Paginator'
import Loader from './Loader'
import CommentsPage from './CommentsPage'
import { PAGE_SIZE_COMMENTS } from './../constants'

class CommentsContainer extends Component {
    static propTypes = {
        checkAndLoadCommentsForPage: PropTypes.func.isRequired,
        comments: PropTypes.array.isRequired,
        currentPage: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        loading: PropTypes.bool.isRequired,
        pagerLoaded: PropTypes.bool.isRequired
    };

    static defaultProps = {
    }

    componentDidMount() {
        const { currentPage, checkAndLoadCommentsForPage } = this.props
        checkAndLoadCommentsForPage(currentPage)
    }

    componentWillReceiveProps({ currentPage, checkAndLoadCommentsForPage }) {
        checkAndLoadCommentsForPage(currentPage)
    }

    buildLinkForPage = page => {
        return `/comments/${page}`
    }

    render() {
        const { total, currentPage, comments, loading, pagerLoaded } = this.props

        return (
            <div>
                {
                    pagerLoaded
                        ? <Paginator total={ total }  pageSize={ PAGE_SIZE_COMMENTS } currentPage = { currentPage } buildUrl = { this.buildLinkForPage } />
                        : null
                }
                {
                    loading
                        ? <Loader />
                        : <CommentsPage comments = { comments } />
                }
            </div>
        )
    }
}

export default connect((state, props) => ({
    total: state.comments.getIn(['commentsForPages', 'total']) || 0,
    pagerLoaded: state.comments.getIn(['commentsForPages', 'pagerLoaded']) || false,
    comments: state.comments.getIn(['commentsForPages', props.currentPage, 'entities']) || [],
    loading: state.comments.getIn(['commentsForPages', props.currentPage, 'loading']) || false
}), { checkAndLoadCommentsForPage })(CommentsContainer)