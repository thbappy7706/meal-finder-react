import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function MainLayout({children}) {
    return (<div className="min-h-screen flex flex-col">
            <Header/>

            <main className="flex-grow">
                {children}
            </main>

            <Footer/>
        </div>);
}
