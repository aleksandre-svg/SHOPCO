import { useState,  useContext } from 'react'
import { itemContext } from './App'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function CartItem({imgSrc, title, size,  color, price, amount}) {
    const [count, setCount] = useState(amount)
    return (
        <>
        <div className='flex items-center gap-[30px] relative w-full'>
            <i className="fa-solid fa-trash  text-red-600  absolute top-0 right-5 cursor-pointer"></i>
            <img src={imgSrc}  className='w-[150px] h-[150px] object-cover rounded-[10px]'/>
            <div>
                <h1 className='text-[20px] font-[700]'>{title}</h1>
                <p><span className='font-[500]'>Size:</span> {size}</p>
                <p><span className='font-[500]'>Color:</span> {color}</p>
                <section className='flex items-center gap-[300px]'>
                    <h2 className='text-3xl'>${price}</h2>
                    <section className='w-[170px] h-[52px] bg-[#F0F0F0] flex items-center justify-evenly rounded-[62px] max-sm:w-[40%]'>
                        <p className='text-[40px]' onClick={()=>setCount(count-1)}>-</p>
                        <p>{count}</p>
                        <p className='text-[40px]' onClick={()=>setCount(count+1)}>+</p>
                    </section>
                </section>
            </div> 
            
        </div>
        <hr className='text-[#0000001A] my-[15px]'/>
        </>
    )
}

export default CartItem