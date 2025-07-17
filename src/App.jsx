import Card from "./components/Card.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
    return (
        <>

            <MainLayout>
                <Card image = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80'
                      title = 'Grilled Salmon' description = 'Delicious grilled salmon served with fresh vegetables and lemon.'/>


                <Card image = 'https://images.unsplash.com/photo-1641898378716-1f38ec04bb0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JpbGxlZCUyMGZpc2h8ZW58MHx8MHx8fDA%3D'
                      title = 'Grilled Rui' description = 'Delicious grilled Rui served with fresh vegetables and lemon.'/>

            </MainLayout>



        </>

    )
}

export default App
