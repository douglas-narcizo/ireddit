import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { 
  getFeedPosts,
  getPostComments } from '../../api/reddit';

const initialState = {
  value: {},
  status: 'idle'
};

export const fetchFeed = createAsyncThunk(
  'feed/fetchFeed',
  getFeedPosts
);
/*  async (endpoint) => {
    const response = await fetch(endpoint);
    const json = await response.json();
    return json;
  } */

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
        console.log(action.payload);   // DELETE THIS LATER ON!!
      })
      .addCase(fetchFeed.rejected, (state) => {
        state.status = 'failed';
      });
  },
});
  
// export const { named actions } = feedSlice.actions;
  
// Selector
export const selectFeed = (state) => state.feed.value;
export const feedLoaded = (state) => state.feed.status === 'loaded';
export const feedFailed = (state) => state.feed.status === 'failed';

export default feedSlice.reducer;