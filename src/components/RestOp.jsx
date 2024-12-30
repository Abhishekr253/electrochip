import React from 'react'
import image2 from '../images/plug.png'
import image3 from '../images/s1.png'
import image4 from '../images/s2.png'
import image5 from '../images/s3.png'
import image6 from '../images/s4.png'
import image7 from '../images/s5.png'
import image8 from '../images/about-img1.jpg'
import image9 from '../images/about-img2.jpg'
import image10 from '../images/blog1.jpg'
import image11 from '../images/blog2.jpg'
import image12 from '../images/location-white.png'
import image13 from '../images/telephone-white.png'
import image14 from '../images/envelope-white.png'
import { FaFacebook,  FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

function RestOp() {
  return (
    <div>
        <p className='head'> <span className='text'>Our Services</span> <img src={image2}/> </p> 

        <div className="container">
  <div className="row">


    <div className="col">
    <MDBCard className='cards'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay text-center'>
        <MDBCardImage  src={image3} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='title'>Equipment installation</MDBCardTitle>
        <MDBCardText className='cbody'>
        There are many variations of passages of Lorem Ipsum available,
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
    </div>


    <div className="col">
    <MDBCard className='cards'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay text-center'>
        <MDBCardImage  src={image4} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='title'>Windmill Energy</MDBCardTitle>
        <MDBCardText className='cbody'>
        There are many variations of passages of Lorem Ipsum available,
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
    </div>



    <div className="col">
    <MDBCard className='cards'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay text-center'>
        <MDBCardImage  src={image5} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='title'>Equipment Maintenance</MDBCardTitle>
        <MDBCardText className='cbody'>
        There are many variations of passages of Lorem Ipsum available,
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
    </div>

    <div className="container pt-5">
  <div className="row">
    <div className="col">
    <MDBCard className='card2'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay text-center'>
        <MDBCardImage  src={image6} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='title'>Offshore Engineering</MDBCardTitle>
        <MDBCardText className='cbody'>
        There are many variations of passages of Lorem Ipsum available,
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
    </div>
    <div className="col">
    <MDBCard className='card1'>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay text-center'>
        <MDBCardImage  src={image7} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='title'>Electrical Wiring</MDBCardTitle>
        <MDBCardText className='cbody'>
        There are many variations of passages of Lorem Ipsum available,
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
    </div>
  </div>
</div>

  </div>
  <button className='but1'>Read More</button>
</div>

<section className="about-us">
      <div className="text-section">
        <h2> <span className='text-dark fw-bold'>About Us</span>  <img src={image2} alt="" /></h2>
        <p>
          It is important to take care of the patient, to be followed by the patient,
          but it will happen at such a time that there is a lot of work and pain. For
          to come to the smallest detail, no one should practice any kind of work
          unless he derives some benefit from it. Doubts or irure pain in reprimands
          in the pleasure he wants.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="image-section1">
        <div className="circle-image1">
          <img src={image8} alt="Worker 1" />
        </div>
        <div className="circle-image2">
          <img src={image9} alt="Worker 2" />
        </div>
      </div>
    </section>





    <p className='head'> <span className='text'>BLOG</span> <img src={image2}/> </p> 

 <div>
 <div className="container pt-5">
  <div className="row">
    <div className="col">
    <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay text-center'>
        <MDBCardImage  src={image10} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='title'>Blog Title Goes Here</MDBCardTitle>
        <MDBCardText className='cbody'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
    </div>
    <div className="col">
    <MDBCard >
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay text-center'>
        <MDBCardImage  src={image11} fluid alt='...' />
        <a>
          <div className='mask ' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className='title'>Blog Title Goes Here</MDBCardTitle>
        <MDBCardText className='cbody'>
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised
        </MDBCardText>
       
      </MDBCardBody>
    </MDBCard>
    </div>
  </div>
</div>

<section className="contact-us">
      <div className="form-container">
      <p> <span className='text-dark'>Contact  us</span> <img src={image2}/> </p> 
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit" className="send-btn">Send</button>
        </form>
      </div>
      <div className="map-container">
      <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9996541007596!2d2.2922923156747427!3d48.85884497928795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f3e4b14fbcf%3A0x40b82c3688c9460!2sEiffel%20Tower!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  width="100%"
  height="390px"
  allowFullScreen=""
  loading="lazy"
></iframe>

      </div>
    </section>

    <footer className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <span className="foot"><img src={image12} alt="" /></span>
          <p>Passages of Lorem Ipsum available</p>
        </div>
        <div className="footer-item">
          <span className="foot"><img src={image13} alt="" /></span>
          <p>Call : +012334567890</p>
        </div>
        <div className="footer-item">
          <span className="foot"><img src={image14} alt="" /></span>
          <p>demo@gmail.com</p>
        </div>
      </div>
      
      <div className="footer-subscribe">
        <input type="email" placeholder="Enter your email" className="subscribe-input" />
        <button className="subscribe-button">SUBSCRIBE</button>
        <div className="footer-social">
        <FaFacebook className='social-icon' />
        <AiFillTwitterCircle  className='social-icon'/>
        <FaLinkedin className="social-icon" />
        <FaSquareInstagram className="social-icon" />
      </div>
      </div>
     
      
    </footer>



 </div>



 
    </div>
  )
}

export default RestOp