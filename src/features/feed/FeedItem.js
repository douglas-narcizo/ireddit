import React from 'react';
import styles from './Feed.module.css';
// in the future - import Markdown

export const FeedItem = (props) => {
  const {
    title,
    author,
    preview,
    subreddit_name_prefixed,
    is_self,
    selftext,
    ups,
    downs,
    is_video,
    upvote_ratio } = props.itemData;

  const kNotation = (num) => {
    if (num > 999) {
      return (num / 1000).toFixed(1).toString() + 'k';
    }
    return num.toString();
  }

  const previewUrl = () => {
    if (preview) {
      return preview.images[0].source.url.includes('//external')
        ? ''
        : preview.images[0].source.url.replace('//preview.', '//i.');
    } else {
      return '';
    }
  }

  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemTitle}>
        {title ? <h3>{title}</h3> : ''}
      </div>
      <div className={styles.itemAuthorAndSubreddit}>
        {author}
        <span className={styles.subreddit}>{subreddit_name_prefixed}</span>
      </div>
      {previewUrl() ? <img className={styles.img} src={previewUrl()} alt='' loading='lazy' /> : ''}
      {selftext ? <p>{selftext}</p> : ''}
      ⬆️ {kNotation(ups + downs)} ⬇️  –  {Number(upvote_ratio)*100}%
    </div>
  )
}