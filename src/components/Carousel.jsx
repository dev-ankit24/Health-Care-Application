import React from 'react'
import { Link } from 'react-router-dom'


export default function Carousel() {
  return (
   <>
   {/* <!-- Carousel Start --> */}
   <div className="container-fluid p-0  wow fadeIn" data-wow-delay="0.1s">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img/img.jpeg" style={{height:425}} alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-lg-10">
                    <h2 className="text-light text-uppercase mb-3 animated slideInDown">Welcome to <strong className='text-warning'>HealthCare Service</strong></h2>
                    
                    <Link to="/all-users" className="btn btn-primary py-3 px-5" >Create Service</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
          
      
         
        </div>
       <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button type="button" data-bs-target="#header-carousel" data-bs-slide="next" className="carousel-control-next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    {/* <!-- Carousel End --> */}
   </>
  )
}
