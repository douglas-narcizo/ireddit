import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { searchSelector, setUrl } from '../search/searchSlice';
import { arrowUp, arrowDown, kNotation } from '../../common/util';
import './Feed.css';
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
    num_comments,
    upvote_ratio } = props.itemData;

  const search = useSelector(searchSelector);
  const dispatch = useDispatch();
//  const navigate = useNavigate();

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
//    navigate({ pathname: path });
  }

  // Ups & Downs badge element
  const upsDownsBadge = (num) => (
    <div className='upsDownsBadge' >
      {arrowUp} {kNotation(num)} {arrowDown}
    </div>
  );

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
      {selftext ? <p>{selftext}</p> : ''}
      <div className='itemFooter'>
        Comments: {kNotation(num_comments)}
      </div>
    </div>
  )
}