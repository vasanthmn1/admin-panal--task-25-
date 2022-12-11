import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Dasbord/Card'

const Sidebar = () => {
    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" >
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </a>


                <hr className="sidebar-divider my-0" />
                <li className="nav-item active nav-link  ">

                    <i className="fas fa-fw fa-tachometer-alt "></i>

                    <Link to={"/home/dasbord"} > <span className='text-white ml-3'>Dashboard</span> </Link>
                </li>


                <hr className="sidebar-divider" />


                <div className="sidebar-heading">
                    Interface
                </div>


                <li className="nav-item nav-item active ">
                    <a className="nav-link collapsed">
                        <Link to={"/home/Buttons"}>  <span className='text-white '>Buttons</span></Link>
                    </a>
                </li>
                <li className="nav-item nav-item active ">
                    <a className="nav-link collapsed">
                        <Link to={"/"}>  <span className='text-white '>Login</span></Link>
                    </a>
                </li>








                <li className="nav-item">
                    <a className="nav-link">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li>





                <hr className="sidebar-divider d-none d-md-block" />

            </ul>
        </>
    )
}

export default Sidebar
