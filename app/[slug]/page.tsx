'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { posts } from '@/datas/posts';
import PostPage from '@/components/PostPage';

export default function Post({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const myPost = posts.find((post) => post.slug === params.slug);

    useEffect(() => {
        if (!myPost) {
            router.push('/');
        }
    }, [myPost, router]);

    if (!myPost) {
        return null; // Muestra nada mientras redirige
    }

    return (
        <>
            <PostPage post={myPost} />
        </>
    );
}
