import {useEffect, useState} from "react";
import { useSelector } from 'react-redux';
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipieCard.tsx";
import {useNavigate} from "react-router-dom";


const HomePage = () => {
    const recipes = useSelector((state: any) => state.recipes);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const navigate=useNavigate();

    useEffect(() => {
        const storedUser=localStorage.getItem("user");
        if(!storedUser){
            navigate("/login");
        }
    },[navigate])

    // Filter the recipe
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


    const handleSearch = () => {
        console.log(`Searching for: ${searchQuery}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-4">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-orange-700 mb-8 drop-shadow">
                    🍲 Discover Delicious Recipes
                </h1>

                <div className="mb-6">
                    <SearchBar
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        handleSearch={handleSearch}
                        onClearSearch={() => setSearchQuery('')}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))
                    ) : (
                        <p className="text-center text-gray-600 col-span-full">
                            No recipes found
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
