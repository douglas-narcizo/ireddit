import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { 
  fetchPostComments,
  selectPostComments,
  selectPostId,
  showPostComments,
  commentsLoaded,
  commentsFailed
} from './commentsSlice';
import './Comments.css';

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
//      console.log(`Nem - postId=${postId} - id=${id}`);
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
  },[showComments]);

  const commentList = (comments) => {
    if (commentsAreLoaded) {
      return comments.map(comment => (
        <div className='comment' key={comment.id}>
          <p>{comment.author}<span>{Date(comment.created_utc)}</span></p>
          <ReactMarkdown>{comment.body}</ReactMarkdown>
        </div>
      ));
    } else if (commentsAreFailed) {
      return <p>Failed to load comments…</p>
    } else {
      return <p>Comments Loading…</p>
    }
  };

  return (
    <div className='comments'>
      {showCommentsForThisPost ? commentList(postComments) : ''}
    </div>
  )
}