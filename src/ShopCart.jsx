import { useState,  useContext } from 'react'
import { itemContext } from './App'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cart from './Cart'
import OrderSummary from './OrderSummary'
function ShopCart() {
    
    return (
        <>
        
        <main className='flex justify-center gap-[30px] flex-col max-w-[1200px] justify-self-center'>
            <div>
                <section>
                    <h1 className='text-[#00000099] flex items-center gap-[10px] max-sm:ml-[20px] '>
                    Home 
                    <i className="fa-solid fa-chevron-right text-[#00000099]"></i> 
                    Cart </h1>
                </section>
                <h1 className='font-[900] text-[40px]'>
                YOUR CART
            </h1>
            </div>
            <div className='flex justify-center gap-[30px] max-lg:flex-col max-lg:items-center'>
            <Cart/>
            <OrderSummary/>
            </div>
        </main>
        </>
    )
}

export default ShopCart