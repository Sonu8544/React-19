import React from 'react'
import HeaderRouter from './HeaderRouter'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <HeaderRouter />
            <Outlet />
            <Footer />
        </>
    )
}

export default AppLayout