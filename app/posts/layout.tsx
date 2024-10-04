import PostBreadcrumb from '@/components/PostBreadcrumb';
const Layout: React.FC = ({ children }) => {
    return (
        <>
            <PostBreadcrumb />
            {children}
        </>
    );
};

export default Layout;