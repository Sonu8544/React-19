import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <NavLink to="https://flowbite.com/" className="hover:underline">Flowbite™</NavLink>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap gap-4 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <NavLink to="/" className="hover:underline me-4 md:me-6">Home</NavLink>
            </li>
            <li>
              <NavLink to="contact" className="hover:underline me-4 md:me-6">Contact</NavLink>
            </li>
            <li>
              <NavLink to="about" className="hover:underline me-4 md:me-6">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="hover:underline">Contact</NavLink>
            </li>
          </ul>
        </div>
      </footer>

    </>
  )
}

export default Footer