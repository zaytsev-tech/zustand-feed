import classNames from "classnames";
import { PropsWithChildren } from "react";

export const SimpleLayout = ({ children }: PropsWithChildren) => {
  const root = classNames("px-20", "py-5", "mx-auto");

  return <div className={root}>{children}</div>;
};
