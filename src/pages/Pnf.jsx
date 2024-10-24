import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const Pnf = () => {
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='flex justify-center items-center flex-col'>
    <h1 className='font-bold text-4xl mb-2  '>404 </h1>

    <img width={'500px'} height={'300px'} src="https://cdn.svgator.com/images/2024/04/electrocuted-caveman-animation-404-error-page.gif" alt="" />
    <Link className='bg-slate-500 p-2 text-white rounded' to={'/'}>Home</Link>
    </div>

    </>
  )
} 

export default Pnf