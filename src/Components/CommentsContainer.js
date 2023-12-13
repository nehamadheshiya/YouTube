import React from 'react'

const commentData=[
    {
        name:"Neha",
        text:"Thanks For This Tutorial!",
        replies:[
            {
                name:"Akshay",
                text:"Thanks For This Tutorial!",
                replies:[
                    {
                        name:"Akshay",
                        text:"Thanks For This Tutorial!",
                        replies:[
                            {
                                name:"Akshay",
                                text:"Thanks For This Tutorial!",
                                replies:[
                                    {
                                        name:"Akshay",
                                        text:"Thanks For This Tutorial!",
                                        replies:[
                                            
                                        ],
                                    },
                                    
                                ],
                            },
                            
                        ],
                    },
                    
                ],
            },
        ],
    },
    {
        name:"Akshay",
        text:"Thanks For This Tutorial!",
        replies:[
            {
                name:"Akshay",
                text:"Thanks For This Tutorial!",
                replies:[
                    
                ],
            },

        ],
    },
    {
        name:"Neha",
        text:"Thanks For This Tutorial!",
        replies:[
            {
                name:"Akshay",
                text:"Thanks For This Tutorial!",
                replies:[
                    {
                        name:"Akshay",
                        text:"Thanks For This Tutorial!",
                        replies:[
                            
                        ],
                    },
                    
                ],
            },

        ],
    },
    {
        name:"Neha",
        text:"Thanks For This Tutorial!",
        replies:[
        ],
    },
]

const Comment=({data})=>{
    const{name,text,replies}=data;
    return (
    <div className='flex mt-3 bg-gray-100 shadow-md p-2 rounded-md '>
        <div className='w-12 h-12'>
            <img alt="userImg" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"/>
        </div>
        <div className='pl-3'>
            <p className='font-medium'>{name}</p>
            <p className='font-normal'>{text}</p>
        </div>
    </div>
    )

}

const CommentList=({comments}) =>{
    return comments.map((comment,i)=>
    (
        <div key={i}>
            <Comment  data={comment}/>
            <div className='pl-5 border border-l-black ml-5'>
               <CommentList comments={comment.replies}/>
            </div>
        </div>
    ))
    
}

const CommentsContainer = () => {
  return (
    <div className='ml-10 p-2'>
        <h3 className='font-bold text-xl'>Comments :</h3>
        <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentsContainer