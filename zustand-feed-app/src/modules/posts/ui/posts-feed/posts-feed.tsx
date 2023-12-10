import { useEffect } from "react";
import { usePostsStore } from "../../store/usePostsStore";
import { Post } from "../post/post";

export const PostsFeed = () => {
  const posts = usePostsStore((state) => state.posts);
  const getPosts = usePostsStore((state) => state.getPosts);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
