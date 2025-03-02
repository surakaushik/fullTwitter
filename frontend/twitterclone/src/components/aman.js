import React from 'react'
import Avatar from 'react-avatar';
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineSaveAlt } from "react-icons/md";

const Aman = () => {
  return (
    <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4'>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVcIb_T9c8816h9eVnCJmTnaey3rkjtI7A7Jkb1YhmBWqr8zq91Xyae_SgA&s" size="40" round={true} />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center '>
                            <h1 className='font-bold '>Sura Kaushik</h1>
                            <p className='text-gray-500 text-sm ml-1'>@sura.kaushik . 1h </p>
                        </div>
                        
                        <div className='w-full justify-between' >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVR-UtwbgoqGZ8QyQl-7n4mUr1B8E_pheDAA&s" alt="" />
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center '><div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'><AiOutlineLike size="20px" /></div><p className='ml-1'>1k</p></div>
                            {/* <div className='flex items-center '><div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'><AiOutlineDislike size="20px" /></div><p className='ml-1'>1k</p></div> */}
                            <div className='flex items-center '><div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'><BiCommentDetail size="20px" /></div><p className='ml-1'>1k</p></div>
                            <div className='flex items-center '><div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'><MdOutlineSaveAlt size="20px" /></div><p className='ml-1'>1k</p></div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
  )
}

export default Aman
