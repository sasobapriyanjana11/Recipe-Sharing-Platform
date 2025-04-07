import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, updateRecipe } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const recipes = useSelector((state: any) => state.recipes);

    const existingRecipe = id ? recipes.find((r: any) => r.id === id) : null;

    const [form, setForm] = useState({
        id: id || Date.now().toString(),
        title: '',
        image: '',
        cookingTime: '',
        ingredients: '',
        instructions: '',
    });

    useEffect(() => {
        if (existingRecipe) {
            setForm(existingRecipe);
        }
    }, [existingRecipe]);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (existingRecipe) {
            dispatch(updateRecipe(form));
        } else {
            dispatch(addRecipe(form));
        }
        navigate('/');
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-center">
                {existingRecipe ? 'Edit Recipe' : 'Add New Recipe'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                />
                {/*image url*/}
                <input
                    type="text"
                    name="image"
                    value={form.image}
                    onChange={handleChange}
                    placeholder="Image URL"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                />
                <input
                    type="text"
                    name="cookingTime"
                    value={form.cookingTime}
                    onChange={handleChange}
                    placeholder="Cooking Time (mins)"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                />
                <textarea
                    name="ingredients"
                    value={form.ingredients}
                    onChange={handleChange}
                    placeholder="Ingredients"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                />
                <textarea
                    name="instructions"
                    value={form.instructions}
                    onChange={handleChange}
                    placeholder="Instructions"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                    required
                />
                <button
                    type="submit"
                    className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
                >
                    {existingRecipe ? 'Update' : 'Create'}
                </button>
            </form>
        </div>
    );
};

export default RecipeForm;
