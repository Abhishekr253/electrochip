import React from 'react'
import "./Navbar.css"
import image from "../images/slider-img.jpg";
function Main() {
  return (
    <div className='main'>
       <div class="container">
  <div class="row">
    <div class="col-sm ">
        <div className='cont'>
      <h1 className='cont1'>ELECTRICAL</h1>
      <h1 className='cont1'>SERVICE</h1>
      <h1 className='cont1'>PROVIDERS</h1>
    <p className='cont2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem

</p>
      <button className='but'>Contact us</button>
      </div>
    </div>
    <div class="col-sm">
    <div className="circle-container">
      <div className="circle">
        <img src={image} alt="Worker" className="circle-image" />
      </div>
      <div className="navigation">
        <button className="nav-button left-button">&#8249;</button>
        <button className="nav-button right-button">&#8250;</button>
      </div>
    </div>
    </div>
  
  </div>
</div>
    </div>
   
  )
}

export default Main