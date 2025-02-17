import React from 'react'
import { NavLink, useLoaderData, useNavigation } from 'react-router-dom'

export default function Home() {
  const data = useLoaderData();
  const navi = useNavigation()
  console.log(data)

  if (navi.state === 'loading') return <h1>Loading...</h1>

  return (
    <>
      <h1 className='text-8xl text-center'>Home Page</h1>

      <div className="flex flex-wrap justify-center gap-5 mt-5">
        {data.map((item, index) => (
         <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <NavLink to="#">
              <img className="rounded-t-lg" src={item.image} alt="" />
            </NavLink>
            <div className="p-5">
              <NavLink to="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
              </NavLink>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              <NavLink to={`/product/${item._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
