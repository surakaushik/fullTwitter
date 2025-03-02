import React, { useEffect } from 'react';
import { PiMagnifyingGlassBold } from "react-icons/pi";
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const Rightsidebar = ({ otherUsers }) => {


  return (
    <div className='w-[25%]'>
      <div className=' m-1 flex items-center p-2 gap-1 bg-gray-100 rounded-full outline-none w-full'>
        <PiMagnifyingGlassBold size="20px" />
        <input className='bg-transparent outline-none px-1 w-[90%]' type="text" placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to Follow </h1>
        {
          otherUsers?.map((user) => {
            return (
              <div key={user?._id} className='flex items-center justify-between my-3'>
                <div className='flex'>
                  <div>
                  <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVcIb_T9c8816h9eVnCJmTnaey3rkjtI7A7Jkb1YhmBWqr8zq91Xyae_SgA&s" size="40" round={true} />
                  </div>
                  <div className='ml-2'>
                    <h1 className='font-bold'>{user?.name}</h1>
                    <p className='text-sm'>{`@${user?.username}`}</p>
                  </div>
                </div>
                <div>
                  <Link to={`/profile/${user?._id}`}>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                  </Link>
                </div>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Rightsidebar