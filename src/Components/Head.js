import React, { useEffect } from 'react';
import { toggleMenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/Constants';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const[suggestions,setSuggestion]=useState([])
  const[showSuggestion,setShowSuggestions]=useState(false);
  // console.log(searchQuery);

  useEffect(() => {
    getSearchSuggestions();
    const timer=setTimeout(()=>getSearchSuggestions(),3000);
    return ()=>{
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    // Define a unique callback function name
    const callbackFunctionName = 'handleSearchSuggestions';

    // Create a script element dynamically
    const script = document.createElement('script');

    // Set the script source with the JSONP URL, including the callback function
    script.src = `${YOUTUBE_SEARCH_API + searchQuery}&callback=${callbackFunctionName}`;

    // Attach the script to the document
    document.head.appendChild(script);

    // Clean up: remove the script after it has been executed
    script.onload = () => {
      document.head.removeChild(script);
    };
  };

  // Define the callback function
  window.handleSearchSuggestions = (data) => {
    setSuggestion(data[1])
    // console.log(data);
    // Handle the data received from the JSONP response here
    // You can update the state or perform any other necessary action
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2'>
        <div className='flex col-span-1 '>
            <img onClick={()=>toggleMenuHandler()} className="h-12 cursor-pointer" alt="menu" src="https://static.vecteezy.com/system/resources/previews/002/292/406/non_2x/hamburger-menu-line-icon-free-vector.jpg"/>
            <img className="h-12 " alt="logo" src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"/>
        </div>
        <div className='col-span-10 ml-32'>
          <div>
            <input className='w-1/2 h-8 p-2 rounded-l-full  mt-2 border border-gray-950' type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestions(true)}
              onBlur={()=>setShowSuggestions(false)}
            />
            <button className='border border-gray-950 h-8 mt-2 p-1 px-3 rounded-r-full font-semibold '>🔍</button>
            </div>

            { showSuggestion && <div className='fixed bg-white py-2 px-5 p-5 w-96 rounded-xl shadow border border-gray-200'>
            <ul>
                {suggestions.map((suggestion) => (
                <li key={suggestion} className='py-2 shadow-sm hover:bg-gray-100'>🔍 {suggestion}</li>
               ))}
            </ul>

            </div>}
        </div>
          {/* <div>
          <img className='w-14 h-14 mt-1' alt="dark" src="https://static.thenounproject.com/png/3861733-200.png"/>
        </div> */}
        <div className='flex col-span-1'><img className="h-12" alt="user" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>

        </div>
    </div>
  )
}

export default Head