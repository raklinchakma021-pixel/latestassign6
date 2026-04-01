
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import MainSection from './components/ProductCard'
import NavBar from './components/NavBar'
import ProductsData from './data/products.json'
import ProductCard from './components/ProductCard'
import CartItem from './components/CartItem'
import Introduce from './components/Introduce'
import SectionHead from './components/SectionHead'
import { FaCartShopping } from 'react-icons/fa6'
import GetStarte from './components/GetStarte'
import Pricing from './components/Pricing'
import Indicate from './components/Indicate'
import Footer from './components/Footer'
function App() {

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const add=(product)=>{setCart([...cart, product])}
  const remove = (id) => {setCart(cart.filter(product=>product.id!==id))}
  const checkout = () => {setCart([])} 
  const total = cart.reduce((s,product)=>s+product.price,0)
  return (
    <>
    <div className='w-11/12 mx-auto p-0 m-0'>
    <NavBar count={cart.length}  setShowCart={setShowCart}/>

      <Banner/>

    </div>

    <Introduce/>
    {/* <MainSection  showCart={showCart} setShowCart={setShowCart}/> */}
      <SectionHead/>
     <div className='flex gap-2  justify-center my-7'>
                <button onClick={()=>setShowCart(false)} className='btn btn-primary rounded-full '>Products</button>
                <button onClick={()=> setShowCart(true)} className='btn btn-primary rounded-full '>Carts({cart.length})</button>
            </div>

            {
               !showCart && (
                    <div className="grid grid-cols-3 gap-6 mt-10 w-11/12 mx-auto">
                       {ProductsData.map(product => (
                        <ProductCard key={product.id} product={product} add={add} />
                       ))}
                    </div>
                )
            }

            {
               showCart && (
                <div className='text-center w-11/12 mx-auto'>

                  <div>
                    <h2 className='text-left font-bold  px-6'>Your Cart</h2>
                  </div>
                 {cart.length === 0 ? <div>
                  <h2 className='text-4xl font-bold pt-10'>
                  <FaCartShopping className='text-5xl mx-auto'/>
                    
                    Cart is empty</h2>
                  <p>Add to cart some products, it will appear here</p>  </div> :  cart.map(p=>(
                    <CartItem  key={p.id} item={p} remove={remove}/>))}


                  {
                    cart.length > 0 && (
                      <>
                      <div className='flex justify-between'>
                        <p className=' '>Total: </p>
                      <h2 className='font-bold text-xl'> ${Math.round(total)}</h2>
                      </div>
                      <button className='btn btn-primary rounded-full w-full mt-2' onClick={checkout} >Proceed to Checkout</button>
                      </>
                    )
                  }
                </div>
               )
            }


            <GetStarte/>

            <Pricing/>
            <Indicate/>
            <Footer/>
    </>
  )
}

export default App
