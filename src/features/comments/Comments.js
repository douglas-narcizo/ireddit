import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { fromNow } from '../../common/fromNow/from-now';
import { shortenNumber } from '../../common/util';
import { arrowUp, arrowDown } from '../../common/assets';
import { 
  fetchPostComments,
  selectPostComments,
  selectPostId,
  showPostComments,
  commentsLoaded,
  commentsFailed
} from './commentsSlice';
import './Comments.css';
import '../../common/github-markdown.css';

export const Comments = (props) => {
  const postComments = useSelector(selectPostComments);
  const postId = useSelector(selectPostId);
  const showComments = useSelector(showPostComments);
  const commentsAreLoaded = useSelector(commentsLoaded);
  const commentsAreFailed = useSelector(commentsFailed);
  const dispatch = useDispatch();

  const showCommentsForThisPost = showComments && (postId === props.id);

  const getCommentsFor = (id) => {
    if (!showComments) {
      return;
    }
    if (commentsAreLoaded) {
      return;
    }
    if (postId !== id) {
      return;
    }
    console.log(`Buscou comentários para o id '${id}'`);
    dispatch(fetchPostComments(props.permalink));
  }  

  useEffect(() => {
    getCommentsFor(props.id)
  },[showComments, postId]);

  const relativeTime = (utc) => {
    const date = new Date(utc*1000);
    return utc ? '• ' + fromNow(date) : null;
  }

  const commentList = (comments) => {
    if (commentsAreLoaded) {
      return comments.map(comment => (
        <div className='comment' key={comment.id}>
          <div className='comment-header' >
            <div className='comment-author' >{comment.author}
              <div className='comment-date' >{relativeTime(comment.created_utc)}</div>
            </div>
            <div className='ups-downs-badge' >{arrowUp} {shortenNumber(comment.ups+comment.downs, 1)} {arrowDown}</div>
          </div>
          <ReactMarkdown key={comment.id}>{comment.body}</ReactMarkdown>
        </div>
      ));
    } else if (commentsAreFailed) {
      return <p>Failed to load comments…</p>
    } else {
      return <p>Comments Loading…</p>
    }
  };

  return (
    <div className='comments' >
      {showCommentsForThisPost ? commentList(postComments) : null}
    </div>
  )
}
