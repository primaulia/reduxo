import React from 'react'
import Photo from './Photo'
import Comment from './Comment'

const Single = React.createClass({
  render() {
    // index of the post
    // get us the post

    const {posts, params, comments} = this.props

    const i = posts.findIndex((post) => post.code === params.postId)
    const thePost = posts.find((post) => post.code === params.postId)
    const thePostComments = comments[thePost.code] || []
    
    return (
      <div className="single-photo">
        <Photo post={thePost} i={i} key={thePost.id} {...this.props} />
        <Comment thePostComments={thePostComments} {...this.props} />
      </div>
    )
  }
})

export default Single

