import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    term: '',
  };

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers:{
        changeTerm: (state, action) => {
            state.term = action.payload;
        }
    }
});

export const termSelector = (state) => state.search.term;
export const { changeTerm } = searchSlice.actions;
export default searchSlice.reducer;
