import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchSelector, setUrl } from '../search/searchSlice';
import { selectPostComments, toggleShowing, commentsLoaded, commentsFailed } from '../comments/commentsSlice';
import { Comments } from '../comments/Comments';
import { arrowUp, arrowDown, kNotation } from '../../common/util';
import ReactMarkdown from 'react-markdown';
import './Feed.css';

export const FeedItem = (props) => {
  const {
    id,
    title,
    author,
    preview,
    subreddit_name_prefixed,
    is_self,
    selftext,
    ups,
    downs,
    is_video,
    media,
    num_comments,
    permalink,
    upvote_ratio } = props.itemData;

  const search = useSelector(searchSelector);
  const dispatch = useDispatch();

  // Get the URL for the preview image if possible
  const previewUrl = () => {
    if (preview) {
      return preview.images[0].source.url.includes('//external')
        ? ''
        : preview.images[0].source.url.replace('//preview.', '//i.');
    } else {
      return '';
    }
  }

  const handleClick = (e, path) => {
    e.preventDefault();
    dispatch(setUrl(path));
  }

  // Ups & Downs badge element
  const upsDownsBadge = (num) => (
    <div className='upsDownsBadge' >
      {arrowUp} {kNotation(num)} {arrowDown}
    </div>
  );

  // Video Player element - (type="video/mp4")
  const videoPlayer = (media) => {
    const {
      scrubber_media_url,
      fallback_url,
      dash_url,
      hls_url,
      has_audio,
      height,
      width, } = media;
    return (
      <video className='video-player' width={width} height={height} controls >
        <source src={dash_url || scrubber_media_url || fallback_url} />
        Video unavailable
      </video>
  )};

  return (
    <div className='itemContainer'>
      <div className='itemAuthorAndSubreddit'>
        <span className='author'
          onClick={(e) => handleClick(e, `user/${author}`)}
        >
          u/{author}
        </span>
        <span className='subreddit'
          onClick={(e) => handleClick(e, subreddit_name_prefixed)}
        >
          {subreddit_name_prefixed}
        </span>
      </div>
      <div className='itemTitle'>
        {upsDownsBadge(ups + downs)}
        {title ? <h3>{title}</h3> : ''}
      </div>
      {previewUrl() ? <img className='img' src={previewUrl()} alt='' loading='lazy' /> : ''}
      {is_video ? videoPlayer(media.reddit_video) : ''}
      {selftext ? <ReactMarkdown>{selftext}</ReactMarkdown> : ''}
      <div className='comment-count' 
        onClick={() => dispatch(toggleShowing(id))}
      >
        Comments: {kNotation(num_comments)}
      </div>
      <Comments id={id} permalink={permalink} />
    </div>
  )
}