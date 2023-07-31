import {createBrowserRouter} from "react-router-dom";
import Home from "./Home.tsx";
import UserList from "./UserList.tsx";


const router = createBrowserRouter([
    { path: '/', element: <Home />},
    { path: '/users', element: <UserList />},
]);

export default router;