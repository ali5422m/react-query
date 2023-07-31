import {createBrowserRouter} from "react-router-dom";
import Home from "./Home.tsx";
import UserList from "./UserList.tsx";
import ContactPage from "./ContactPage.tsx";
import UserDetailPage from "./UserDetailPage.tsx";


const router = createBrowserRouter([
    { path: '/', element: <Home />},
    { path: '/users', element: <UserList />},
    { path: '/contact', element: <ContactPage />},
    { path: '/users/:id', element: <UserDetailPage />},

]);

export default router;