import clsx from "clsx";

type SkeletonProps = {
  width?: string;
  height?: string;
  className?: string;
  rounded?: boolean;
};

export const Skeleton = ({
  width = "100%",
  height = "1rem",
  className = "",
  rounded = true,
}: SkeletonProps) => {
  return (
    <div
      className={clsx(
        "bg-gray-300 animate-pulse",
        rounded && "rounded-md",
        className
      )}
      style={{ width, height }}
    />
  );
};