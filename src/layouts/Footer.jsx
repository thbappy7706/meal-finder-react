export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-100 py-6 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>

            </div>
        </footer>
    );
}
