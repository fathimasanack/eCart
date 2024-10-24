import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'



const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)

  const dispatch=useDispatch()
  const userWishlist=useSelector(state=>state.wishlistReducer)
  const handleCart = (product)=>{
    dispatch(addToCart(product))

    const existingProduct = userCart?.find(item=>item.id==product.id)
    dispatch(removeWishlistItem(product.id))
    if(existingProduct){
      alert("product quantity is incrementing")
    }
  }

  return (
    <> 
    <Header/>
    <div style={{paddingTop:'100px'}} className='px-4 mx-auto container'>
        {
          userWishlist?.length>0?
          <>
        <h1 className='text-6xl text-cyan-700 font-bold my-4'>My Wishlist</h1>
        <div className="grid grid-cols-4 gap-4">
         {
          userWishlist?.map(product=>(
            <div key={product?.id} className="rounded border p-2 shadow my-6">
            <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
            <div className="text-center">
              <h3 className="text-3xl text-blue-600 font-bold">{product?.title}</h3>
              <div className="flex justify-evenly mt-3">
                <button className="text-xl">
                <i onClick={()=>dispatch(removeWishlistItem(product?.id))} className="fa-solid fa-heart-circle-xmark text-red-700"></i>
                </button>
                <button onClick={()=>handleCart(product)} className="text-xl">
                <i class="fa-solid fa-cart-plus text-green-700"></i>
                </button>
              </div>
            </div>
          </div>
          ))
         }
        </div>
        </>
        :
        <div className="flex flex-col justify-center items-center">
          <img className='w-60' src="https://estore.mv/Images/Cart/emptycart.png" alt="" />
          <h1 className="text-cyan-700 font-bold">Your Wishlist is Empty</h1>
        </div>
        }
    </div>
    </>
  )
}

export default Wishlist