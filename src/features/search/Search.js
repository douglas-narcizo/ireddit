import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchSelector, setTerm, setUrl, fetchSearch } from './searchSlice';
import { fetchFeed } from '../feed/feedSlice';
import './Search.css';

export const Search = () => {
  const search = useSelector(searchSelector);
  const dispatch = useDispatch();
  const currentUrl = window.location.pathname;
  const redditUrl = 'https://www.reddit.com';
  let path, query;

  useEffect(() => {
    dispatch(fetchFeed(search.url ? search.url : 'r/popular'));
  },[search.url]);

  const getFeed = () => {
    if (search.term) {
      path = '/search';
      query = `?q=${search.term.replaceAll(' ', '%20').toLowerCase()}`;
      dispatch(setUrl(`${path}.json${query}`));
    } /* else if (search.url.includes(currentUrl)) {
      dispatch(setUrl(''));
    } /* else {
      path = `${search.url}.json`;
      navigate({ pathname: path });
      dispatch(setUrl(`${redditUrl}${path}`));
    } */
    
    // dispatch(fetchFeed( redditUrl + query ));
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