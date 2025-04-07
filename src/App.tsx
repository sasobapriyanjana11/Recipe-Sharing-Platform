import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RecipePage from './pages/RecipePage';
import FavoritePage from "./pages/FavouritePage.tsx";
import RootLayout from "./components/RootLayout.tsx";
import Error from "./pages/Error.tsx";
import RecipeForm from "./components/RecipeForm";

function App() {
    const routes=createBrowserRouter([
        {
            path:'/',
            element:<RootLayout/>,
            children:[
                { path: "/", element: <HomePage/> },
                {path:"/favourites",element:<FavoritePage/>},
                { path: '/recipe/:id', element: <RecipePage /> },
                {path:"/login",element:<LoginPage/>},
                {path:"/signup",element:<SignupPage/>},
                { path: "/add-recipe", element: <RecipeForm /> },
                { path: "/edit-recipe/:id", element: <RecipeForm /> },
            ],
            errorElement:<Error/>
        },
        {
            path:"*",
            element:<Error/>
        },
    ])
    return (
        <RouterProvider router={routes} />
    );
}

export default App;
