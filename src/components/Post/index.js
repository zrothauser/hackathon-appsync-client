import React from 'react';

import posts from '../../test-data';

const Post = ({ slug }) => {
  const post = posts.find(postData => postData.slug === slug);

  if (!post) {
    return (
      <div>
        Post not found.
      </div>
    )
  }

  const {
    title,
    author,
    timestamp,
    body,
  } = post;

  return (
    <div>
      <h1>{title}</h1>
      <div>Author: {author}</div>
      <div>Posted at: {timestamp}</div>
      <div>{body}</div>
    </div>
  )
};

export default Post;
