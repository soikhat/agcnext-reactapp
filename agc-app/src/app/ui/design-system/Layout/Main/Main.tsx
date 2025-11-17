type MainProps = {
  children: React.ReactNode;
  className?: string;
};

export const Main = ({ children, className = "" }: MainProps) => (
  <main className={`mx-auto px-4 py-8 ${className}`}>{children}</main>
);
