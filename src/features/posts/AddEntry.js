import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddEntryForm = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content && userId) {
            dispatch(postAdded(title, content, userId));
            setTitle('');
            setContent('');
            setUserId('');
        }
    };

    const canSave = title && content && userId;

    const usersOptions = users.map((user) => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    return (
        <div className="font-oswald bg-gray-900">
            <section className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Add a New Entry</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="postTitle" className="block text-gray-800 mb-1">Entry Title:</label>
                        <input
                            type="text"
                            id="postTitle"
                            name="postTitle"
                            value={title}
                            onChange={onTitleChanged}
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"/>
                    </div>
                    <div>
                        <label htmlFor="postAuthor" className="block text-gray-800 mb-1">Author:</label>
                        <select
                            id="postAuthor"
                            value={userId}
                            onChange={onAuthorChanged}
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500">
                            <option value="">Select an author</option>
                            {usersOptions}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="postContent" className="block text-gray-800 mb-1">Entry:</label>
                        <textarea
                            id="postContent"
                            name="postContent"
                            value={content}
                            onChange={onContentChanged}
                            className="border border-gray-300 rounded px-4 py-2 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={onSavePostClicked}
                        disabled={!canSave}
                        className={`bg-blue-500 text-white px-4 py-2 rounded ${canSave ? 'hover:bg-blue-600 cursor-pointer' : 'cursor-not-allowed'}`}>
                        Add Entry
                    </button>
                </form>
            </section>
        </div>
    );
};

export default AddEntryForm;
