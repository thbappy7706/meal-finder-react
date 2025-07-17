export default function Footer() {
    return (
        <footer className="mt-2 bg-gray-800 text-gray-300 py-6 px-6 border-t border-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                <p className="text-sm select-none">
                    &copy; {new Date().getFullYear()} My Website. All rights reserved.
                </p>


            </div>
        </footer>
    );
}
