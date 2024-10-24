import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
  <div className='w-full bg-slate-500 p-5 mt-5 bottom-0'>
      <div className="flex justify-evenly ">
        <div style={{width:"400px"}} >
        <Link className='text-white font-bold text-3xl' to={'/'}><i class="fa-solid fa-truck-fast me-1"></i>E-Cart</Link>
  
          <p className='mt-3'>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        <div>
          <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Links</h2>
          <Link style={{textDecoration:"none", color:"white",}} to={'/'}> 
              Home
          </Link> <br />
          <Link style={{textDecoration:"none", color:"white",}} to={'/wishlist'}> 
              Wishlist
          </Link><br />
          <Link style={{textDecoration:"none", color:"white",}} to={'/cart'}> 
              CArt
          </Link>
        </div>
        <div>
          <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Guides</h2>
          <Link style={{textDecoration:"none", color:"white",}} to={''}> 
              React
          </Link> <br />
          <Link style={{textDecoration:"none", color:"white",}} to={''}> 
              React Bootstrap
          </Link><br />
          <Link style={{textDecoration:"none", color:"white",}} to={''}> 
              React Router
          </Link>
        </div>
        <div className="contact">
        <h2 className="text-white" style={{fontWeight:"600",fontSize:"20px"}}>Contact Us</h2>
        <input type="text" placeholder='Enter your email here' className='rounded p-2 text-center' />
        <i className="fa-solid fa-arrow-right p-3 border rounded text-white ms-1 " ></i>
        <br />
        <div className='d-flex  justify-content-evenly mt-3'>
        <i class="fa-brands text-white me-2 fa-twitter"></i>
        <i class="fa-brands text-white me-2 fa-instagram"></i>
        <i class="fa-brands text-white me-2 fa-linkedin"></i>
        <i class="fa-brands text-white me-2 fa-github"></i>
        <i class="fa-solid text-white fa-phone"></i>
        </div>
       
        </div>
      </div>
      <p className='text-center mt-3'>Copyright & copy ; June 2024 Batch, E cart. Buildt with React. </p>
    </div>
    </>
  )
}

export default Footer