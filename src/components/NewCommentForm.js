import React, { Component } from 'react'

class NewCommentFrom extends Component {

    constructor() {
        super()
        this.state = {
            comment: ''
        }
    }

    render() {
        const { comment } = this.state;
        return (
            <div>
                <input type="text" name="comment" placeholder="Comment" value={ comment } onChange={this.handleCommentChange} />
                <button type="button" onClick={this.handleAddComment}>Add</button>
            </div>
        )
    }

    handleCommentChange = e => {
        this.setState({ comment: e.target.value })
    }

    handleAddComment = () => {
        // TODO: implement me
        console.log("Comment: " + this.state.comment)
        this.setState({ comment: '' })
    }

}

export default NewCommentFrom
