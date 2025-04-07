import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
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
        <Card>
            <img src={recipe.image} alt={recipe.title} style={{ width: '50%' }} />
            <CardContent>
                <Typography variant="h5">{recipe.title}</Typography>
                <Typography>Time: {recipe.cookingTime} mins</Typography>
                <Button onClick={handleView}>View Recipe</Button>
                <Button onClick={handleSave}>Save to Favorites</Button>
            </CardContent>
        </Card>
    );
};

export default RecipeCard;
