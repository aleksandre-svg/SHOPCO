import { useState, useContext, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Link} from 'react-router-dom'
import { itemContext } from './App'
import NewArrivalsCard from './NewArrivalsCard'
import Filter from './Filter'

function OnSalesItems({title, info, start, end}) {
    const {chosenItem, setChosenItem} = useContext(itemContext)
    const [randElement, setRandElement] = useState([])
    useEffect(() => {
            if (info.length === 0) {
                return
            }
    
            const selected = []
    
            for (let i = start; i < end; i++){
                selected.push(info[i])
            }
            setRandElement(selected)
        }, [info, start, end])

    return (
        <>
        <div className='flex flex-col gap-[15px] max-w-[930px]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[32px] font-[700]'>{title}</h1>
                <h1>Showing 1-10 of 100 Products Sort by: Most Popular</h1>
            </div>
            <div  className='max-w-[930px] flex  flex-wrap justify-between'>
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
        </div>
        </>
    )
}

export default OnSalesItems