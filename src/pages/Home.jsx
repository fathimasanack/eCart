import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'




const Home = () => {

  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  console.log(allProducts,loading,error);
  const [currentPage,setCurrentPage]=useState(1)
const productPerPage=8
const TotalPage=Math.ceil(allProducts?.length/productPerPage)
const currentPageLastProductIndex=productPerPage*currentPage
const currentPageFirstProductIndex=currentPageLastProductIndex-productPerPage
const visibleProductsCards=allProducts?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)

const navigateToNextPage=()=>{
if(currentPage!=TotalPage){
  setCurrentPage(currentPage+1)
}
}
const navigateToPreviousPage=()=>{
  if(currentPage!=1){
    setCurrentPage(currentPage-1)
  }
  }

  
  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
     {
      loading ?
      <div className='flex justify-center items-center my-5 text-lg'>
        <img   src="https://loading.io/assets/mod/spinner/default/lg.gif" alt="" /> 
      </div>
      :
      <>
      <div className="grid grid-cols-4 gap-4"  >
      {
        allProducts?.length>0 ?
        visibleProductsCards?.map(product=>(
          <div key={product?.id} className='rounded border p-2 shadow'>
          <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
          <div className='text-center'>
            <h3 className='text-xl font-bold'>{product?.title}</h3>
            <Link className='bg-slate-600 rounded p-1 mt-3 text-white inline-block' to={`${product?.id}/view`}> View More</Link>

          </div>
        </div>

        ))
        :
        <div className='flex font-bold justify-center items-center text-red-600 my-5 text-lg'>Product Not Found</div>
        
      }
    
    
      </div>
      <div className="text-center my-5">
          <span onClick={navigateToPreviousPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
          <span className='text-2xl font-bold'>{currentPage} of {TotalPage}</span>
          <span onClick={navigateToNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>

        </div>
      
      </>}
    </div>
    </>
  )
}

export default Home