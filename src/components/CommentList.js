import React, { Component }  from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor() {
        super();
        this.state = {
            isShow: false
        }
    }

    render() {
        const {comments} = this.props;

        const showHideText = this.state.isShow ? 'Hide Comments' : 'Show Comments';
        
        let commentItems = '';
        if (comments && this.state.isShow) {
            commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
        }

        return (
            <div>
                <button onClick={this.handleShowHideClick}>{showHideText}</button>
                <ul>
                    {commentItems}
                </ul>
            </div>
        )
    }

    handleShowHideClick = ev => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default CommentList
