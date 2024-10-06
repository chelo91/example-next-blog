'use client';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { usePathname } from 'next/navigation'

const PostBreadcrumb: React.FC = () => {
    const pathname = usePathname()

    return (
        <Breadcrumb>

            {pathname != "/" &&
                <>
                    <Breadcrumb.Item href="/">Posts</Breadcrumb.Item>
                    <Breadcrumb.Item href={pathname}>Post actual</Breadcrumb.Item>
                </>}
        </Breadcrumb>
    );
};

export default PostBreadcrumb;
