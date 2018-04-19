import React from 'react'
import Photo from './Photo'

const Photogrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        { this.props.posts.map((post, i) => {
            return (
              <Photo post={post} i={i} key={post.id} {...this.props} />
            )
          })
        }
      </div>
    )
  }
})

export default Photogrid

