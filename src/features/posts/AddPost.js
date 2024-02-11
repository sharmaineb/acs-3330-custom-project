import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostForm = () => {
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const users = useSelector(selectAllUsers)

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onAuthorChanged = e => setUserId(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            )
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

    return (
        <section className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a New Entry</h2>
            <form className="space-y-4">
                <label htmlFor="postTitle" className="block text-gray-800">Entry Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                />
                <label htmlFor="postAuthor" className="block text-gray-800">Author:</label>
                <select id="postAuthor" value={userId} onChange={onAuthorChanged} className="border border-gray-300 rounded px-4 py-2 w-full">
                    <option value=""></option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent" className="block text-gray-800">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                    className="border border-gray-300 rounded px-4 py-2 w-full"
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                    className={`bg-blue-500 text-white px-4 py-2 rounded ${canSave ? 'hover:bg-blue-600 cursor-pointer' : 'cursor-not-allowed'}`}
                >Save Post</button>
            </form>
        </section>
    )
}
export default AddPostForm;