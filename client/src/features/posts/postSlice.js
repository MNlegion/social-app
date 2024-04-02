import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";

const initialState = {
    posts: [],
    post: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

// Fetch all posts
export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, thunkAPI) => {
    try {
        return await postService.fetchPosts();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ message });
    }
});

// Fetch single post
export const fetchPost = createAsyncThunk('posts/fetchPost', async (id, thunkAPI) => {
    try {
        return await postService.fetchPost(id);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ message });
    }
});

// Create new post
export const createPost = createAsyncThunk('posts/createPost', async (post, thunkAPI) => {
    try {
        return await postService.createPost(post);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ message });
    }
});

// Update post
export const updatePost = createAsyncThunk('posts/updatePost', async (post, thunkAPI) => {
    try {
        return await postService.updatePost(post);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ message });
    }
});

// Delete post
export const deletePost = createAsyncThunk('posts/deletePost', async (id, thunkAPI) => {
    try {
        return await postService.deletePost(id);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue({ message });
    }
});

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(fetchPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.post = action.payload;
            })
            .addCase(fetchPost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(createPost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.posts.push(action.payload);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(updatePost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.posts = state.posts.map((post) => post.id === action.payload.id ? action.payload : post);
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(deletePost.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.posts = state.posts.filter((post) => post.id !== action.payload.id);
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;