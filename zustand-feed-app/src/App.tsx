import React from "react";
import logo from "./logo.svg";
import { PostsFeed } from "./modules/posts/ui/posts-feed/posts-feed";

function App() {
  return (
    <div className="App">
      <header>Posts Feed</header>
      <PostsFeed />
    </div>
  );
}

export default App;
