import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUrl } from '../search/searchSlice';
import { 
  toggleShowing,
  selectPostId,
  showPostComments, } from '../comments/commentsSlice';
import { Comments } from '../comments/Comments';
import { relativeTime, shortenNumber } from '../../common/util';
import { arrowUp, arrowDown } from '../../common/assets';
import ReactMarkdown from 'react-markdown';
import ReactHlsPlayer from 'react-hls-player';
import './Feed.css';

export const FeedItem = (props) => {
  const {
    id,
    title,
    author,
    preview,
    subreddit_name_prefixed,
    selftext,
    created_utc,
    ups,
    downs,
    is_video,
    media,
    num_comments,
    permalink, } = props.itemData;

  const showingCommentsId = useSelector(selectPostId);
  const showCommentsEnabled = useSelector(showPostComments);
  const dispatch = useDispatch();
  const isShowingComments = showingCommentsId === id && showCommentsEnabled;

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
      {arrowUp} {shortenNumber(num, 1)} {arrowDown}
    </div>
  );

  // Video Player element - (type="video/mp4")
  const videoPlayer = (media) => {
    const {
      scrubber_media_url,
      fallback_url,
      hls_url,
      height,
      width, } = media;
    return (
      <ReactHlsPlayer
        className='video-player' width={width} height={height}
        src={hls_url || scrubber_media_url || fallback_url}
        controls={true}
        autoPlay={false}
      />
  )};

  return (
    <div className='itemContainer'>
      <div className='itemAuthorAndSubreddit'>
        <span className='author'
          onClick={(e) => handleClick(e, `user/${author}`)}
        >
          u/{author}
          <span className='relative-time created-at'>{relativeTime(created_utc)}</span>
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
      {selftext ? <ReactMarkdown className='markdown-body'>{selftext}</ReactMarkdown> : ''}
      <div className={`comment-count${isShowingComments ? ' showing-comments' : '' }`} 
        onClick={() => dispatch(toggleShowing(id))}
      >
        Comments: {shortenNumber(num_comments, 1)}
      </div>
      <Comments id={id} permalink={permalink} />
    </div>
  )
}
