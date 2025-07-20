 import './App.css'
 import {Route, Routes} from "react-router-dom";
 import Home from "./views/Home.jsx";
 import Ingredients from "./views/Ingredients.jsx";
 import MealDetails from "./views/MealDetails.jsx";
 import MealsByIngredients from "./views/MealsByIngredients.jsx";

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ingredients" element={<Ingredients/>}/>
                <Route path="/meal/:id" element={<MealDetails />} />
                <Route path="/ingredient/:ingredient" element={<MealsByIngredients />} />

            </Routes>
    );
}
export default App;
