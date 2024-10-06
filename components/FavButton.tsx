import React from 'react';
import Badge from 'react-bootstrap/Badge';
import useBooleanLocalStorage from '@/hooks/useBooleanLocalStorage';

const FavButton: React.FC<{ slug: string }> = ({ slug }) => {
    const [favorite, setFavorite] = useBooleanLocalStorage(slug, false);
    return (
        <Badge
            bg={favorite ? "danger" : "secondary"}
            className="ms-2"
            onClick={(e) => {
                e.preventDefault();
                setFavorite(!favorite);
            }} >♡</Badge>
    );
};

export default FavButton;