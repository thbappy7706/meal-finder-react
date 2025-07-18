import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="bg-gray-900 p-4 flex items-center justify-between shadow-md">
            {/* Left side: Logo + Title */}
            <div className="flex items-center space-x-3">
                <svg
                    className="w-8 h-8 text-indigo-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7 21v-7M10 21V8M14 21v-7m3 7v-4m-6-7l-2-2m4 0l2-2"
                    />
                </svg>

                <NavLink to="/" className="text-white text-2xl font-semibold tracking-wide cursor-pointer">
                    MealSearch
                </NavLink>
            </div>

            {/* Right side: Navigation Links */}
            <div className="flex space-x-6">
                <NavLink to="/" end className={({ isActive }) => `px-4 py-2 rounded-md text-lg font-medium transition 

            ${isActive ? "text-indigo-600 bg-gray-300 ring-2 ring-indigo-500 shadow-md" : "text-gray-300 hover:text-white hover:bg-gray-800"}`
                }> Home</NavLink>

                <NavLink to="/ingredients" className={({ isActive }) => `px-4 py-2 rounded-md text-lg font-medium transition 
             ${isActive ? "text-indigo-600 bg-gray-300 ring-2 ring-indigo-500 shadow-md" : "text-gray-300 hover:text-white hover:bg-gray-800"
                        }`}>Ingredients</NavLink>
            </div>
        </nav>
    );
}
