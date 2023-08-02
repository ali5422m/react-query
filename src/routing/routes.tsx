import {createBrowserRouter} from "react-router-dom";
import Home from "./Home.tsx";
import ContactPage from "./ContactPage.tsx";
import UserDetail from "./UserDetail.tsx";
import Layout from "./Layout.tsx";
import UsersPage from "./UsersPage.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {path: '', element: <Home />},
            {path: 'contact', element: <ContactPage/>},
            {
                path: 'users',
                element: <UsersPage />,
                children: [
                    {path: ':id', element: <UserDetail />},
                ]
            },
        ]
    },

]);

export default router;