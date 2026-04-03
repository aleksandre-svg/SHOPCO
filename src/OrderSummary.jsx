import { useState,  useContext } from 'react'
import { itemContext } from './App'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cart from './Cart'
function OrderSummary({total, discount}) {
    
    return (
        <>
            <div className='border border-[#0000001A] rounded-[20px] max-w-[465px] h-[428px] p-[15px]  flex flex-col gap-[15px] max-md:w-full max-sm:w-[350px]'>
                <h1 className='text-[24px] font-[700]'>Order Summary</h1>
                <div className='flex flex-col gap-[15px]'>
                    <section className='flex items-center justify-between'>
                        <h1 className='text-[20px] text-[#00000099]'>Subtotal</h1>
                        <h1 className='text-[20px] font-[700] '>$234</h1>
                    </section>
                    <section className='flex items-center justify-between'>
                        <h1 className='text-[20px] text-[#00000099]'>Discount (-2234%)</h1>
                        <h1 className='text-[20px] font-[700] text-red-600'>$243</h1>
                    </section>
                    <section className='flex items-center justify-between'>
                        <h1 className='text-[20px] text-[#00000099]'>Delivery Fee</h1>
                        <h1 className='text-[20px] font-[700] '>$15</h1>
                    </section>
                </div>
                <hr className='text-[#0000001A]'/>
                <section className='flex items-center justify-between'>
                    <h1 className='font-[400] text-[20px] '>Total</h1>
                    <h1 className='text-[25px] font-[700] '>$234</h1>
                </section>
                <section className='flex'>
                    <section className='bg-[#F0F0F0] w-[326px] h-[48px] rounded-[62px] flex items-center '>
                        <i className="fa-solid fa-tag text-[20px] ml-[10px] p-2"></i>
                        <input type="password" className='w-[98%] outline-hidden' placeholder='Add promo code'/>
                    </section>
                    <button className='w-[119px] h-[48px] rounded-[62px] bg-black text-white'>Apply</button>
                </section>
                <button className='w-[435px] h-[60px] rounded-[62px] bg-black text-white max-sm:w-full'>Go to Checkout <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </>
    )
}

export default OrderSummary