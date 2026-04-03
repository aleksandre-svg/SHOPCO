import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function Footer() {

    return (
        <>
            <footer className='mt-[50px]'>
                <div className='w-[85%] h-[180px] rounded-[20px] bg-black flex justify-self-center px-[65px] justify-between items-center max-lg:w-full max-lg:flex-wrap max-lg:h-full max-lg:py-[20px] max-sm:px-[20px] max-sm:gap-[15px] relative top-[90px] max-sm:static'>
                    <h1 className='max-w-[551px] text-white font-[900] text-[40px] leading-[45px] max-sm:text-[32px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    <div  className='flex flex-col gap-[20px] w-full items-end'>
                        <section className='w-[349px] h-[48px] rounded-[62px] py-[12px] px-[16px] flex gap-[10px] bg-white items-center max-lg:w-full'>
                            <i className="fa-regular fa-envelope text-[#00000066] text-[20px] mt-1"></i>
                            <input type="email" placeholder='Enter your email address' className='text-[#00000066] text-[16px]  w-[88%] h-full outline-[0px]'/>
                        </section>
                        <button className='w-[349px] h-[46px] rounded-[62px] bg-white max-lg:w-full'>Subscribe to Newsletter</button>
                    </div>
                </div>
                <div className='w-full h-[499px] bg-[#F0F0F0] flex flex-col justify-center items-center max-sm:h-full'>
                    <section className='flex justify-between items-center w-[85%] flex-wrap max-sm:gap-[10px]'>
                        <div className='flex flex-col gap-[15px]'>
                            <h1 className='text-[33.45px] font-[900]'>SHOP.CO</h1>
                            <p className='max-w-[248px] font-[400] text-[14px] leading-[22px] text-[#00000099]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <section className="flex">
                                <div className='w-[28px] h-[28px] border border-[#00000033] rounded-[50%] flex items-center justify-center  p-[15px] bg-white'><i className="fa-brands fa-twitter"></i></div>
                                <div className='w-[28px] h-[28px] border border-white rounded-[50%] flex items-center justify-center bg-black  p-[15px]'><i className="fa-brands fa-facebook-f text-white"></i></div>
                                <div className='w-[28px] h-[28px] border border-[#00000033] rounded-[50%] flex items-center justify-center  p-[15px] bg-white'><i className="fa-brands fa-instagram"></i></div>
                                <div className='w-[28px] h-[28px] border border-[#00000033] rounded-[50%] flex items-center justify-center  p-[15px] bg-white'><i className="fa-brands fa-github"></i></div>
                            </section>
                        </div>
                        <div className='flex flex-col gap-[15px]'>
                            <h1 className='font-[500]'>COMPANY</h1>
                            <p className='text-[#00000099] '>About</p>
                            <p className='text-[#00000099] '>Features</p>
                            <p className='text-[#00000099] '>Works</p>
                            <p className='text-[#00000099] '>Career</p>
                        </div>
                        
                        <div className='flex flex-col gap-[15px]'>
                            <h1 className='font-[500]'>Help</h1>
                            <p className='text-[#00000099] '>Customer Support</p>
                            <p className='text-[#00000099] '>Delivery Details</p>
                            <p className='text-[#00000099] '>Terms & Conditions</p>
                            <p className='text-[#00000099] '>Privacy Policy</p>
                        </div>
                        <div className='flex flex-col gap-[15px]'>
                            <h1 className='font-[500]'>FAQ</h1>
                            <p className='text-[#00000099] '>Account</p>
                            <p className='text-[#00000099] '>Manage Deliveries</p>
                            <p className='text-[#00000099] '>Orders</p>
                            <p className='text-[#00000099] '>Payments</p>
                        </div>
                        <div className='flex flex-col gap-[15px]'>
                            <h1 className='font-[500]'>RESOURCES</h1>
                            <p className='text-[#00000099] '>Free eBooks</p>
                            <p className='text-[#00000099] '>Development Tutorial</p>
                            <p className='text-[#00000099] '>How to - Blog</p>
                            <p className='text-[#00000099] '>Youtube Playlist</p>
                        </div>
                    </section>
                    <img src="/images/bigline.png" alt=""  className='w-[85%] flex justify-self-center self-center mt-[40px]'/>
                    <section className='flex items-center w-[85%] justify-between mt-[20px] flex-wrap'>
                        <h1>Shop.co © 2000-2023, All Rights Reserved</h1>
                        <div className='flex flex-wrap'>
                            <img src="/images/visa.png" alt="" />
                            <img src="/images/bog.png" alt="" />
                            <img src="/images/pp.png" alt="" />
                            <img src="/images/ap.png" alt="" />
                            <img src="/images/gp.png" alt="" />
                        </div>
                    </section>
                </div>
            </footer>
        </>
    )
}

export default Footer