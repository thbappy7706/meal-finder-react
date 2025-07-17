import {useEffect, useRef} from "react";

export default function SearchForm({search,setSearch,handleSearch}) {

    const inputRef = useRef(null);
    const onSearch = (event) => {
        event.preventDefault();
        handleSearch(search);
    };

    useEffect(() => {
        if (inputRef.current)
            inputRef.current.focus();
    }, []);

    return (
        <div className="py-8 px-4">
            <form onSubmit={onSearch} className="max-w-xl mx-auto flex gap-4">
                <input
                    type="text"
                    placeholder="Search Your Desire Meal..."
                    value={search}
                    ref={inputRef}
                    onInput={(event) => setSearch(event.target.value)}
                    className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                >
                    Search
                </button>
            </form>
        </div>
    );
}
