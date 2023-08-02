import {createBrowserRouter} from "react-router-dom";
import Home from "./Home.tsx";
import UserList from "./UserList.tsx";
import ContactPage from "./ContactPage.tsx";
import UserDetailPage from "./UserDetailPage.tsx";
import Layout from "./Layout.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '', element: <Home/>},
            {path: 'contact', element: <ContactPage/>},
            {path: 'users', element: <UserList/>},
            {path: 'users/:id', element: <UserDetailPage/>},
        ]
    },

]);

export default router;