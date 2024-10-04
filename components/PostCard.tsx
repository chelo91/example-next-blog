'use client';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import { PostType } from "@/types/postType";
import useBooleanLocalStorage from '@/hooks/useBooleanLocalStorage';

const PostCard: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug}`}>
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{post.date}</Card.Subtitle>
          <Card.Text>
            {post.content.substring(0, 40)}...
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default PostCard;
