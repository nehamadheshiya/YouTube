import React from 'react'

const VideoCard = ({info}) => {
    // console.log(info);
    const {snippet,statistics}=info
    const{channelTitle,title,thumbnails}=snippet;

  return (
    <div className=" p-3 m-2 w-80 shadow-lg bg-gray-50 ml-10 h-80">
        <img className='rounded-lg ' alt="video" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold py-2'>{title}</li>
            <li className='font-medium '>{channelTitle}</li>
            <li className='font-medium '>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard