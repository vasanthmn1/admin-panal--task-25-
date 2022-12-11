import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Home'
import Buttons from '../Dasbord/Buttons'
import Dasbord from '../Dasbord/Dasbord'
import Login from '../Login/Login'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Portal = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/home' element={<Home />}>

                        {/* <Route path='/' element={<Home />}></Route> */}
                        <Route path='dasbord' element={<Dasbord />}></Route>

                        <Route path='buttons' element={<Buttons />}></Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div >
    )
}

export default Portal
