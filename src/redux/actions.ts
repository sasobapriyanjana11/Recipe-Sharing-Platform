export const addFavorite = (recipe: any) => ({
    type: 'ADD_FAVORITE',
    payload: recipe
});
export const removeFavorite = (recipeId) => ({
    type: 'REMOVE_FAVORITE',
    payload: recipeId,
});

export const setUser = (user: string) => ({
    type: 'SET_USER',
    payload: user
});

export const addRecipe = (recipe: any) => ({
    type: 'ADD_RECIPE',
    payload: recipe
});

export const updateRecipe = (recipe: any) => ({
    type: 'UPDATE_RECIPE',
    payload: recipe
});

export const deleteRecipe = (id: string) => ({
    type: 'DELETE_RECIPE',
    payload: id
});

export const viewRecipe = (recipe: any) => ({
    type: 'VIEW_RECIPE',
    payload: recipe
});
