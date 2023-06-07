import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Layout/Main';
import HomeLayout from '../Pages/Home/HomeLayout/HomeLayout';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>
        }
      ]
    },
  ]);

export default router;