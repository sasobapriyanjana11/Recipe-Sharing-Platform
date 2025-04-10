import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRecipe, updateRecipe } from '../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';

//--------recipe form to update or add recipe---------
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

    // To show image preview
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    useEffect(() => {
        if (existingRecipe) {
            setForm(existingRecipe);
            setImagePreview(existingRecipe.image);
        }
    }, [existingRecipe]);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                setForm({ ...form, image: reader.result as string }); // Set base64 string for image
                setImagePreview(reader.result as string); // Preview image as base64
            };
            reader.readAsDataURL(file); // Read image as base64
        }
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
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-4">
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
                    <div>
                        <input
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            accept="image/*"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        {imagePreview && (
                            <div className="mt-4">
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                        )}
                    </div>
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
        </div>
    );
};

export default RecipeForm;
