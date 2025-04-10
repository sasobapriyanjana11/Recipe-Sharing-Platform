import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { viewRecipe, deleteRecipe } from '../redux/actions';

//-------------------favourite recipe cards-------------------
const FavoriteList = () => {
    const favorites = useSelector((state: any) => state.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [message, setMessage] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        try {

            await dispatch(deleteRecipe(id));
            setMessage('Recipe Deleted Successfully');
        } catch (err) {
            setMessage('Failed to Delete Recipe');
        }

        setTimeout(() => setMessage(null), 3000);
    };

    return (
        <div className="max-w-7xl mx-auto p-4 min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
            {/* Show success or error message */}
            {message && (
                <div className="text-center bg-green-100 text-green-800 p-4 rounded-lg mb-4">
                    {message}
                </div>
            )}

            {favorites.length === 0 ? (
                <div className="text-center text-xl text-gray-500">
                    No favorite recipes added yet.
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        My Favorite Recipes
                    </h1>
                    {/* Grid display for recipes */}
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
                                        <div className="mt-4 space-x-2">
                                            <button
                                                onClick={handleView}
                                                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 focus:outline-none"
                                            >
                                                View Recipe
                                            </button>
                                            <button
                                                onClick={() => navigate(`/edit-recipe/${recipe.id}`)}
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(recipe.id)}
                                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
                                            >
                                                Delete
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
