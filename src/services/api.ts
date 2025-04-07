import laddoImg from "../assets/images/Coconut Laddoo (copy).webp";
import moltenCakeImg from "../assets/images/moltenLavaCake1 (copy).webp";

export const fetchRecipes = async () => {
    return [
        { id: 1, title: 'Coconut Laddoo', cookingTime: 30, image: laddoImg, ingredients: ['Ingredient 1'], instructions: 'Step 1' },
        { id: 2, title: 'Molten Lava Cake', cookingTime: 45, image: moltenCakeImg, ingredients: ['Ingredient 2'], instructions: 'Step 2' },
    ];
};
