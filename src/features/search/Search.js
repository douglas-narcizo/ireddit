import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchSelector, setTerm, setUrl } from './searchSlice';
import { fetchFeed } from '../feed/feedSlice';
import './Search.css';

export const Search = () => {
  const search = useSelector(searchSelector);
  const dispatch = useDispatch();
  let path, query;

  useEffect(() => {
    dispatch(fetchFeed(search.url ? search.url : 'r/pics'));
  },[search.url]);

  const getFeed = () => {
    if (search.term) {
      path = '/search';
      query = `?q=${search.term.replaceAll(' ', '%20').toLowerCase()}`;
      dispatch(setUrl(`${path}.json${query}`));
    } else {
      dispatch(setUrl('r/pics'));
    }
  }

  return (
    <div className='searchBar'>
      <input
        id='term'
        name='term'
        type='text'
        className='input'
        placeholder='Search…'
        onChange={(e) => dispatch(setTerm(e.target.value))}
        value={search.term}
      />
      <button onClick={getFeed}>Search</button>
    </div>
  )
}
