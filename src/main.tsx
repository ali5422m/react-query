import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import {RouterProvider} from "react-router-dom";
import router from "./routing/routes.tsx";


const queryClient = new QueryClient(
//     {
//     defaultOptions:{
//         queries:{
//             retry: 3, // when url is wrong 3 times request running
//             cacheTime: 300_000, //5min -> no component that using query , delete from catch after 5min
//             staleTime: 10 * 1000, //10s  consider component refresh
//             refetchOnWindowFocus: false,
//             refetchOnReconnect: false,
//             refetchOnMount: false
//         }
//     }
// }
);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools />
        </QueryClientProvider>
    </React.StrictMode>,
)
