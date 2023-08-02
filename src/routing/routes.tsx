import {createBrowserRouter} from "react-router-dom";
import Home from "./Home.tsx";
import ContactPage from "./ContactPage.tsx";
import UserDetail from "./UserDetail.tsx";
import Layout from "./Layout.tsx";
import UsersPage from "./UsersPage.tsx";
import ErrorPage from "./ErrorPage.tsx";
import LoginPage from "./LoginPage.tsx";
import PrivateRoutes from "./PrivateRoutes.tsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home />},
            {path: '/login', element: <LoginPage />},
            {path: 'contact', element: <ContactPage/>},
        ]
    },
    {
        element: <PrivateRoutes />,
        children: [
            {
                path: 'users',
                element: <UsersPage />,
                children: [
                    {path: ':id', element: <UserDetail />},
                ]
            },
        ]
    }

]);

export default router;