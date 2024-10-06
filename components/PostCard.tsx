'use client';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Link from 'next/link';
import { PostType } from "@/types/postType";
import FavButton from '@/components/FavButton';

const PostCard: React.FC<{ post: PostType }> = ({ post }) => {
  return (
    <Link href={`/${post.slug}`}>
      <Card>
        <Card.Body>
          <Card.Title>
            {post.title}
            <FavButton slug={post.slug} />
          </Card.Title>
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
