import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    if (!author) {
        return <span className="font-oswald text-gray-600">Author loading...</span>;
    }

    return <span className="font-oswald text-gray-600">by {author.name}</span>;
}

export default PostAuthor;