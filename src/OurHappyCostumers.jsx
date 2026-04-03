import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OurHappyCostumersCard from './OurHappyCostumersCard'
import NewArrivals from './NewArrivals'
function OurHappyCostumers() {

    return (
        <>
        <div className='mt-[50px]'>
            <div className='flex items-center justify-between text-center justify-self-center w-[85%] max-sm:w-[100%] max-sm:px-[10px]'>
                <h1 className='text-[48px] font-[900] max-sm:text-[32px] max-sm:text-left'>OUR HAPPY CUSTOMERS</h1>
                <section className='flex gap-[20px] mt-[10px]'>
                    <i className="fa-solid fa-arrow-left text-[22px]" onClick={()=>{
                        document.getElementById("scroll").scrollBy({left: -1200, behavior:"smooth"})
                    }}></i>
                    <i className="fa-solid fa-arrow-right text-[22px]" onClick={()=>{
                        document.getElementById("scroll").scrollBy({left: 1200, behavior:"smooth"})
                    }}></i>
                </section>
            </div>
            <div className='flex justify-self-center gap-[20px] overflow-hidden w-[85%] max-md:w-[100%]' id='scroll'>
                <OurHappyCostumersCard firstName="sarah" lastName="maria" review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."/>
                <OurHappyCostumersCard firstName="alex" lastName="kenya" review="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."/>
                <OurHappyCostumersCard firstName="james" lastName="loriam" review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."/>
                <OurHappyCostumersCard firstName="alex" lastName="kenya" review="Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."/>
                <OurHappyCostumersCard firstName="james" lastName="loriam" review="I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."/>
            </div>
            
        </div>
        </>
    )
}

export default OurHappyCostumers