import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from 'date-fns';

const initialState = [
    {
        id: '1',
        title: 'Saltburn',
        content: "I've heard good things.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 7,
            wow: 5,
            heart: 6,
            thumbsDown: 2,
            coffee: 8
        }
    },
    {
        id: '2',
        title: 'Barbie',
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
    {
        id: '8',
        title: 'Interstellar',
        content: "Stunning visuals, great soundtrack, intriguing story.",
        date: sub(new Date(), { days: 5 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 25,
            wow: 18,
            heart: 20,
            thumbsDown: 1,
            coffee: 0
        }
    },
    {
        id: '9',
        title: 'If Beale Street Could Talk',
        content: "Director Barry Jenkins delivers a poignant and visually stunning adaptation of James Baldwin's novel, 'If Beale Street Could Talk,' weaving together themes of love, injustice, and resilience with masterful storytelling and breathtaking cinematography.",
        date: sub(new Date(), { days: 6 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 28,
            wow: 15,
            heart: 26,
            thumbsDown: 0,
            coffee: 5
        }
    },
    {
        id: '10',
        title: '10 Things I Hate About You',
        content: "Classic rom-com with a Shakespearean twist.",
        date: sub(new Date(), { days: 7 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 35,
            wow: 22,
            heart: 30,
            thumbsDown: 3,
            coffee: 0
        }
    },
    {
        id: '11',
        title: 'How to Lose a Guy in 10 Days',
        content: "A romantic comedy about a magazine writer who tries to lose a guy in 10 days as an assignment, but ends up falling for him.",
        date: sub(new Date(), { days: 9 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 38,
            wow: 20,
            heart: 30,
            thumbsDown: 1,
            coffee: 0
        }
    },
    // The Princess Diaries
    {
        id: '12',
        title: 'The Princess Diaries',
        content: "A charming coming-of-age story about a teenager who discovers she's a princess and must learn to navigate royal life.",
        date: sub(new Date(), { days: 10 }).toISOString(),
        userId: '1', 
        reactions: {
            thumbsUp: 42,
            wow: 28,
            heart: 35,
            thumbsDown: 2,
            coffee: 0
        }
    },
    // Get Out
    {
        id: '13',
        title: 'Get Out',
        content: "A gripping horror thriller that explores race relations in America through a unique and chilling story.",
        date: sub(new Date(), { days: 11 }).toISOString(),
        userId: '2', 
        reactions: {
            thumbsUp: 45,
            wow: 30,
            heart: 40,
            thumbsDown: 3,
            coffee: 0
        }
    },
    // Minari
    {
        id: '14',
        title: 'Minari',
        content: "A touching drama about a Korean immigrant family trying to achieve the American Dream by starting a farm in rural Arkansas.",
        date: sub(new Date(), { days: 12 }).toISOString(),
        userId: '0', 
        reactions: {
            thumbsUp: 48,
            wow: 35,
            heart: 45,
            thumbsDown: 2,
            coffee: 0
        }
    },
    // Four Sisters and a Wedding
    {
        id: '15',
        title: 'Four Sisters and a Wedding',
        content: "A heartwarming Filipino family comedy about four sisters who reunite for their youngest brother's wedding.",
        date: sub(new Date(), { days: 13 }).toISOString(),
        userId: '3', 
        reactions: {
            thumbsUp: 50,
            wow: 40,
            heart: 50,
            thumbsDown: 2,
            coffee: 0
        }
    },
    // add more movies here later
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