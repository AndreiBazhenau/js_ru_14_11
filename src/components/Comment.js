import React from 'react'

function Comment(props) {

    const { comment } = props;
    return (
        <div>
            <h6>{comment.user}</h6>
            <p>{comment.text}</p>
        </div>
    )
}

export default Comment
