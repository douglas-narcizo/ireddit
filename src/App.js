import React from 'react';
// import logo from './logo.svg';
import { Feed } from './features/feed/Feed';
import { Subreddits } from './features/subreddits/Subreddits';
import { Search } from './features/search/Search';
import { CurrentThread } from './features/currentThread/CurrentThread';
import { UpButton } from './features/UpButton/UpButton';
import { FaRedditAlien } from "react-icons/fa6";
import './App.css';
import './common/google-fonts.css';

function App() {
    return (
      <div className="App">
      <header className="App-header">
        <div className="App-title grandstander-logo">
          <FaRedditAlien className='alien-logo' />
          <span className="highlight lobster-regular">i-</span>
          Reddit
        </div>
        <Search />
        <CurrentThread />
      </header>
      <div className="App-body">
        <Subreddits />
        <Feed />
        <UpButton />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
