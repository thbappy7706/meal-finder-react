import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import IngredientCard from "../components/IngredientCard.jsx";
import SkeletonCard from "../components/SkeletonCard.jsx";

export default function Ingredients() {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [allIngredients, setAllIngredients] = useState([]);
    const [displayedIngredients, setDisplayedIngredients] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const ITEMS_PER_BATCH = 40;

    const fetchIngredients = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${API_BASE_URL}/list.php?i=list`);
            const data = await response.json();
            const ingredients = data.meals || [];
            setAllIngredients(ingredients);
            setDisplayedIngredients(ingredients.slice(0, ITEMS_PER_BATCH)); // first 40
        } catch (error) {
            console.error("Error fetching ingredients:", error);
            setError("Something went wrong while fetching ingredients.");
        } finally {
            setLoading(false);
        }
    };

    // Infinite scroll handler
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (scrollTop + windowHeight + 100 >= fullHeight) {
            setDisplayedIngredients((currentDisplayed) => {
                const currentCount = currentDisplayed.length;
                if (currentCount >= allIngredients.length) return currentDisplayed; // no more to load

                const nextBatch = allIngredients.slice(
                    currentCount,
                    currentCount + ITEMS_PER_BATCH
                );
                return [...currentDisplayed, ...nextBatch];
            });
        }
    };

    useEffect(() => {
        fetchIngredients();
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [allIngredients]);

    return (
        <MainLayout>
            <h1 className="p-4 text-2xl font-bold mb-1">Ingredients</h1>
            <small className="px-4 text-gray-500">Scroll to show more ingredients</small>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 w-96 text-center">
                    {error}
                </div>
            )}

            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {[...Array(8)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            ) : (
                <div className="p-4 m-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 justify-center">
                    {displayedIngredients.map((ingredient) => (
                        <IngredientCard
                            key={ingredient.idIngredient || ingredient.strIngredient}
                            ingredient={ingredient}
                        />
                    ))}
                </div>
            )}
        </MainLayout>
    );
}
