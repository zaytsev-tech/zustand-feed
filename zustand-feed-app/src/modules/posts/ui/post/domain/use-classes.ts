import classNames from "classnames";

export const useClasses = () => {
  const rootClassnames = classNames(
    "mb-3",
    "p-3",
    "rounded-md",
    "border-solid",
    "border-2",
    "border-sky-500",
    "text-lg",
    "font-bold",
    "cursor-pointer"
  );

  const titleClassnames = classNames(
    "text-black",
    "font-semibold",
    "font-bold"
  );
  const bodyClassnames = classNames("text-slate-500", "font-medium");

  return { rootClassnames, titleClassnames, bodyClassnames };
};
