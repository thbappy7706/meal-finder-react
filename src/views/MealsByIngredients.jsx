import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout.jsx";
import MealCard from "../components/MealCard.jsx";
import SkeletonCard from "../components/SkeletonCard.jsx";

export default function MealsByIngredients() {
    const { ingredient } = useParams();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchMeals = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`${API_BASE_URL}/filter.php?i=${ingredient}`);
            const data = await response.json();
            const foundMeals = data.meals || [];
            setMeals(foundMeals);
        } catch (error) {
            console.error("Error fetching meals:", error);
            setError("Something went wrong while fetching meals.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMeals();
    }, [ingredient]);

    return (
        <MainLayout>
            <h1 className="p-4 text-2xl font-bold mb-1">
                Meals with <span className="text-primary">{ingredient}</span>
            </h1>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 w-96 text-center">
                    {error}
                </div>
            )}

            {loading ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-4">
                    {[...Array(8)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            ) : meals.length > 0 ? (
                // <div className="p-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                //     {meals.map((meal) => (
                //         <MealCard key={meal.idMeal} meal={meal} />
                //     ))}
                // </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {meals.map((meal) => (
                        <MealCard key={meal.idMeal} meal={meal}/>
                    ))}
                </div>


            ) : (
                <p className="px-4 text-gray-600">No meals found for this ingredient.</p>
            )}
        </MainLayout>
    );
}
