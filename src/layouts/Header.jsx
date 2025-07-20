import { NavLink } from "react-router-dom";
import {FaUtensils} from "react-icons/fa";

export default function Header() {
    return (
        <nav className="bg-gray-900 p-4 flex items-center justify-between shadow-md">
            {/* Left side: Logo + Title */}
            <div className="flex items-center space-x-3">

                <NavLink
                    to="/"
                    className="text-white text-3xl tracking-wide cursor-pointer flex items-center gap-2"
                    style={{ fontFamily: "Impact" }}
                >
                    <FaUtensils className="inline-block text-amber-700" />
                    MEAL FINDER
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
