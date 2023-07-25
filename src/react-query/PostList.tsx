import usePosts from "./hooks/usePosts.js";
import {useState} from "react";

const PostList = () => {
    const [userId, setUserId] = useState<number>();
    const {data: posts, error, isLoading} = usePosts(userId);

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>


    return (
        <>
            <select
                className="form-select mb-3"
                onChange={(e) => e.target.value === "" ? setUserId(undefined) : setUserId(parseInt(e.target.value))}
                value={userId}
            >
                <option value=""></option>
                <option value="1">User1</option>
                <option value="2">User2</option>
                <option value="3">User3</option>
            </select>
            <ul className="list-group">
                {posts?.map(post => (
                    <li className="list-group-item" key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
};

export default PostList;