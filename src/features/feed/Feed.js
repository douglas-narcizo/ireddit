import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchFeed,
  selectFeed,
  feedLoaded,
  feedFailed,
} from './feedSlice';
import { FeedItem } from './FeedItem';
import { setTerm } from '../search/searchSlice';
import './Feed.css';

export const Feed = () => {
  const feed = useSelector(selectFeed);
  const isFeedLoaded = useSelector(feedLoaded);
  const isFeedFailed = useSelector(feedFailed);
  const dispatch = useDispatch();

/*  useEffect(() => {
    dispatch(fetchFeed('https://www.reddit.com/r/popular.json'));
  }, [dispatch]);
*/

  const feedList = (feed) => {
    if (isFeedLoaded) {
      let itemList = [];
      /* CONFIG ANTIGA ------
      let itemList = feed.data.children.map((item, index) => (
        <FeedItem key={index} itemData={item.data} />
      )); */
      for (const item of feed) {
        itemList.push(
          <FeedItem
            key={item.id}
            itemData={item}
          />
        )
      }
      dispatch(setTerm(''));
      return itemList;
    } else if (!isFeedFailed) {
      return 'Loading…';
    }
  }

  return (
    <div className='feedList'>
      {feedList(feed)}
      {isFeedFailed ? "Feed failed to load :(" : "" }
    </div>
  )
}