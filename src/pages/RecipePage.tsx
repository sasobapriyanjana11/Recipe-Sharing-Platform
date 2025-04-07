import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/api'; // Import the fetchRecipes function

const RecipePage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const recipes = await fetchRecipes(); // Fetch all recipes
            const selectedRecipe = recipes.find((r) => r.id === parseInt(id!));
            setRecipe(selectedRecipe);
        };

        fetchData();
    }, [id]);

    if (!recipe) return <div>Loading ....</div>;

    return (
        <div>
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} style={{width: '50%'}}/>
            <p>Cooking Time: {recipe.cookingTime} minutes</p>
            <h3>Ingredients:</h3>
            <ul>
                {recipe.ingredients.map((ingredient: string, index: number) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipePage;
