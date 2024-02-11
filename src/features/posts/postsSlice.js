import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    {
        id: '1',
        title: 'Watched Saltburn',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            thumbsDown: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: 'Barbie Movie',
        content: "Beautiful.",
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 0,
            wow: 3,
            heart: 7,
            thumbsDown: 0,
            coffee: 0
        }
    },
    {
        id: '3',
        title: 'The Matrix',
        content: "Mind-blowing action and concept.",
        date: sub(new Date(), { hours: 1 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 10,
            wow: 5,
            heart: 8,
            thumbsDown: 2,
            coffee: 0
        }
    },
    {
        id: '4',
        title: 'Pulp Fiction',
        content: "Classic masterpiece with unforgettable dialogues.",
        date: sub(new Date(), { days: 1 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 15,
            wow: 7,
            heart: 12,
            thumbsDown: 1,
            coffee: 0
        }
    },
    {
        id: '5',
        title: 'The Shawshank Redemption',
        content: "Absolutely stunning storytelling.",
        date: sub(new Date(), { days: 2 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 20,
            wow: 10,
            heart: 18,
            thumbsDown: 0,
            coffee: 0
        }
    },
    {
        id: '6',
        title: 'Inception',
        content: "Mind-bending visuals and plot twists.",
        date: sub(new Date(), { days: 3 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 25,
            wow: 15,
            heart: 22,
            thumbsDown: 3,
            coffee: 0
        }
    },
    {
        id: '7',
        title: 'The Godfather',
        content: "A cinematic masterpiece.",
        date: sub(new Date(), { days: 4 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 30,
            wow: 20,
            heart: 25,
            thumbsDown: 2,
            coffee: 0
        }
    },
    // add more entries later
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            thumbsDown: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;