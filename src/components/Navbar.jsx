import React from 'react'
import { NavLink ,Link} from 'react-router-dom'


export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg  bg-primary  navbar sticky-top px-6 px-lg-5 py-lg-0">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h2 className="m-0 text-light ">
            <i className="fa fa-home me-3"></i>HealthCareService
            {/* <img src="./img/p1.jpg" alt="" height={100} width={100} /> */}
          </h2>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-3 py-lg-0">
            <NavLink to="/" className="nav-item nav-link text-light  ">
              Home
            </NavLink>
           
            <NavLink to="/all-users" className="nav-item text-light   nav-link">
             All Users
            </NavLink>
            
            </div>
            </div>
            </nav>
    </>
  )
}
