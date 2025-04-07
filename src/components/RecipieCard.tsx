import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addFavorite, viewRecipe } from '../redux/actions';

const RecipeCard = ({ recipe }: any) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSave = () => {
        dispatch(addFavorite(recipe));
        console.log("Favorite added:", recipe);
    };

    const handleView = () => {
        navigate(`/recipe/${recipe.id}`);
        dispatch(viewRecipe(recipe));
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
            {/* Check if recipe.image is a valid base64 string or a URL */}
            <img
                // Default image if no image available
                src={recipe.image || '/default-image.jpg'}
                alt={recipe.title}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold text-orange-700 mb-1">{recipe.title}</h2>
                <p className="text-sm text-gray-600 mb-4">Time: {recipe.cookingTime} mins</p>
                <div className="flex gap-2">
                    <button
                        onClick={handleView}
                        className="flex-1 px-4 py-2 text-sm bg-orange-500 text-white rounded hover:bg-orange-600 transition"
                    >
                        View Recipe
                    </button>
                    <button
                        onClick={handleSave}
                        className="flex-1 px-4 py-2 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
                    >
                        Save to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
