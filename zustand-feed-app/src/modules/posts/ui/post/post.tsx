import { useClasses } from "./domain/use-classes";

type PostProps = {
  userId: string;
  title: string;
  body: string;
};

export const Post = ({ userId, title, body }: PostProps) => {
  const { rootClassnames, titleClassnames, bodyClassnames } = useClasses();

  return (
    <div className={rootClassnames}>
      <h4 className={titleClassnames}>{title}</h4>
      <p className={bodyClassnames}>{body}</p>
    </div>
  );
};
