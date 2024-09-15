// components/Posts.js
import React from 'react';
import Post from './Post';
import Loader from './Loader';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <Loader/>;
  }

  return (
    <ul className="posts-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default Posts;
