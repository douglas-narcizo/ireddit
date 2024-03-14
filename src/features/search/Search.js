import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { termSelector, changeTerm } from './searchSlice';
import { fetchFeed } from '../feed/feedSlice';
import styles from './Search.module.css';

export const Search = () => {
  const term = useSelector(termSelector);
  const dispatch = useDispatch();

  const getFeed = () => {
    const redditUrl = 'https://www.reddit.com';
    let query;
    if (term) {
      query = `/search.json?q=${term}`;
    } else {
      query = '/r/popular.json';
    }
    dispatch(fetchFeed( redditUrl + query ));
  }

  return (
    <div>
      <input
        id='term'
        name='term'
        type='text'
        className={styles.input}
        placeholder='Search for…'
        onChange={(e) => dispatch(changeTerm(e.target.value))}
      />
      <button onClick={getFeed}>Search</button>
    </div>
  )
}