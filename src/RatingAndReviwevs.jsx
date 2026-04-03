import { use, useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RatingAndReviwevsCard from './RatingAndReviwevsCard'
import { itemContext } from './App'

function RatingAndReviwevs() {
    const {chosenItem, setChosenItem} = useContext(itemContext)
    return (
        <>
        <div className='w-full flex flex-col items-center mt-[50px]'>
            <div className='flex justify-center'>
                <section className='border-b border-[#0000001A] w-[418px] flex justify-center items-center pb-[10px] max-sm:w-[33%]'>
                    <h1 className='text-[20px] text-[#00000099] font-[400]'>Product Details</h1>
                </section>
                <section className='border-b border-[#000] w-[418px] flex justify-center items-center pb-[10px] max-sm:w-[33%]'>
                    <h1 className='text-[20px] font-[600]'>Rating & Reviews</h1>
                </section>
                <section className='border-b border-[#0000001A] w-[418px] flex justify-center items-center pb-[10px] max-sm:w-[33%]'>
                    <h1 className='text-[20px] text-[#00000099] font-[400]'>FAQs</h1>
                </section>
            </div>
            <div className='flex justify-center w-full gap-[730px] mt-[25px] max-lg:gap-[0] max-lg:justify-between max-lg:flex-col max-lg:gap-15'>
                <section>
                    <h1 className='text-[24px] font-[700]'>All Reviews <span className='font-[400] text-[16px] text-[#00000099]'>({chosenItem.reviews.length})</span></h1>
                </section>
                <section className='flex gap-[10px]'>
                    <button className='w-[48px] h-[48px] bg-[#F0F0F0] rounded-[50%]'>
                        <i className="fa-solid fa-sliders "></i>
                    </button>
                    <button className='w-[120px] h-[48px] bg-[#F0F0F0] rounded-[62px] flex items-center gap-[20px] justify-center '>
                        <p className='text-[16px] font-[500]'>Latest</p>
                        <i className="fa-solid fa-chevron-down"></i>
                    </button>
                    <button className='w-[166px] h-[48px] text-white bg-black rounded-[62px]'>
                        <p>Write a Review</p>
                    </button>
                </section>
            </div>
            <div className='flex flex-wrap justify-between w-[66%]'>
                {/* <RatingAndReviwevsCard firstName="samantha" lastName="daves" review="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." date="August 14, 2023"/>
                <RatingAndReviwevsCard firstName="alex" lastName="maresth" review="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me." date="August 15, 2023"/>
                <RatingAndReviwevsCard firstName="ethan" lastName="ryans" review="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." date="August 16, 2023"/>
                <RatingAndReviwevsCard firstName="olivia" lastName="prime" review="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out." date="August 17, 2023"/>
                <RatingAndReviwevsCard firstName="liam" lastName="kim" review="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion." date="August 18, 2023"/>
                <RatingAndReviwevsCard firstName="Ava" lastName="putaria" review="I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter." date="August 19, 2023"/> */}

                {
                    chosenItem.reviews ? 
                    chosenItem.reviews.map((item, index) => {
                        return <RatingAndReviwevsCard firstName={item.name} lastName={item.name} review={item.desc} date={item.tim} key={index} rating={item.rating}/>
                    }) :null
                }
            </div>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-col items-center gap-[70px]'>
                <button className='w-[258px] h-[52px] rounded-[62px] border border-[#0000001A] font-[500]'>Load More Reviews</button>
            </div>
        </div>
        </>
    )
}

export default RatingAndReviwevs
