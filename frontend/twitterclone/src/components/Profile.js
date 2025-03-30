import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import {Link, useParams} from "react-router-dom";
import Avatar from 'react-avatar';
import { useSelector } from 'react-redux';
import useGetProfile from '../hooks/useGetProfile.js';

const Profile = () => {
  const {user,profile} = useSelector(store=>store.user);
  const {id} = useParams();
  useGetProfile(id);
  return (
    <div className='w-[50%] border-l border-r border-gray-200'>
        <div>
            <div className='flex items-center py-2'>
              <Link to="/"className='p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer'>
                <IoArrowBackSharp size="24px" />
              </Link>
              <div className='ml-2'>
                <h1 className='font-bold text-lg '>{profile?.name}</h1>
                <p className='text-gray-500 text-sm '>10 posts</p>
              </div>
            </div>
            <img 
              src="https://media.licdn.com/dms/image/v2/D4D16AQHx0rfj75pr1w/profile-displaybackgroundimage-shrink_200_800/profile-displaybackgroundimage-shrink_200_800/0/1730609349796?e=2147483647&v=beta&t=Mdg21EOcbQ_cLyOyUmA7aKyXUxxd0zeS4ujRPlvQBts" 
              alt="Profile Banner"
              className="w-full h-auto" 
            />
            <div className='absolute top-40 ml-4 border-4 border-white rounded-full'>
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVcIb_T9c8816h9eVnCJmTnaey3rkjtI7A7Jkb1YhmBWqr8zq91Xyae_SgA&s" size="85" round={true} />
            </div>
            <div className='text-right m-3'>
              {
                profile?._id === user?._id ? (
                  <button className='px-4 py-1  hover:bg-gray-200 rounded-full border border-gray-400'>Edit Profile</button>
                ):(
                  <button className='px-4 py-1 bg-black text-white rounded-full '>Profile</button>
                )
              }
              
            </div>
            <div className='mx-4 my-1'>
              <h1 className='font-bold text-xl'>{profile?.name}</h1>
              <p >{`@${profile?.username}`}</p>
            </div>
            <div className='m-4 text-sm'>
              <p>CE'26 || JAVA || WEB DEVELOPMENT || DSA || PYTHON </p>
            </div>
        </div>
    </div>
  );
}

export default Profile;
