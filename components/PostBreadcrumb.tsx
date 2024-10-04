'use client';
import { PostType } from "@/types/postType";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { usePathname } from 'next/navigation'

const PostBreadcrumb: React.FC = () => {
    const pathname = usePathname()

    return (
        <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/posts">Posts</Breadcrumb.Item>
            {pathname != "/posts" && <Breadcrumb.Item href={pathname}>Post actual</Breadcrumb.Item>}
        </Breadcrumb>
    );
};

export default PostBreadcrumb;
