import { use, useState, useContext } from 'react'
import { itemContext } from './App'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'
import NewArrivals from './NewArrivals'

function Item() {
    const {chosenItem, setChosenItem, shoppingCartsItems, setShoppingCartsItems} = useContext(itemContext)
    const [count, setCount] = useState(1)
    const [chosenColor, setChosenColor] = useState(0)
    const [chosenItemInfo, setChosenItemInfo] = useState({
        imgSrc: chosenItem.imgList[chosenColor],
        title: chosenItem.title,
        size: "",
        color: chosenItem.colorList[chosenColor],
        price: chosenItem.price,
        amount: count
    })
    useEffect(() => {
        
    }, [chosenColor])
    useEffect(() => {count < 0 ? setCount(0) : null}, [count])
    let arr = []
    useEffect(() => {
        if (chosenItem){
            
            // console.log(chosenItem)
            // console.log(typeof chosenItem.imgList[0])
        }
    }, [chosenItem])
    for (let i = 0; i < Math.floor(chosenItem.rate); i++){
        arr.push(0)
    }
    return (
        <>
        <img src="/images/border.png" alt="" className='block mx-auto'/><br />
        <div className='flex justify-center w-[full] gap-[25px] flex-wrap'> 
            <div>
                <h1 className='text-[#00000099] flex items-center gap-[10px] max-sm:ml-[20px] '>
                Home 
                <i className="fa-solid fa-chevron-right text-[#00000099]"></i> 
                Shop 
                <i className="fa-solid fa-chevron-right text-[#00000099]"></i> 
                Men 
                <i className="fa-solid fa-chevron-right text-[#00000099]"></i>
                <span className='text-[#000000]'>T-shirts</span></h1><br />
                <div className='flex gap-[15px] max-sm:flex-col-reverse max=sm:w-full px-[15px]'>
                    <section className='flex flex-col gap-[15px]  max-sm:flex-row max-sm:w-full'>
                        {
                            chosenItem.itemList ? 
                            [chosenItem.imgList].map((item, index) => {
                                return <img src={`/images/clothes/${item}`} alt="" className='w-[152px] h-[167px] max-sm:w-[30%] max-sm:h-auto'  key={index} onClick={() => {
                                    setChosenItemInfo({...chosenItemInfo, imgSrc: chosenItem.imgList[index]})
                                }}/>
                            }) : [...chosenItem.imgList].map((item, index) => {
                                return <img src={`/images/clothes/${item}`} alt="" className='w-[152px] h-[167px] max-sm:w-[30%] max-sm:h-auto'  key={index} onClick={
                                    () => {setChosenItemInfo({...chosenItemInfo, imgSrc: chosenItem.imgList[index]})}
                                }/>
                            })
                        }
                    </section>
                    { 
                        chosenItem.imgList ? 
                        <img src={`images/clothes/${chosenItemInfo.imgSrc}`} alt="" className='max-sm:w-full  w-[330px] h-auto h object-cover' /> : null
                        }
                </div>
            </div>
            <div className='w-[590px] flex flex-col justify-between max-sm:px-[15px]'><br />
                <h1 className='text-[40px] font-[900] max-sm:max-w-[247px] max-sm:text-[24px]'>{chosenItem.title}</h1>
                <div className='flex items-center gap-3 max-sm:w-[105px] max-sm:h-[18px]'>
                    <section>
                        {
                        arr.map((_, index) => {
                            return <i className="fa-solid fa-star text-[#FFD43B]" key={index}></i>
                        })
                        }
                        {
                            chosenItem.rate % 1 !== 0 ? <i className="fa-solid fa-star-half text-[#FFD43B]"></i> : null
                        }
                    </section>
                    <p>{chosenItem.rate}/5</p>
                </div>
                <div className='flex gap-[15px] items-center'>
                    <h1 className='text-[32px] flex gap-[15px]'>
                        <span className='font-[700] max-sm:text-[24px]'>${chosenItem.price}</span>
                        {
                            chosenItem.discount ? 
                            <span className='font-[500] text-[#0000004D] line-through max-sm:text-[24px]'>${chosenItem.discount}</span> : null
                        }
                    </h1>
                    {
                        chosenItem.discount ? 
                        <div className='bg-[#FF33331A] w-[72px] h-[34px] rounded-[62px] font-[400] flex items-center justify-center text-[#FF3333]'>
                        -{100 - Math.round((chosenItem.price / chosenItem.discount) * 100)}%
                        </div> : null
                    }
                </div>
                <p className='text-[#00000099] max-sm:text-[14px]'>{chosenItem.desc}</p>
                <div className='flex flex-col gap-[5px] border-b border-t w-full border-[#0000001A] py-[15px]'>
                    <p className='text-[#00000099]'>Select Colors</p>
                    <section className='flex gap-[16px]'>
                        {/* <div className='w-[37px] h-[37px] rounded-[50%] bg-[#4f4631]'></div>
                        <div className='w-[37px] h-[37px] rounded-[50%] bg-[#314f4a]'></div>
                        <div className='w-[37px] h-[37px] rounded-[50%] bg-[#31344f]'></div> */}
                        {
                            (chosenItem.colorList).map((item, index) => {
                                console.log(item)
                                return <div className={`w-[37px] h-[37px] rounded-[50%] white border cursor-pointer`}
                                key={index}

                                style={{backgroundColor: item}}

                                onClick={() => {
                                    setChosenItemInfo({...chosenItemInfo, color: item, imgSrc: chosenItem.imgList[index]})
                                    
                                }}
                                ></div>
                                
                            })
                        }
                    </section>
                </div>
                <div className='flex flex-col gap-[5px] border-b  w-full border-[#0000001A] py-[15px]'>
                    <p className='text-[#00000099]'>Choose Size</p>
                    <section className='flex gap-[16px]'>
                            {/* <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] max-sm:w-full'>Small</button>
                            <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] max-sm:w-full'>Medium</button>
                            <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] bg-[black] text-white max-sm:w-full'>Large</button>
                            <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] max-sm:w-full'>X-Large</button> */}
                            {
                                (chosenItem.sizeList).map((item, index) => {
                                    return <button className='w-[86px] h-[46px] bg-[#F0F0F0] rounded-[62px] text-[#00000099] max-sm:w-full' key={index} onClick={(e) => {
                                        setChosenItemInfo({...chosenItemInfo, size:item})
                                    }}>{item[0].toUpperCase()+item.slice(1)}</button>
                                })
                            }
                    </section>
                </div>
                <div className='flex gap-[17px]'>
                    <section className='w-[170px] h-[52px] bg-[#F0F0F0] flex items-center justify-evenly rounded-[62px] max-sm:w-[40%]'>
                        <p className='text-[40px]' onClick={()=>setChosenItemInfo({...chosenItemInfo,amount: chosenItemInfo.amount-1})}>-</p>
                        <p>{chosenItemInfo.amount}</p>
                        <p className='text-[40px]' onClick={()=>setChosenItemInfo({...chosenItemInfo,amount: chosenItemInfo.amount+1})}>+</p>
                    </section>
                    <Link to='/cart' onClick={() => {
                        setShoppingCartsItems([...shoppingCartsItems, chosenItemInfo])
                        console.log(shoppingCartsItems)
                    }}><button className='w-[400px] h-[52px] py-[16px] px-[54px] bg-black rounded-[62px] text-white max-sm:w-[60%]'>Add to Cart</button></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default Item
