import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function Hero() {

    return (
        <>
        <div className='bg-[#F2F0F1]  flex h-[668px] justify-center items-center max-lg:flex-col max-lg:h-full pt-[50px] max-sm:px-[10px] gap-[140px] max-sm:gap-[60px]'>
            <section className='flex flex-col gap-[20px]'>
                <h1 className='text-[64px] font-[900] leading-[105%] max-sm:text-[36px]'>FIND CLOTHES <br />
                THAT MATCHES <br />
                YOUR STYLE</h1>
                <p className='text-[#00000099] max-sm:text-[14px] max-sm:leading-[24px] '>Browse through our diverse range of meticulously crafted garments, designed <br /> to bring out your individuality and cater to your sense of style.</p>
                <button className='w-[210px] h-[52px] bg-black text-white rounded-[62px] py-[16px] px-[54px] flex items-center justify-center font-[500] max-sm:w-full'>Shop Now</button>
                <div className='flex gap-[32px] flex-wrap max-lg:justify-center'>
                    <section>
                        <h1 className='text-[40px] font-[700]'>200+</h1>
                        <p className='text-[#00000099]'>International Brands</p>
                    </section>
                    <section>
                        <h1 className='text-[40px] font-[700]'>2,000+</h1>
                        <p className='text-[#00000099]'>High-Quality Products</p>
                    </section>
                    <section>
                        <h1 className='text-[40px] font-[700]'>30,000+</h1>
                        <p className='text-[#00000099]'>Happy Customers</p>
                    </section>
                </div>
            </section>
            <section className='w-[548px] relative max-lg:w-full'>
                <img src="/images/models.png" className='w-[600px] relative top-4.5 max-lg:w-full max-md:top-0'/>
            </section>
        </div>
        <div className='w-full h-[122px] bg-black flex items-center justify-center gap-[110px] max-lg:gap-[55px] max-md:gap[15px] flex-wrap max-lg:h-[146px] max-sm:gap-[9px]'>
            <img src="/images/versace.png" alt="" className='max-md:w-[116px] max-md:h-[23px]'/>
            <img src="/images/zara.png" alt="" className='max-md:w-[116px] max-md:h-[23px]'/>
            <img src="/images/gucci.png" alt="" className='max-md:w-[116px] max-md:h-[23px]'/>
            <img src="/images/prada.png" alt="" className='max-md:w-[116px] max-md:h-[23px]'/>
            <img src="/images/calvin.png" alt="" className='max-md:w-[116px] max-md:h-[23px]'/>
        </div>
        </>
    )
}

export default Hero
