import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    thumbsDown: '👎',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch()

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                type="button"
                className="reactionButton inline-flex items-center space-x-2 bg-gray-100 text-gray-600 px-3 py-1 rounded-full focus:outline-none focus:ring focus:ring-blue-300"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                <span className="mr-1">{emoji}</span> 
                <span>{post.reactions[name]}</span>
            </button>
        )
    })

    return <div className="space-x-2">{reactionButtons}</div>
}
export default ReactionButtons;
