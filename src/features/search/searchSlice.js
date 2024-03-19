import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSearch } from '../../api/reddit';

// ----- ----- ----- ----- ----- ----- ----- ----- ----- 
//
// THIS SLICE WILL PROBABLY BE REMOVED ON NEXT REVISION!!
//
// ----- ----- ----- ----- ----- ----- ----- ----- ----- 

const initialState = {
    term: '',
    url: ''
  };

  export const fetchSearch = createAsyncThunk(
    'search/fetchSearch',
    getSearch
  );
  
  export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        setTerm: (state, action) => {
            state.term = action.payload;
        },
        setUrl: (state, action) => {
            state.url = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchSearch.pending, (state) => {
            state.status = 'idle';
          })
          .addCase(fetchSearch.fulfilled, (state, action) => {
            state.status = 'loaded';
            state.value = action.payload;
          })
          .addCase(fetchSearch.rejected, (state) => {
            state.status = 'failed';
          });
      },
});

export const searchSelector = (state) => state.search;
export const { setTerm, setUrl } = searchSlice.actions;
export default searchSlice.reducer;
