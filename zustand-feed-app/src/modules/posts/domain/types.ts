export type Post = {
  id: string;
  userId: string;
  title: string;
  body: string;
};

export type PostsStore = {
  posts: Post[];
  getPosts: () => void;
};
