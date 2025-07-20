import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import { FaYoutube } from "react-icons/fa";
import SkeletonCard from "../components/SkeletonCard.jsx"; // ✅ Import it

export default function MealDetails() {
    const { id } = useParams();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchMealDetails = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${API_BASE_URL}/lookup.php?i=${id}`);
            const data = await response.json();
            if (data.meals && data.meals.length > 0) {
                setMeal(data.meals[0]);
            } else {
                setError("Meal not found.");
            }
        } catch (error) {
            console.error("Error fetching meal details:", error);
            setError("Something went wrong while fetching the meal.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMealDetails();
    }, [id]);

    return (
        <MainLayout>
            {loading && (
                <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(1)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            )}

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 w-96 text-center">
                    {error}
                </div>
            )}

            {meal && !loading && (
                <div className="p-4 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-2">{meal.strMeal}</h2>
                    <p className="text-gray-500 mb-4">
                        {meal.strCategory} | {meal.strArea}
                    </p>

                    <img
                        src={meal.strMealThumb}
                        alt={meal.strMeal}
                        className="w-full max-w-md rounded shadow mb-6"
                    />

                    <h3 className="text-2xl font-semibold mb-2">Instructions</h3>
                    <p className="mb-6 whitespace-pre-line">{meal.strInstructions}</p>

                    <h3 className="text-2xl font-semibold mb-2">Ingredients</h3>
                    <ul className="list-disc list-inside">
                        {Array.from({ length: 20 }).map((_, i) => {
                            const ingredient = meal[`strIngredient${i + 1}`];
                            const measure = meal[`strMeasure${i + 1}`];
                            return (
                                ingredient &&
                                ingredient.trim() && (
                                    <li key={i}>
                                        {ingredient} — {measure}
                                    </li>
                                )
                            );
                        })}
                    </ul>

                    {meal.strYoutube && (
                        <div className="mt-6">
                            <a
                                href={meal.strYoutube}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                            >
                                <FaYoutube className="mr-2 text-2xl" />
                                Watch on YouTube
                            </a>
                        </div>
                    )}
                </div>
            )}
        </MainLayout>
    );
}
