export const FullSection = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <section className={`w-full py-10 ${className}`}>{children}</section>;
