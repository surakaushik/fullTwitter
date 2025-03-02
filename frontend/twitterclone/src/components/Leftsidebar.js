import React from 'react'
import { IoHome } from "react-icons/io5";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";
import {Link} from "react-router-dom";
import { useSelector } from 'react-redux';


const Leftsidebar = () => {
  const {user} = useSelector(store=>store.user);
  return (
    <div className='w-[20%]'>
      <div>
        <div>
          <img className='mx-4 mt-2' width={'24px'} src="data:image/png;base64,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" alt="twitter-logo" />
        </div>
        <div className='my-4'>
          <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <IoHome size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Home</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <PiMagnifyingGlassBold size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <IoMdNotificationsOutline size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Notifications</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <MdOutlineMessage size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>messages</h1>
          </div>

          <Link to={`/profile/${user?._id}`} className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <FaRegUser size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Profiles</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <FaRegBookmark size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <FaListUl size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Lists</h1>
          </div>
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <MdOutlineWorkspacePremium size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>Premium</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full">
            <div>
              <CgMoreO size="24px" />
            </div>
            <h1 className='font-bold text-lg ml-2'>More</h1>
          </div>

          <button className='px-4 py-2 border-none text-lg bg-[#1D9BF0] w-full rounded-full text-white font-bold'>Post</button>
          
        </div>
      </div>
    </div>
  )
}

export default Leftsidebar