import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Feed from './Feed';
import Profile from './Profile';

const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: "/", // This should be the default child route
                    element: <Feed />
                },
                {
                    path: "/profile/:id", // Correct usage, no leading slash
                    element: <Profile />
                }
                // {
                //     path: "/comment/:id",
                //     element: <Comment />
                // }
            ]
        },
        {
            path: "/login",
            element: <Login />
        }
    ]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
}

export default Body;
