import React from 'react';
import Createpost from './Createpost.js';
import Tweet from './tweet.js';
import {useSelector} from "react-redux";
import Aman from "./aman.js";

const Feed = () => {
  const {tweets} = useSelector(store=>store.tweet);
  console.log(tweets);
  
  return (
    <div className='w-[50%] border border-gray-200'>
      <div>
        <Createpost/>
        {
          tweets?.map((tweet)=> <Tweet key={tweet?._id} tweet={tweet}/>)
        }
        <Aman/>
      </div>
    </div>
  );
}

export default Feed;
