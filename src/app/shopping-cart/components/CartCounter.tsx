'use client'
import { useState } from "react";

const CartCounter = () => {
    const[cont,setCont]=useState(0)
  return (
    <div>
         <span className="text-9xl">{cont}</span>

<div className="flex">
  <button onClick={()=>setCont(cont+1)} className="flex items-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px mr-2] mr-2">
    +1
  </button>
  <button onClick={()=>setCont(cont-1)} className="flex items-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px mr-2]">
    -1
  </button>
</div>
    </div>
  )
}

export default CartCounter