import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { itemContext } from './App'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NewArrivalsCard from './NewArrivalsCard'


function NewArrivals({title, info, someRef}) {
    const {chosenItem, setChosenItem} = useContext(itemContext)
    

    const [randElement, setRandElement] = useState([])

    useEffect(() => {
        if (info.length === 0) {
            return
        }

        const selected = []

        const usedIndexes = new Set()
        while (selected.length < 4) {
            const random = Math.floor(Math.random() * info.length);
            if (!usedIndexes.has(random)) {
                usedIndexes.add(random)
                selected.push(info[random])
            }
        }
        setRandElement(selected)
    }, [info])

    useEffect(() => {
        if (chosenItem){
            // console.log(chosenItem)
            null
        }
    }, [chosenItem])

    return (
        <>
        <div className='mt-[60px]' ref={someRef}>
            <h1 className='text-[48px] text-black font-[900] text-center'>{title}</h1>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-wrap'>
                {
                    randElement ? 
                    randElement.map((item, index) => {
                        return <Link 

                        to="/shop" 
                        onClick={() => {
                            if (item) {
                                setChosenItem(item)
                            }
                        }}
                        key={index}

                        ><NewArrivalsCard imgSrc={item.imgList[0]} name={item.title} rating={item.rate} price={item.price} isDiscount={item.discount ? true : false} prevPrice={item.discount}/> </Link>
                    }) : null
                }
            </div>
            <div className='flex justify-center gap-[20px] mt-[40px] flex-col items-center gap-[70px]'>
                <button className='w-[258px] h-[52px] rounded-[62px] border border-[#0000001A] font-[500]'>View All</button>
                <img src="/images/line.png" alt="" />
            </div>
        </div>
        </>
    )
}

export default NewArrivals