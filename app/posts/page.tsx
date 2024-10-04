import { posts } from '@/datas/posts';
import PostsContainer from '@/components/PostsContainer';
export default function Posts() {
    return (
        <div >
            <h2>Posts</h2>
            <PostsContainer posts={posts} />
        </div>
    );
}
