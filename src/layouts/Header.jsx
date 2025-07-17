export default function Header() {
    return (
        <nav className="bg-gray-900 p-4 flex items-center space-x-3 shadow-md">
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

            <h1 className="text-white text-2xl font-semibold tracking-wide">
                MealSearch
            </h1>
        </nav>
    );
}
