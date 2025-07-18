export default function MealCard({ meal }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{meal.strMeal}</h2>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                    {meal.strInstructions?.slice(0, 100)}
                </p>

            </div>
        </div>
    );
}
