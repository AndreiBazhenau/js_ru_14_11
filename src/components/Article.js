import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const { article } = this.props;
        const body = this.state.isOpen ? <p>{article.text}</p> : null;
        const commentList = this.state.isOpen ? <CommentList comments={article.comments} /> : null;
        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
                {commentList}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article