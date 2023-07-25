import React from "react";
import useInfinitPost from "../react-query/hooks/useInfinitPosts.ts";
const PostInfinitPagination = () => {
    const pageSize = 10;
    const {data: posts, error, isLoading, fetchNextPage, isFetchingNextPage} = useInfinitPost({ pageSize });

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>{error.message}</p>


    return (
        <>
            <ul className="list-group">
                {posts?.pages.map((page, index) => (
                <React.Fragment key={index}>
                    {page.map((post) => (
                            <li className="list-group-item" key={post.id}>
                                {post.title}
                            </li>
                        ))}
                </React.Fragment>
                ))}
            </ul>
            <button
                disabled={isFetchingNextPage}
                className="btn btn-primary my-3"
                onClick={() => fetchNextPage()}
            >{isFetchingNextPage ? "Loading..." : "Load More"}</button>
        </>
    );
};

export default PostInfinitPagination;