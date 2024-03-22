import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSubreddits } from '../../api/reddit';

const initialState = {
  value: {},
  status: 'idle'
};

export const fetchSubreddit = createAsyncThunk(
  'subreddits/fetchSubreddit',
  getSubreddits
);

export const subredditsSlice = createSlice({
  name: 'subreddits',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubreddit.pending, (state) => {
        state.status = 'idle';
      })
      .addCase(fetchSubreddit.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.value = action.payload;
      })
      .addCase(fetchSubreddit.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// SELECTORS export -----
export const selectSubreddits = (state) => state.subreddits.value;
export const subredditsLoaded = (state) => state.subreddits.status === 'loaded';
export const subredditsFailed = (state) => state.subreddits.status === 'failed';

// REDUCER export -----
export default subredditsSlice.reducer;
