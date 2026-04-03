import { useState,  useContext, useEffect } from 'react'
import { itemContext } from './App'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OnSalesItems from './onSalesItems'
import NewArrivalsCard from './NewArrivalsCard'
import Filter from './Filter'

let arr = [[0, 9], [9, 18], [18, 20]]
function Category() {
    const {chosenSaleItems, setChosenSaleItems} = useContext(itemContext)
    const {info} = useContext(itemContext)
    const [count, setCount] = useState(0)
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(9)
    useEffect(() => {
        console.log(start,end)
    }, [start,end])
    return (
        <>
        <div className='flex justify-center items-start gap-4'>
            <Filter/>
            <div className='w-[930px]'>
                <OnSalesItems info={info} title={chosenSaleItems} start={start} end={end}/> <br />
                <hr className='text-[#0000001A]'/><br />
                <div className='flex justify-between'>
                    <button className='w-[110px] h-[36px] border rounded-[5px] border-[#0000001A] flex justify-center items-center gap-[5px]'  onClick={() => {
                            if (count > 0){
                                setCount(count-1)
                                setStart(arr[count][0])
                                setEnd(arr[count][1])
                            }
                        }}>
                        <i className="fa-solid fa-arrow-left"></i>
                        Previous
                    </button>
                    <section className='flex gap-[10px]'>
                        <button className='w-[40px] h-[40px] bg-[#0000000F] rounded-[8px]' onClick={() => {
                            setStart(0)
                            setEnd(9)
                        }}>1</button>
                        <button className='w-[40px] h-[40px] bg-[#0000000F] rounded-[8px]'  onClick={() => {
                            setStart(9)
                            setEnd(18)
                        }}>2</button>
                        <button className='w-[40px] h-[40px] bg-[#0000000F] rounded-[8px]'  onClick={() => {
                            setStart(18)
                            setEnd(20)
                        }}>3</button>
                    </section>
                    <button className='w-[100px] h-[36px] border rounded-[5px] border-[#0000001A] flex justify-center items-center gap-[5px]'  onClick={() => {
                            if (count < 3){
                                setCount(count+1)
                                setStart(arr[count][0])
                                setEnd(arr[count][1])
                            }
                        }}>
                        Next
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Category