import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function OurHappyCostumersCard({firstName, lastName, review}) {

    return (
        <>
            <div className='w-[400px] h-[240px] border border-[#0000001A] px-[32px] py-[28px] flex flex-col items-start justify-center gap-[10px] rounded-[20px] shrink-[0] grow-[0] max-sm:w-[100%]'>
                <img src="/images/5star.png" alt="" />
                <h1 className='text-[20px] font-[700] '>{firstName[0].toUpperCase() + firstName.slice(1) + " " + lastName[0].toUpperCase()+"."} <i className="fa-solid fa-circle-check  text-[#01AB31]"></i></h1>
                <p className='max-x-[336px] text-[#00000099] leading-[22px]'>{review}</p>
            </div>
        </>
    )
}

export default OurHappyCostumersCard