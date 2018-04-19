import React from 'react'

class Comment extends React.Component {
  handleSubmit(e) {
    e.preventDefault();  
    
    const { author, comment, commentForm } = this.refs
    const { 
      params: { postId },
      addComment,
    } = this.props

    addComment(postId, author.value, comment.value)
    commentForm.reset()
  }

  render() {
    const { thePostComments, removeComment } = this.props
    const allComments = thePostComments.map((comment, index) => {
      return(
        <div className="comment" key={index}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment" onClick={() => removeComment(this.props.params.postId, index)}>&times;</button>
          </p>
        </div>
      )
    })

    return (
      <div className="comment">
        {allComments}
        <form onSubmit={(e) => this.handleSubmit(e)} ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
  
}

export default Comment;