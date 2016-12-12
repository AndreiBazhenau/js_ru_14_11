import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment, loadComments } from '../AC/comments'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'

class CommentList extends Component {
    static propTypes = {
        articleId: PropTypes.any.isRequired,
        //from connect
        comments: PropTypes.array.isRequired,
        loadingIndicator: PropTypes.bool.isRequired,
        loaded: PropTypes.bool.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen && !this.props.isOpen && !nextProps.loaded)  {
            this.props.loadComments(this.props.articleId)
        }
    }

    componentWillUpdate() {
        //console.log('---', 'CL will update')
    }


    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { isOpen, toggleOpen } = this.props
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { articleId, comments, loadingIndicator, isOpen, addComment } = this.props
        if (loadingIndicator) return <Loader />

        const commentForm = <NewCommentForm articleId = {articleId} addComment = {addComment} />
        if (!isOpen) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => {
    var loadingIndicator = false
    var loaded = false;
    var comments = []
    if (state.comments.get(props.articleId)) {
        loadingIndicator = state.comments.get(props.articleId).loading
        if (state.comments.get(props.articleId).get('entities')) {
            loaded = true
            comments = state.comments.get(props.articleId).get('entities').toArray()
        }
    }

    return {
        comments,
        loadingIndicator,
        loaded
    }
}, { addComment, loadComments })(toggleOpen(CommentList))