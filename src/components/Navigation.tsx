import { Link } from "react-router";

const Navigation=()=>{

    return (
        <>
            <header className="bg-black-800 w-full">
                <nav className="px-4 py-2 text-xl shadow-lg flex justify-between items-center">
                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <img src="/src/assets/images/manager-profile-pic.jpeg" alt="User Profile"
                             className="w-10 h-10 rounded-full border border-white"
                        />

                        <ul className="flex text-black">
                            <Link className="class-link" to='/'>RecipeSite~</Link>
                        </ul>

                    </div>
                    {/* Center Section */}
                    <ul className="flex text-black space-x-4">
                        <Link className="class-link" to='/add-recipe'>Add</Link>
                        <Link className="class-link" to='/favourites'>Favourite</Link>
                        <Link className="class-link" to='/login'>Login</Link>
                        <Link className="class-link" to='/signup'>Signup</Link>

                    </ul>

                </nav>
            </header>
        </>
    )
}
export default Navigation;