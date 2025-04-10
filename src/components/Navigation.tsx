import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <header className="bg-black-800 w-full ">
                <nav className="px-4 py-2 text-xl shadow-lg flex justify-between items-center">
                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <img
                            src="/src/assets/images/manager-profile-pic.jpeg"
                            alt="User Profile"
                            className="w-10 h-10 rounded-full border border-white"
                        />
                        <ul className="flex text-black">
                            <NavLink
                                to="/"
                                className={({ isActive }: { isActive: boolean }) =>
                                    `class-link text-orange-800 ${isActive ? 'underline' : ''}`
                                }
                            >
                                RecipeSite~
                            </NavLink>
                        </ul>
                    </div>

                    {/* Center Section */}
                    <ul className="flex text-black space-x-4">
                        <NavLink
                            to="/add-recipe"
                            className={({ isActive }: { isActive: boolean }) =>
                                `class-link ${isActive ? 'underline text-orange-800' : ''}`
                            }
                        >
                            Add
                        </NavLink>

                        <NavLink
                            to="/favourites"
                            className={({ isActive }: { isActive: boolean }) =>
                                `class-link ${isActive ? 'underline text-orange-800' : ''}`
                            }
                        >
                            Favourite
                        </NavLink>

                        <NavLink
                            to="/login"
                            className={({ isActive }: { isActive: boolean }) =>
                                `class-link ${isActive ? 'underline text-orange-800' : ''}`
                            }
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/signup"
                            className={({ isActive }: { isActive: boolean }) =>
                                `class-link ${isActive ? 'underline text-orange-800' : ''}`
                            }
                        >
                            Signup
                        </NavLink>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Navigation;
