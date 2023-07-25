import axios from "axios";
import {useQuery} from "@tanstack/react-query";

interface Posts {
    id: number;
    title: string;
    userId: number;
    body: string;
}

const usePosts = () => {
    const fetchPosts = () =>
        axios
            .get<Posts[]>("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.data)

    return useQuery<Posts[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 10 * 1000
    })
}

export default usePosts;