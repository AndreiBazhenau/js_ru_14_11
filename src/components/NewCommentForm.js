import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
        addComment: PropTypes.func.isRequired
    }

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        // if (ev.target.value.length > 5) return
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()

        const { articleId, addComment } = this.props
        addComment(articleId, { ...this.state })
        
        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default connect(state => ({ }), { addComment })(NewCommentForm)