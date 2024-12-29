import { useSelector } from "react-redux"
import { selectAllUsers } from "../../../redux-toolkit/slices/users/usersSlice"


const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === userId);

    return (
        <span>
            {
                author ? author.name : 'Unknown author'
            }
        </span>
    )
}

export default PostAuthor