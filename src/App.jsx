import Card from "./components/Card.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import SearchForm from "./components/SearchForm.jsx";
import SkeletonCard from "./components/SkeletonCard.jsx";
import {useState} from "react";

function App() {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = (query) => {
        setLoading(true);
        setMeals([]);
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMeals(data.meals || []);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    };

    return (
        <MainLayout>
            <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch} loading={loading}/>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, i) => (
                        <SkeletonCard key={i}/>
                    ))}
                </div>
            ) : meals.length === 0 ? (
                <div className="flex justify-center items-center h-48">
                    <p className="text-2xl">No meals found</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {meals.map((meal) => (
                        <Card key={meal.idMeal} meal={meal}/>
                    ))}
                </div>
            )}
        </MainLayout>
    );
}

export default App;
