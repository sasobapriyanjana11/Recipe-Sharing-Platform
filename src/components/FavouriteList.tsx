import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { viewRecipe } from '../redux/actions.ts';

const FavoriteList = () => {
    const favorites = useSelector((state: any) => state.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className="max-w-7xl mx-auto p-4 min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
            {favorites.length === 0 ? (
                <div className="text-center text-xl text-gray-500">
                    No favorite recipes added yet.
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        My Favorite Recipes
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favorites.map((recipe: any) => {
                            const handleView = () => {
                                navigate(`/recipe/${recipe.id}`);
                                dispatch(viewRecipe(recipe));
                            };

                            return (
                                <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <img
                                        src={recipe.image}
                                        alt={recipe.title}
                                        className="w-full h-48 object-cover"
                                    />
                                <div className="p-4">
                                        <h3 className="text-2xl font-semibold text-gray-800">{recipe.title}</h3>
                                        <p className="text-gray-600 mt-2">Time: {recipe.cookingTime} mins</p>
                                        <div className="mt-4">
                                            <button
                                                onClick={handleView}
                                                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none"
                                            >
                                                View Recipe
                                            </button>
                                        </div>
                               </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FavoriteList;
