import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";


export const AddPostFrom = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [userId, setUserId] = useState("");

    const users = useSelector(selectAllUsers);

    const dispatch = useDispatch();

    const onSavaPostClicked = () => {
        if (title && content) {
            dispatch(postAdded(title, content, userId))
            setTitle("");
            setContent("");
        }
    }


    return (
        <section>
            <h2>Add a New Post</h2>
            <form action="">
                <label htmlFor="postTitle">Post Title: </label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="postAuthor">Author: </label>
                <select name="postAuthor" id="postAuthor" onChange={ (e) => setUserId(e.target.value)}>
                    <option value=""></option>
                    {
                        users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))
                    }

                </select>

                <label htmlFor="postContent">Content: </label>
                <textarea
                    name="postContent"
                    id="postContent"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

                <button
                    type="button"
                    onClick={onSavaPostClicked}
                >Save Post</button>

            </form>
        </section>
    )
}
