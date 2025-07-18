import {useEffect, useState} from "react";
import Card from "./components/Card.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import SearchForm from "./components/SearchForm.jsx";
import SkeletonCard from "./components/SkeletonCard.jsx";

function App() {

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([]);
    const [loadingSearch, setLoadingSearch] = useState(false);
    const [loadingRandom, setLoadingRandom] = useState(false);
    const [error, setError] = useState('');
    const [heading, setHeading] = useState('Random Meals');

    const handleSearch = (query) => {
        setLoadingSearch(true);
        setError('');
        setMeals([]);

        if (!query){
            setHeading('Random Meals')
            fetchRandomMeals().then(r => r);
            return;
        }

        // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
        const url = `${API_BASE_URL}/search.php?s=${query}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setMeals(data.meals || []);
                setLoadingSearch(false);
                setHeading(`Search Results For: "${query}"`);
            })
            .catch(error => {
                console.log('Error fetching data: ', error);
                setError('Something went wrong while searching.');
                setLoadingSearch(false);
            });
    };

    const fetchRandomMeals = async () => {
        setLoadingRandom(true);
        setError('');
        try {

            const requests = [];
            for (let i = 0; i < 6; i++) {
                requests.push(fetch(`${API_BASE_URL}/random.php`).then(res => res.json()));
            }
            const results = await Promise.all(requests);
            const randomMeals = results.map(result => result.meals[0]);
            setMeals(randomMeals);
        } catch (error) {
            console.log('Error fetching random meals: ', error);
            setError('Something went wrong while fetching random meals.');
        } finally {
            setLoadingRandom(false);
        }
    };

    useEffect(() => {
        fetchRandomMeals().then(r => r);
    }, []);


    return (
        <MainLayout>

            <SearchForm
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
                loading={loadingSearch}
            />

            {heading.startsWith('Search Results For:') ? (
                <h2 className="text-2xl p-4 font-bold flex items-center gap-2">
                    Search Results For:
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
      {heading.replace('Search Results For: ', '').replace(/"/g, '')}
    </span>
                </h2>
            ) : (
                <h2 className="text-2xl p-4 font-bold">{heading}</h2>
            )}

            {error && (
                <div className="flex justify-center">
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 w-96 text-center">
                        {error}
                    </div>
                </div>

            )}

            {(loadingSearch || loadingRandom) ? (
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
