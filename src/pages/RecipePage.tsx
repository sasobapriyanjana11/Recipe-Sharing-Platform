import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchRecipes } from '../services/api';
//-------------view recipe-------------
const RecipePage = () => {
    const { id } = useParams();
    console.log("Recipe ID from URL:", id); // Log the id
    const [recipe, setRecipe] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const recipes = await fetchRecipes(); // Fetch all recipes
                console.log("Fetched recipes:", recipes);
                const selectedRecipe = recipes.find((r) => r.id === parseInt(id!));
                if (selectedRecipe) {
                    setRecipe(selectedRecipe);
                } else {
                    console.log("Recipe not found with ID:", id);
                }
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        if (id) {
            fetchData();
        } else {
            console.log("No ID found");
        }
    }, [id]);

    if (!recipe) return <div>Loading ....</div>;

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-4">
            <h1>{recipe.title}</h1>
            <img src={recipe.image} alt={recipe.title} style={{ width: '50%' }} />
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
