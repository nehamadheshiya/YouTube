import React, { useEffect,useState } from 'react';
import ChatMessage from './ChatMessage';
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../utils/chatSlice";
import {generateName} from '../utils/helper';
import {randomMessage} from '../utils/helper'

const LiveChat = () => {
    const[liveMessage,setLiveMessage]=useState("")
    const dispatch=useDispatch();

    const chatMessages=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const i=setInterval(()=>{
            //apicall
            console.log("Api called")
            // Dispatching the action
            dispatch(addMessage({
                 name: generateName(),
                 message: randomMessage(20)+"👍"
            }));
  
        },1000)

        return ()=>clearInterval(i);
    },[])

  return (
    <div>
    <div className="ml-10 p-2 border border-black w-96 h-96 bg-gray-100 rounded-lg shadow-2xl overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c,i)=><ChatMessage key={i} name={c.name} message={c.message} />)}
    </div>
    <form className='w-full mt-2 p-2 ml-8 border border-black rounded-md shadow-2xl bg-gray-100' onSubmit={(e)=>{
        e.preventDefault();
        console.log("submit",liveMessage)
        dispatch(
            addMessage({
                name:"Neha",
                message:liveMessage,
            })
        )
        setLiveMessage("")
    }}>
        <input className='w-80 border border-black' type="text" 
        value={liveMessage}
        onChange={(e)=>{
            setLiveMessage(e.target.value);
        }}
        />
        <button className='px-4 mx-2 ml-6 bg-green-300 rounded-sm border border-black '> Send</button>
    </form>
    </div>
  
  )
}

export default LiveChat