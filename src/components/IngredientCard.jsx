import { Link } from "react-router-dom";

export default function IngredientCard({ ingredient }) {
    const imageUrl = `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`;

    return (
        <Link to={`/ingredient/${ingredient.strIngredient}`} className="block">
            <div className="border shadow p-2 flex flex-col items-center text-center w-32 h-32 rounded-2xl hover:shadow-lg transition">
                <img
                    src={imageUrl}
                    alt={ingredient.strIngredient}
                    className="w-16 h-16 object-contain mb-1"
                />
                <h3 className="text-sm font-medium">{ingredient.strIngredient}</h3>
            </div>
        </Link>
    );
}
