import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function NewArrivalsCard({imgSrc, name, rating, price, isDiscount, prevPrice, discount}) {
    let arr = []
    for (let i = 0; i < Math.floor(rating); i++){
        arr.push(0)
    }

    return (
        <>
        <div className='w-[295px] flex flex-col h-[460px] justify-between pt-[10px]'>
            <img src={`/images/clothes/${imgSrc}`} className='h-[300px] object-fit rounded-[15px] border'/>
            <div className='flex flex-col gap-[10px]'>
                <h1 className='text-[20px] font-[700] '>{name}</h1>
                <section className='flex items-center gap-1'>
                    {
                        arr.map((_, index) => {
                            return <i className="fa-solid fa-star text-[#FFD43B]" key={index}></i>
                        })
                    }
                    {
                        rating % 1 !== 0 ? <i className="fa-solid fa-star-half text-[#FFD43B]"></i> : null
                    }
                    <h1 className='text-[14px] font-[400]'>{rating}/5</h1>
                </section>
                <div className='flex gap-[10px] items-center'>
                    <h1 className='text-[24px] font-[700]'>${price} {isDiscount ? <span className='text-[#00000066] line-through'>{prevPrice}</span> : null}</h1>
                    {
                    isDiscount ? 
                    <div className='w-[58px] h-[28px] bg-[#FF33331A] rounded-[62px] flex items-center justify-center text-[#FF3333] '>
                        <p className='text-[14px]'>-{Math.round((prevPrice-price)/prevPrice * 100 )}%</p>
                    </div> : 
                    null}
                </div>
            </div>
        </div>
        </>
    )
}

export default NewArrivalsCard