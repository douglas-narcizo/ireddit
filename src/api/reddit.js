export const API_ROOT = 'https://www.reddit.com';

export const getFeedPosts = async (feed) => {
  let response;
  if (feed.includes('search')) {
    response = await fetch(`${API_ROOT}${feed}`);
  } else {
    response = await fetch(`${API_ROOT}/${feed}.json`.toLowerCase());
  }
  const json = await response.json();
  return json.data.children.map((post) => post.data);
};

export const getSearch = async (term) => {
    term.replaceAll(' ', '%20').toLowerCase();
    const response = await fetch(`${API_ROOT}/search.json?q=${term}`);
    const json = await response.json();
    return json.data.children.map((post) => post.data);
  };  

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();
  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();
  return json[1].data.children.map((subreddit) => subreddit.data);
};
