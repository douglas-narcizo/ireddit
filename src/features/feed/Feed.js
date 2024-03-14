import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  fetchFeed,
  selectFeed,
  feedLoaded,
  feedFailed,
} from './feedSlice';
import { FeedItem } from './FeedItem';
import styles from './Feed.module.css';

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
      let itemList = feed.data.children.map((item, index) => (
        <FeedItem
          key={index}
          itemData={item.data}
        />
      ));
      return itemList;
    }
  }

  return (
    <div className={styles.feedList}>
      {feedList(feed)}
      {isFeedFailed ? "Feed failed to load :(" : "" }
    </div>
  )
}