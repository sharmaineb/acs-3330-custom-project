import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./Time";
import ReactionButtons from "./ReactionButton";

const PostsList = () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id} className="border-b border-gray-200 py-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-700 mb-2">{post.content.substring(0, 100)}</p>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                    <PostAuthor userId={post.userId} />
                    <TimeAgo timestamp={post.date} />
                </div>
                <ReactionButtons post={post} />
            </div>
        </article>
    ))

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4">Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList;
