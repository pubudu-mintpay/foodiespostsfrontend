import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Layout from "./Components/Layout.tsx";
import Homepage from "./Pages/Homepage.tsx";
import Account from "./Pages/Account.tsx";
import Posts from "./Pages/Posts.tsx";
import AddPost from "./Pages/AddPost.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage/>,
    }, {
        path: "/posts",
        element: <Posts/>,
    },
    {
        path: "/account",
        element: <Account/>,
    },
    {
        path: "/add-post",
        element: <AddPost/>,
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Layout>
            <RouterProvider router={router}/>
        </Layout>
    </React.StrictMode>,
)
