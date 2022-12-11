import React from 'react'
import Sidebar from './components/Bar/Sidebar'
import './bootstrappMainFiles/sb-admin-2.min.css'
import Navbar from './components/Bar/Navbar'
import Card from './components/Dasbord/Card'
import { Outlet } from 'react-router-dom'
// import './bootstrappMainFiles/sb-admin-2.min.js'

const Home = () => {
    return (
        <div>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">

                    <div id="content">
                        <Navbar />
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
