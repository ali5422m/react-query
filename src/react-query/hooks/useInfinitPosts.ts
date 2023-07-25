import axios from "axios";
import {useInfiniteQuery} from "@tanstack/react-query";

interface Posts {
    id: number;
    title: string;
    userId: number;
    body: string;
}

interface PostQuery {
    pageSize: number;
}

const usePosts = ( query: PostQuery ) => useInfiniteQuery<Posts[], Error>({
    queryKey: ['posts', query],
    queryFn: ({pageParam = 1}) =>  axios
        .get<Posts[]>('https://jsonplaceholder.typicode.com/posts', {
            params:{
                _start: (pageParam - 1) * query.pageSize,
                _limit: query.pageSize,
            }
        })
        .then(res => res.data),
    staleTime: 10 * 1000,
    keepPreviousData: true, //for pagination
    getNextPageParam : (lastPage, allPages): number | undefined => {

        return lastPage.length > 0 ? allPages.length + 1 : undefined;
    }

    })

export default usePosts;