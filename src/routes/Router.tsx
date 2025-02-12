import React from 'react';
import { Navigate as BigNav, Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Pages/Home';
import { Paths } from './paths';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Project from '../Pages/Project';
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: Paths.home,
                element: <Home/>,
            },
            {
                path: Paths.about,
                element: <About/>
            },
            {
                path: Paths.contact,
                element:<Contact/>
            },
            {
                path: Paths.project,
                element: <Project />
            }
        ]
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    }
]);