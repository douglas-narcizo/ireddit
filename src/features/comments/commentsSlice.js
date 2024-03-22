import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPostComments } from '../../api/reddit';

const initialState = {
  value: {},
  status: 'idle',
  postId: '',
  showing: false,
};

export const fetchPostComments = createAsyncThunk(
  'comments/fetchPostComments',
  getPostComments
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    toggleShowing(state, action) {
      if (state.postId !== action.payload) {
        state.status = 'idle';
        state.postId = action.payload;
        state.showing = true;
      } else {
        state.showing = !state.showing;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostComments.pending, (state) => {
        state.status = 'idle';
      })
      .addCase(fetchPostComments.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.value = action.payload;
      })
      .addCase(fetchPostComments.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// SELECTORS export -----
export const selectPostComments = (state) => state.comments.value;
export const selectPostId = (state) => state.comments.postId;
export const showPostComments = (state) => state.comments.showing;
export const commentsLoaded = (state) => state.comments.status === 'loaded';
export const commentsFailed = (state) => state.comments.status === 'failed';

// ACTIONS export -----
export const { toggleShowing } = commentsSlice.actions;

// REDUCER export -----
export default commentsSlice.reducer;