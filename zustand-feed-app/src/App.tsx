import { PostsFeed } from "./modules/posts/ui/postsFeed/postsFeed";
import "./assets/styles/global.css";
import { SimpleLayout } from "./modules/common/layouts/simpleLayout/simpleLayout";

function App() {
  return (
    <SimpleLayout>
      <header className="text-xl font-bold mb-5">Posts Feed</header>
      <PostsFeed />
    </SimpleLayout>
  );
}

export default App;
