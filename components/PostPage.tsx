import React from 'react';
import { PostType } from "@/types/postType";

const PostPage: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="">
      <h1>{post.title}</h1>
      <h3>{post.date}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
