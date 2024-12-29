import { useSelector } from "react-redux"
import PostAuthor from "./PostAuthor";


const PostsList = () => {
    // both are okay
    const posts = useSelector((state) => state.posts);
    // const allPosts = useSelector(selectAllPosts);

    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <article key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                            <p>
                                <PostAuthor userId={post.id} />
                            </p>
                        </article>
                    )
                })
            }
        </div>
    )
}

export default PostsList