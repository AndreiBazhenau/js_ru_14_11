import React, { Component, PropTypes } from 'react'
import Comment from './Comment'

class CommentPage extends Component {
    static propTypes = {
        comments: PropTypes.array.isRequired
    }

    static defaultProps = {
        comments: []
    }

    render() {
        const { comments } = this.props

        if (comments.length === 0) return <p>No data for this page.</p>

        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

        return (
             <div><ul>{commentItems}</ul></div>
        )
    }

}

export default CommentPage