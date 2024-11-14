import React from 'react';
import { Feed } from './features/feed/Feed';
import { Subreddits } from './features/subreddits/Subreddits';
import { Search } from './features/search/Search';
import { CurrentThread } from './features/currentThread/CurrentThread';
import { UpButton } from './features/UpButton/UpButton';
import { MenuButton } from './features/MenuButton/MenuButton';
import { Footer } from './features/Footer/Footer';
import './App.css';
import './common/google-fonts.css';

function App() {
    return (
      <div className="App">
      <header className="App-header">
        <MenuButton />
        <div className="App-title grandstander-logo" aria-label='ireddit logo' >
          <img className='alien-logo' src='../reddit-logo.png' alt='' />
          <span className="highlight lobster-regular">i-</span>
          Reddit
        </div>
        <Search />
        <CurrentThread />
      </header>
      <main className="App-body">
        <Subreddits />
        <Feed />
        <UpButton />
      </main>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
