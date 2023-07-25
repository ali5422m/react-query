import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Posts {
    id: number;
    title: string;
    userId: number;
    body: string;
}

interface PostQuery {
    page: number;
    pageSize: number;
    userId: number | undefined;
}

const usePosts = (query: PostQuery) => {
    const fetchPosts = () =>
        axios
            .get<Posts[]>('https://jsonplaceholder.typicode.com/posts', {
                params:{
                    _start: (query.page - 1) * query.pageSize,
                    _limit: query.pageSize,
                    userId: query.userId
                }
            })
            .then(res => res.data)

    return useQuery<Posts[], Error>({
        // users/1/posts
        queryKey: query.userId ? ['users', query.userId, 'posts', query] : ['posts', query],
        queryFn: fetchPosts,
        staleTime: 10 * 1000,
        keepPreviousData: true, //for pagination
    })
}

export default usePosts;