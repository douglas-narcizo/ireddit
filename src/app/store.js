import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import feedReducer from '../features/feed/feedSlice';
import searchReducer from '../features/search/searchSlice';
import subreddtitsReducer from '../features/subreddits/subredditsSlice';

export const store = configureStore({
  reducer: combineReducers({
    feed: feedReducer,
    search: searchReducer,
    subreddits: subreddtitsReducer
  })
});
