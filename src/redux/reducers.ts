const initialState = {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    recipes: [],
    favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
    currentRecipe: null,
};

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload };

        case 'SET_RECIPES':
            return { ...state, recipes: action.payload };

        case 'ADD_RECIPE':
            return {
                ...state,
                recipes: [...state.recipes, action.payload],
            };

        case 'UPDATE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.map((r) =>
                    r.id === action.payload.id ? action.payload : r
                ),
            };

        case 'DELETE_RECIPE':
            return {
                ...state,
                recipes: state.recipes.filter((r) => r.id !== action.payload),
            };

        case 'ADD_FAVORITE':
            const exists = state.favorites.find((fav) => fav.id === action.payload.id);
            if (exists) return state; //prevent duplicate favourite recipe
            const updatedFavorites = [...state.favorites, action.payload];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return { ...state, favorites: updatedFavorites };

        case 'REMOVE_FAVORITE':
            const updatedFavorites1 = state.favorites.filter(recipe => recipe.id !== action.payload);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites1)); // Save to local storage
            return {
                ...state,
                favorites: updatedFavorites1,
            };

        case 'VIEW_RECIPE':
            return { ...state, currentRecipe: action.payload };

        default:
            return state;
    }
};

export default rootReducer;
