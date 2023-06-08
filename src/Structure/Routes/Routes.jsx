import React from 'react';
import {
    createBrowserRouter
  } from "react-router-dom";
import Main from '../Layout/Main';
import HomeLayout from '../Pages/Home/HomeLayout/HomeLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>
        },
        {
          path: '/instructors',
          element: <h1>This is Instructors Page</h1>
        },
        {
          path: '/classes',
          element: <h1>This is Classes Page</h1>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
      ]
    },
  ]);

export default router;