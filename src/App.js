import React from 'react';
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import Root from './features/root';
import { Feed } from './features/feed/Feed';
import { Subreddits } from './features/subreddits/Subreddits';
import { Comments } from './features/comments/Comments';
import { Search } from './features/search/Search';
import { CurrentThread } from './features/currentThread/CurrentThread';
import './App.css';

/* const appRouter = createBrowserRouter( createRoutesFromElements(
  <Route path='/' element={ <Root /> } >
    <Route index element={ <Feed /> } />
    <Route path='/search' element={ <Feed /> } />
    <Route path='/user/:author' element={ <Feed /> } />
    <Route path='/r/:subreddit' element={ <Feed /> } />
    <Route path='/comments' element={ <Comments /> } />
  </Route>
)); */

function App() {
/*  return (
    <RouterProvider router={appRouter} />
  );

/*  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-title"><span className="highlight">i</span>Reddit</h2>
        <Search />
      </header>
      <div className="App-body">
        <Feed />
        <Comments />
      </div>
    </div>
  ); */

    return (
      <div className="App">
      <header className="App-header">
        <div className="App-title"><span className="highlight">i</span>Reddit</div>
        <Search />
        <CurrentThread />
      </header>
      <div className="App-body">
        <Subreddits />
        <Feed />
      </div>
    </div>
  );
}

export default App;
