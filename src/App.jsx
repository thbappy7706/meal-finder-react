 import './App.css'
 import {Route, Routes} from "react-router-dom";
 import Home from "./views/Home.jsx";
 import Ingredients from "./views/Ingredients.jsx";

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ingredients" element={<Ingredients/>}/>
            </Routes>
    );
}
export default App;
