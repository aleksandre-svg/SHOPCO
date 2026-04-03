import { useState,  useContext, useEffect } from 'react'
import { itemContext } from './App'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CartItem from './CartItem'
function Cart() {
    const {shoppingCartsItems, setDhoppingCartsItems} = useContext(itemContext)
    useEffect(() => {
        if (shoppingCartsItems){
            console.log(shoppingCartsItems)
        }
    }, [shoppingCartsItems])
    return (
        <>
        <div className='border border-[#0000001A] rounded-[20px] w-[715px] h-[528px] p-[15px] overflow-x-scroll hide-scrollbar max-lg:w-full max-sm:w-[350px]'>

            {
                shoppingCartsItems ? shoppingCartsItems.map((item, index) => {
                    return <CartItem title={item.title} key={index} imgSrc={`images/clothes/${item.imgSrc}`}  size={item.size} color={item.color} price={item.price} amount={item.amount}/>
                }) : null
            }
        </div>
        </>
    )
}

export default Cart