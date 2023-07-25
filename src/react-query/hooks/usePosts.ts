import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Posts {
    id: number;
    title: string;
    userId: number;
    body: string;
}

const usePosts = (userId: number | undefined ) => {
    const fetchPosts = () =>
        axios
            .get<Posts[]>('https://jsonplaceholder.typicode.com/posts', {
                params:{
                    userId
                }
            })
            .then(res => res.data)

    return useQuery<Posts[], Error>({
        // users/1/posts
        queryKey: userId ? ['users', userId, 'posts'] : ['posts'],
        queryFn: fetchPosts,
        staleTime: 10 * 1000
    })
}

export default usePosts;