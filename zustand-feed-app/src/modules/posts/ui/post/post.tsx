type PostProps = {
  userId: string;
  title: string;
  body: string;
};

export const Post = ({ userId, title, body }: PostProps) => {
  return (
    <div className="container mx-auto mb-3 p-3 rounded-md border-solid border-2 border-sky-500 text-lg font-bold">
      <h4 className="text-black font-semibold font-bold">{title}</h4>
      <p className="text-slate-500 font-medium">{body}</p>
    </div>
  );
};
