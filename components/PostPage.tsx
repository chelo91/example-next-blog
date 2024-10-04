import React from 'react';
import { PostType } from "@/types/postType";

const PostPage: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </>
  );
};

export default PostPage;
