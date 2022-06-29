import React from 'react'

function Post(props) {
  const { author, content } = props

  return (
    <div>
      <h3>Post Components</h3>
      <strong>{author}</strong>
      <p>{content}</p>
    </div>

  )
}

export default Post