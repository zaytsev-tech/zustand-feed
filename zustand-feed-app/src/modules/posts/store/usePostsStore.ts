import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { postsInitialState } from "../domain/initialState";
import { Post, PostsStore } from "../domain/types";

export const usePostsStore = create(
  devtools<PostsStore>(
    (set) => ({
      ...postsInitialState,
      getPosts: async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const posts: Post[] = await response.json();

        set({ posts: [...posts] });
      },
    }),
    {
      name: "posts-store",
    }
  )
);
