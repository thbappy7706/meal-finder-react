import { useEffect, useRef } from "react";

export default function SearchForm({ search, setSearch, handleSearch, loading }) {
    const inputRef = useRef(null);

    const onSearch = (event) => {
        event.preventDefault();
        if (!loading) {
            handleSearch(search);
        }
    };

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return (
        <div className="py-8 px-4">
            <form onSubmit={onSearch} className="max-w-xl mx-auto flex gap-4">
                <input
                    type="text"
                    placeholder="Search Your Desire Meal..."
                    value={search}
                    required={true}
                    ref={inputRef}
                    onInput={(event) => setSearch(event.target.value)}
                    className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={loading}
                />


                <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {loading ? "Searching" : "Search"}
                    {loading && (
                        <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                            />
                        </svg>
                    )}
                </button>



            </form>
        </div>
    );
}
