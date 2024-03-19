import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  selectSubreddits,
  subredditsLoaded,
  subredditsFailed,
  fetchSubreddit } from './subredditsSlice';
import { SubredditCard } from './SubredditCard';
import  './Subreddits.css';

export const Subreddits = () => {
  const dispatch = useDispatch();
  const allSubreddits = useSelector(selectSubreddits);
  const isSubreddLoaded = useSelector(subredditsLoaded);
  const isSubreddFailed = useSelector(subredditsFailed);

  const populateList = () => {
    let navList = [];
    for (let i = 1; i <= 15; i++) {
      navList.push(
        <li key={'nav'+i} className='subredd-item'>Subreddit {i}</li>
      );
    }
    return navList;
  }

  useEffect(() => {
    dispatch(fetchSubreddit());
  }, []);

  const subreddList = (allSubs) => {
    if (isSubreddLoaded) {
      let itemList = allSubs.map((item) => (
        <SubredditCard key={item.id} itemData={item} />
      ));
      return itemList;     
    } else if (!isSubreddFailed) {
      return 'Loading…';
    }
  }

  return (
    <aside className='subredd-list'>
      <h3>Subreddits</h3>
      <ul>
        {subreddList(allSubreddits)}
      </ul>
    </aside>
  );
};

export default Subreddits;