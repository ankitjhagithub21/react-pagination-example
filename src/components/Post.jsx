// components/Post.js
import React from 'react';

const Post = ({ post }) => {
  return (
    <li className="post-item">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
    </li>
  );
};

export default Post;
