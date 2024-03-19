import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Search } from '../../features/search/Search';
import Subreddits from '../subreddits/Subreddits';
// import { Feed } from './features/feed/Feed';
// import { Comments } from './features/comments/Comments';

const Root = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="App-header">
        <div className="App-title"><span className="highlight">i</span>Reddit</div>
        <Search />
      </header>
      <div className="App-body">
        <Subreddits />
        <Outlet />
      </div>
    </>
  );
};

export default Root;