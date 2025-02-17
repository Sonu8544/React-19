import React, { useState } from 'react';

const HeaderNew = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden md:flex md:items-center md:space-x-8">
                    <ul className="font-medium flex flex-row space-x-8">
                        <li><a href="#" className="py-2 px-3 text-gray-900 dark:text-white">Home</a></li>
                        <li><a href="#" className="py-2 px-3 text-gray-900 dark:text-white">About</a></li>
                        <li><a href="#" className="py-2 px-3 text-gray-900 dark:text-white">Services</a></li>
                        <li><a href="#" className="py-2 px-3 text-gray-900 dark:text-white">Pricing</a></li>
                        <li><a href="#" className="py-2 px-3 text-gray-900 dark:text-white">Contact</a></li>
                    </ul>
                </div>
                {/* Drawer Menu */}
                <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`} onClick={() => setIsOpen(false)}></div>
                <div className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden p-4`}>
                    <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-gray-500 dark:text-gray-400">
                        ✖
                    </button>
                    <ul className="mt-10 space-y-4">
                        <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Home</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">About</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Services</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Pricing</a></li>
                        <li><a href="#" className="block py-2 px-3 text-gray-900 dark:text-white">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderNew;
