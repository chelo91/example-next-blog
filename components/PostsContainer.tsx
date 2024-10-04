import React from 'react';
import { PostType } from "@/types/postType";
import PostCard from '@/components/PostCard';

const PostsContainer: React.FC<{ posts: PostType[] }> = ({ posts }) => {
    return (
        <div className='d-flex flex-wrap'>
            {posts.map((post: PostType) => (
                <div className='col-12 col-md-6 col-lg-4 p-3' key={post.slug}> {/* Ajusta la clase según tu grid */}
                    <PostCard post={post} />
                </div>
            ))}
        </div>

    );
};

export default PostsContainer;
