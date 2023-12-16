import { PostsFeed } from "./modules/posts/ui/posts-feed/posts-feed";
import "./assets/styles/global.css";

function App() {
  return (
    <div className="App">
      <header className="text-xl font-bold">Posts Feed</header>
      <PostsFeed />
    </div>
  );
}

export default App;
