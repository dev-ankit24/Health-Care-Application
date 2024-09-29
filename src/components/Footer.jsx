import React from 'react'

import { Link } from 'react-router-dom'


export default function Footer() {
  
  return (
     <>
      {/* <!-- Footer Start --> */}
    <div
      className="container-fluid bg-dark footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h2 className="text-white mb-4">
              <i className="fa fa-home text-primary me-3"></i>HealthCareService
            </h2>
            <p className='text-light'>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Contact-Us</h5>
            <p className='text-light'>
              <i className="fa fa-map-marker-alt me-3"></i>A-43,Sector-16,Noida, IND
            </p>
            <p className='text-light'><i className="fa fa-phone-alt me-3"></i>+91 8392823395</p>
            <Link to='tel:8392823395'></Link>
          <Link to='mailto:akumarrai45@gmail.com' ><p className='text-light'><i className="fa fa-envelope me-3"></i>akumarrai45@gmail.com</p> </Link>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <Link className="btn btn-link text-light" to="">Home</Link>
            <Link className="btn btn-link text-light" to="/create-service">Create Service</Link>
            <Link className="btn btn-link text-light" to="/all-users">All User</Link>
            
          </div>
          
        </div>
      </div>
      
    </div>
    {/* <!-- Footer End --> */}
     </>
  )
}
  