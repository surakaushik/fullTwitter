import React,{useEffect} from 'react';
import Leftsidebar from './Leftsidebar.js';
import Rightsidebar from './Rightsidebar.js';
import { Outlet,useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import useOtherUsers from '../hooks/useOtherUsers.js';
import useGetMyTweets from '../hooks/useGetMyTweets.js';

const Home = () => {

    const { user, otherUsers } = useSelector(store => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, []);
    useOtherUsers(user?._id);
    useGetMyTweets(user?._id);
    return (
        <div className='flex justify-between w-[80%] mx-auto'>
            <Leftsidebar />
            <Outlet />
            <Rightsidebar otherUsers={otherUsers} />
        </div>
    )
}

export default Home