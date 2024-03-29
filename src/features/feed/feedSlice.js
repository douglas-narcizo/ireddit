import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getFeedPosts } from '../../api/reddit';

const initialState = {
  value: {},
  status: 'idle'
};

export const fetchFeed = createAsyncThunk(
  'feed/fetchFeed',
  getFeedPosts
);

export const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeed.pending, (state) => {
        state.status = 'idle';
      })
      .addCase(fetchFeed.fulfilled, (state, action) => {
        state.status = 'loaded';
        state.value = action.payload;
      })
      .addCase(fetchFeed.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// SELECTORS export -----
export const selectFeed = (state) => state.feed.value;
export const feedLoaded = (state) => state.feed.status === 'loaded';
export const feedFailed = (state) => state.feed.status === 'failed';

// REDUCER export -----
export default feedSlice.reducer;
