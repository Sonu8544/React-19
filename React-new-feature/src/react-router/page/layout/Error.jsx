import React, { useEffect } from 'react'
import { useRouteError, NavLink, useNavigate } from 'react-router-dom';

const Error = () => {
    const errordata = useRouteError();
    const navigate = useNavigate();
    
    const handleGoback = () =>{
        navigate(-1)
    }
    

    return (
        <>
            <div className="max-w-[500px] m-auto mt-[100px]">
                <h1>{errordata.data}</h1>
                <h1>{errordata.status}</h1>
                <h1>{errordata.statusText}</h1>
                <div className="flex justify-center items-center">
                    <button onClick={handleGoback} type="button" className="cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Go Back</button>


                    <button type="button" className="curson-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <NavLink to="/"> Default </NavLink>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Error;
