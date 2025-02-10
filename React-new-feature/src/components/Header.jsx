import { useState } from "react";

const Header = () => {
    const [search, setSearch] = useState("");

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-800">Brand</div>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
                    <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
                </nav>

                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="border rounded-full px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="absolute left-3 top-2.5 text-gray-500">🔍</span>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-600 hover:text-gray-900">☰</button>
            </div>
        </header>
    );
};

export default Header;