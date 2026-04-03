import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function RatingAndReviwevsCard({firstName, lastName, review, date, rating}) {
    let arr = []
    for (let i = 0; i < Math.floor(rating); i++){
        console.log(arr.push(0))
    }
    return (
        <>

                <div className='w-[610px] h-[220px] border border-[#0000001A] px-[20px] py-[40px] flex flex-col items-start justify-between  rounded-[20px] shrink-[0] grow-[0] max-sm:w-[100%] mt-[20px] max-lg:w-auto max-lg:h-auto'>
                <section>
                    {
                        arr.map((_, index) => {
                            return <i className="fa-solid fa-star text-[#FFD43B]" key={index}></i>
                        })
                    }
                    {
                        rating % 1 == 0 ? null : <i className="fa-solid fa-star-half text-[#FFD43B]"></i>
                    }
                </section>
                <h1 className='text-[20px] font-[700] '>{firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase()+"."} <i className="fa-solid fa-circle-check  text-[#01AB31]"></i></h1>
                <p className='max-x-[336px] text-[#00000099] leading-[22px]'>{review}</p>
                <h1 className='text-[#00000099] font-[500]'>Posted on {date}</h1>
            </div> 
        </>
    )
}

export default RatingAndReviwevsCard