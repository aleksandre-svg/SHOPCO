import { useState,  useContext, useEffect } from 'react'
import { itemContext } from './App'
import { Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
function Filter() {

    return (
        <>
        <div className="w-[295px] max-h-[1220px] bg-white rounded-2xl border p-6 flex flex-col justify-between border-[#0000001A]">

        <div className="flex flex-col gap-6">
            <div>
                <h2 className="text-lg font-semibold mb-4">Filters</h2>
                <ul className="text-gray-700 space-y-2">

                </ul>
                </div>

                <div>
                <h3 className="font-medium text-gray-800 mb-3">Price</h3>
                <input type="range" min="50" max="200" defaultValue="125" className="w-full accent-black" />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$50</span>
                    <span>$200</span>
                </div>
                </div>

                <div>
                <h3 className="font-medium text-gray-800 mb-3">Colors</h3>
                <div className="">
                    
                </div>
                </div>

                <div>
                <h3 className="font-medium text-gray-800 mb-3">Size</h3>
                <div className="">

                </div>
                </div>

                <div>
                <h3 className="font-medium text-gray-800 mb-3">Dress Style</h3>
                <ul className="text-gray-700 space-y-2">

                </ul>
                </div>
            </div>

            <button className="mt-8 w-full py-3 bg-black text-white rounded-full font-medium">
                Apply Filter
            </button>
        </div>
        </>
    )
}

export default Filter