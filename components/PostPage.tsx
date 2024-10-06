import React from 'react';
import { PostType } from "@/types/postType";
import FavButton from '@/components/FavButton';

const PostPage: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <div className="">
      <h1>{post.title}</h1>
      <h3>{post.date} <FavButton slug={post.slug} /></h3>
      <p>{post.content}</p>
    </div>
  );
};

export default PostPage;
