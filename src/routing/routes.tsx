import {createBrowserRouter} from "react-router-dom";
import Home from "./Home.tsx";
import UserList from "./UserList.tsx";
import ContactPage from "./ContactPage.tsx";


const router = createBrowserRouter([
    { path: '/', element: <Home />},
    { path: '/users', element: <UserList />},
    { path: '/contact', element: <ContactPage />},

]);

export default router;