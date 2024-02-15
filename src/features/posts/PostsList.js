import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./Time";
import ReactionButtons from "./ReactionButton";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (
        <motion.section
            className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Entries:</h2>
            {orderedPosts.map(post => (
                <motion.article
                    key={post.id}
                    className="border-b border-gray-200 py-4"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.1 }}
                >
                    <h3 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h3>
                    <p className="text-gray-700 mb-2">{post.content.substring(0, 100)}</p>
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                            <PostAuthor userId={post.userId} />
                            <TimeAgo timestamp={post.date} />
                        </div>
                        <ReactionButtons post={post} />
                    </div>
                </motion.article>
            ))}
        </motion.section>
    );
}
export default PostsList;