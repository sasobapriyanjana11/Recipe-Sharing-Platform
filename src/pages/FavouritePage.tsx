// src/pages/FavoritePage.tsx
import React from 'react';
import FavoriteList from '../components/FavouriteList.tsx';

const FavoritePage = () => {
    return (
        <div>
            <h1>My Favorite Recipes</h1>
            <FavoriteList />
        </div>
    );
};

export default FavoritePage;
