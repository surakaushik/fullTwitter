import React from 'react'
import Avatar from 'react-avatar';
import axios from "axios";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { MdOutlineSaveAlt } from "react-icons/md";
import {TWEET_API_END_POINT} from "../utils/constant";
import { useSelector,useDispatch } from 'react-redux';

const Tweet = ({ tweet }) => {
    const { user } = useSelector((store) => store.user);
    const likeOrDislikeHandler = async(id) =>{
        try {
            const res = await axios.put(`${TWEET_API_END_POINT}/like/${id}` ,{id:user?._id},{
                withCredentials:true,
            })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='border-b border-gray-200'>
            <div>
                <div className='flex p-4'>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVcIb_T9c8816h9eVnCJmTnaey3rkjtI7A7Jkb1YhmBWqr8zq91Xyae_SgA&s" size="40" round={true} />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center '>
                            <h1 className='font-bold '>{tweet?.userDetails[0]?.name}</h1>
                            <p className='text-gray-500 text-sm ml-1'>{`@ ${tweet?.userDetails[0]?.username}.1m`} </p>
                        </div>
                        <div>
                            <p>{tweet?.description}</p>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center '>
                                <div onClick={()=>likeOrDislikeHandler(tweet?._id)} className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                <AiOutlineLike size="20px" />
                                </div>
                                <p className='ml-1'>{tweet?.like?.length}</p>
                            </div>
                            {/* <div className='flex items-center '>
                                <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                <AiOutlineDislike size="20px" />
                                </div>
                                <p className='ml-1'>{tweet?.dislike?.length}</p>
                            </div> */}
                            <div className='flex items-center '>
                                <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                <BiCommentDetail size="20px" />
                                </div>
                                <p className='ml-1'>0</p>
                            </div>
                            <div className='flex items-center '>
                                <div className='p-2 hover:bg-blue-200 rounded-full cursor-pointer'>
                                <MdOutlineSaveAlt size="20px" />
                                </div>
                                <p className='ml-1'>0</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet