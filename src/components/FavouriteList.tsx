import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Card, CardContent, Typography, Button } from '@mui/material';
import {useNavigate} from "react-router-dom";
import {viewRecipe} from "../redux/actions.ts";

const FavoriteList = ({ recipe }: any) => {
    const favorites = useSelector((state: any) => state.favorites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleView=()=>{
        navigate(`/recipe/${recipe.id}`);
        dispatch(viewRecipe(recipe));
    }

    return (
        <div>
            {favorites.length === 0 ? (
                <Typography>No favorite recipes added yet.</Typography>
            ) : (
                favorites.map((recipe: any) => (
                    <Card key={recipe.id} style={{ marginBottom: '16px' }}>
                        <img src={recipe.image} alt={recipe.title} style={{ width: '50%' }} />
                        <CardContent>
                            <Typography variant="h5">{recipe.title}</Typography>
                            <Typography>Time: {recipe.cookingTime} mins</Typography>
                            <Button onClick={handleView}>View Recipe</Button>
                        </CardContent>
                    </Card>
                ))
            )}
        </div>
    );
};

export default FavoriteList;
