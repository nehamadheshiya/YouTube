import React from 'react';
import { useState } from 'react';

const Demo = () => {
    const[text,setText]=useState("")
    const[isdark,setIsDark]=useState(true)
    console.log("Rendering")
  return (
    <div className={"m-2 p-2 w-96 h-96 border border-black shadow-xl rounded-md ml-16 " + (isdark && "bg-gray-950 text-white")} >
        <div><button className='m-2 p-2 bg-green-400 rounded-md shadow-lg'
        onClick={()=>setIsDark(!isdark)}
        >Toggle</button></div>
        <div>
        <input type="text" className='border border-black shadow-xl rounded-md '
        value={text} 
        onChange={(e)=>{
        setText(e.target.value)
         }}/>
        </div>
    </div>
  )
}

export default Demo 