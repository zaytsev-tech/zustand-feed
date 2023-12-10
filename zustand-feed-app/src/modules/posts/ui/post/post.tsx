type PostProps = {
  userId: string;
  title: string;
  body: string;
};

export const Post = ({ userId, title, body }: PostProps) => {
  return (
    <div className="border-solid border-2 border-sky-500 text-3xl font-bold underline">
      <h4 className="text-lg text-black font-semibold text-3xl font-bold underline">
        {title}
      </h4>
      <p className="text-slate-500 font-medium">{body}</p>
    </div>
  );
};
