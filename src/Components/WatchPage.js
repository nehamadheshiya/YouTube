import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
    const [searchParams]=useSearchParams();
    // console.log(searchParams.get("v"));

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='flex flex-col '>
        <div className='px-5 m-4 ml-10 mt-6 flex'>
        <div>
        <iframe className="rounded-2xl" width="650" height="385"  src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div>
          <LiveChat/>
        </div>

        </div>
        <CommentsContainer/>
    </div>
  
  )
}

export default WatchPage