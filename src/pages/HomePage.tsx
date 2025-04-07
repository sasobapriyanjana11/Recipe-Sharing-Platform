import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipieCard.tsx";
import { fetchRecipes } from '../services/api';

const HomePage = () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    useEffect(() => {
        fetchRecipes().then((data) => setRecipes(data));
    }, []);

    // Filter recipes based on the search query
    const filteredRecipes = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle search logic
    const handleSearch = () => {
        console.log(`Searching for: ${searchQuery}`);

    };

    return (
        <>
            <div>
                <SearchBar
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    handleSearch={handleSearch}
                    onClearSearch={() => setSearchQuery('')}
                />
                <div className="recipes-grid">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe) => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))
                    ) : (
                        <p>No recipes found</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default HomePage;
